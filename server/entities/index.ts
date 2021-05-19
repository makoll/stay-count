type TUser = {
  id: number
  firstName: string
  lastName: string
}
export class User {
  constructor(init: TUser) {
    Object.assign(this, init)
  }
  id: number
  firstName: string
  lastName: string
  get name(): string {
    return `${this.firstName} ${this.lastName}`
  }
}
