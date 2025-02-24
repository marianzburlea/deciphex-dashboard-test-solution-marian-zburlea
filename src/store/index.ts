import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { TCase, TCaseKey, TOrder } from '../type'

type TPage = {
  page: number
  total: number
  limit: number
  list: TCase[]
}

type TCaseState = {
  filterAndSort: TCase[]
  caseSelectList: string[]
  status: string
  search: string
  columnMap: Partial<Record<TCaseKey, boolean>>
  sort: {
    order: TOrder
    column: TCaseKey | null
  }
  caseData: TPage
  // set
  setStatus: (statusInfo: { caseName: string; status: string }) => void
  setCaseSelect: (id: string) => void
  setSerchTerm: (search: string) => void
  setCheckedMap: (columnMap: Partial<Record<TCaseKey, boolean>>) => void
  setCasePartialSelect: () => void
  setCasePage: (page: TPage) => void
  getCasePage: (status: string) => void
  setCaseCurentPage: (page: number) => void
  setSort: (sortBy: TCaseKey) => void
}

export const useCaseStore = create<TCaseState>()(
  devtools((set, get) => ({
    list: [],
    caseData: {
      page: 1,
      total: 10,
      limit: 50,
      list: [],
    },
    caseSelectList: [],
    sort: { column: null, order: 'asc' },
    setCheckedMap: (columnMap) => set({ columnMap }),
    setSort: async (column) => {
      let order = get().sort.order

      if (get().sort.column === column) {
        order = order === 'asc' ? 'desc' : 'asc'
      } else {
        order = 'asc'
      }

      set({
        sort: {
          order,
          column,
        },
      })

      const url = `/api/case?status=${get().status}&page=${
        get().caseData.page
      }&sort=${column}&order=${order}`

      const caseData = await (await fetch(url)).json()
      set({ caseData })
    },
    setStatus: async ({ caseName, status }) => {
      if (status && caseName) {
        await (
          await fetch('/api/case/status', {
            method: 'PATCH',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({
              idList: caseName === 'all' ? get().caseSelectList : [caseName],
              status,
            }),
          })
        ).json()

        const url = `/api/case?status=${get().status}&page=${
          get().caseData.page
        }`

        setTimeout(async () => {
          const caseData = await (await fetch(url)).json()
          set({ caseData })
        }, 50)
        if (caseName === 'all') {
          set({
            caseSelectList: [],
          })
        }
      }
    },
    setSerchTerm: async (searchTerm: string) => {
      const caseData = await (
        await fetch(
          `/api/case?status=${get().status}&page=1&search=${searchTerm}`
        )
      ).json()

      set({ caseData, status })
    },
    getCasePage: async (status: string) => {
      const caseData = await (
        await fetch(`/api/case?status=${status}&page=1`)
      ).json()

      set({ caseData, status })
    },
    setCaseCurentPage: async (page) => {
      const caseData = await (
        await fetch(`/api/case?status=${get().status}&page=${page}`)
      ).json()

      set({ caseData })
    },
    setCasePartialSelect: () =>
      set({
        caseSelectList:
          get().caseSelectList.length > 0
            ? []
            : get().caseData.list.map(({ caseName }) => caseName),
      }),

    setCaseSelect: (caseName: string) =>
      set({
        caseSelectList: get().caseSelectList.includes(caseName)
          ? get().caseSelectList.filter((item) => item !== caseName)
          : get().caseSelectList.concat(caseName),
      }),
    setCasePage: (caseData) => set({ caseData }),
    setFilterAndSort: () => {},
  }))
)
