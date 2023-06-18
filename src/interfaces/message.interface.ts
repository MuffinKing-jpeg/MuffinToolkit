export interface MessageInterface {
  type: 'info' | 'warn' | 'error' | 'debug'
  heading: string
  msg?: string
}
