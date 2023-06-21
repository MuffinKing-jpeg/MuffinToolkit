export interface MessageInterface {
  type: 'info' | 'warn' | 'error'
  heading: string
  msg?: string
}
