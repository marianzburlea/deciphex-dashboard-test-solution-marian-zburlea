export type TStatus = 'Accepted' | 'Rejected' | 'In Progress'
export type TOrder = 'asc' | 'desc'

export type TCase = {
  caseName: string
  priority: string
  assignee: string
  description: string
  status: TStatus
  type: string
  dateCreated: string
  lastUpdated: string
}

export type TCaseKey =
  | 'caseName'
  | 'priority'
  | 'assignee'
  | 'description'
  | 'status'
  | 'type'
  | 'dateCreated'
  | 'lastUpdated'
