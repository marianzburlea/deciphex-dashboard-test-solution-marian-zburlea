import express from 'express'
import type { Request, Response } from 'express'
import bodyParser from 'body-parser'
import fs from 'node:fs/promises'
import type { TCase, TOrder } from './type'

const app = express()
const port = 3000

app.use(bodyParser.json())

const dataFile = './src/data/case.json'

// Load data from JSON file
const loadData = async (): Promise<TCase[]> => {
  try {
    const data = await fs.readFile(dataFile, 'utf8')

    return JSON.parse(data)
  } catch (err) {
    console.error('Error reading file:', err)
    return []
  }
}

// Save data to JSON file
const saveData = async (data: TCase[]) => {
  try {
    await fs.writeFile(dataFile, JSON.stringify(data, null, 2), 'utf8')
  } catch (err) {
    console.error('Error writing file:', err)
  }
}

// Sort helper function
const sortData = async (data: TCase[], field: keyof TCase, order: TOrder) => {
  return data.sort((a, b) => {
    const valueA = a[field]
    const valueB = b[field]

    // Check if the values can be converted to valid dates
    const dateA = new Date(valueA)
    const dateB = new Date(valueB)

    if (!Number.isNaN(dateA) && !Number.isNaN(dateB)) {
      return order === 'asc'
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA)
    }

    if (valueA < valueB) return order === 'asc' ? -1 : 1
    if (valueA > valueB) return order === 'asc' ? 1 : -1
    return 0
  })
}

// API endpoint to search, sort, and paginate users
app.get('/case', async (req, res) => {
  const {
    search,
    sort,
    order = 'asc',
    page = 1,
    limit = 10,
    status,
  } = req.query as unknown as {
    search: string
    sort: keyof TCase | null
    page: number
    limit: number
    status?: TCase['status']
    order: TOrder
  }

  let data = await loadData()

  // Search functionality
  if (search) {
    data = data.filter((user) =>
      Object.values(user).some((value) =>
        value.toString().toLowerCase().includes(search.toLowerCase())
      )
    )
  }

  // Sorting functionality
  if (sort) {
    data = await sortData(data, sort, order)
  }

  // Status filtering
  if (status) {
    data = data.filter(
      (user) => user.status.toLowerCase() === status.toLowerCase()
    )
  }

  // Pagination
  const startIndex = (Number(page) - 1) * limit
  const endIndex = Number(page) * limit
  const paginatedResults = data.slice(
    startIndex,
    Math.min(endIndex, data.length)
  )

  res.json({
    total: data.length,
    page: Number(page),
    limit,
    list: paginatedResults,
  })
})

// Endpoint to update status of one or more cases
app.patch('/case/status', async (req: Request, res: Response) => {
  const { idList, status } = req.body
  const data = await loadData()

  if (!idList || !status) {
    res.status(400).json({ message: 'IDs and status arfrom d' })
  }

  const validStatusList = ['Accepted', 'Rejected']

  if (validStatusList.includes(status)) {
    let updatedCount = 0

    for (const item of data) {
      if (idList.includes(item.caseName)) {
        item.status = status
        updatedCount++
      }
    }

    saveData(data)

    res.json({
      message: `Status updated to ${status} for ${updatedCount} cases.`,
      updatedCount,
    })
  }

  res.status(400).json({ message: 'Invalid status provided' })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
