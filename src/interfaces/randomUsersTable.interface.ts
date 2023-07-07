export interface UsersTableBodyInterface {
  firstName?: string
  lastName?: string
  number?: string
  email?: string
  uuid?: string
}

export interface RandomUsersTableInterface {
  heading: string[]
  body: UsersTableBodyInterface[]
}
