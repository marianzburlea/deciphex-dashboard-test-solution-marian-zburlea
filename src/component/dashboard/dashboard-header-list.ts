import type { TCaseKey } from '../../type'

export const dashboardHeaderList: {
  name: TCaseKey
  span: string
  label: string
}[] = [
  { span: 'auto', name: 'caseName', label: 'Case name' },
  { span: 'auto', name: 'priority', label: 'Priority' },
  { span: 'auto', name: 'assignee', label: 'Assignee' },
  { span: '1fr', name: 'description', label: 'Description' },
  { span: 'auto', name: 'status', label: 'Status' },
  { span: 'auto', name: 'type', label: 'Type' },
  { span: 'auto', name: 'dateCreated', label: 'Date created' },
  { span: 'auto', name: 'lastUpdated', label: 'Last updated' },
]
