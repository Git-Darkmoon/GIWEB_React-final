export type User = {
  readonly id: number
  readonly name: string
  readonly username: string
  readonly email: string
  readonly address: Address
  readonly phone: string
  readonly website: string
  readonly company: Company
}

export type Address = {
  readonly street: string
  readonly suite: string
  readonly city: string
  readonly zipcode: string
  readonly geo: Geo
}

export type Geo = {
  readonly lat: string
  readonly lng: string
}

export type Company = {
  readonly name: string
  readonly catchPhrase: string
  readonly bs: string
}
