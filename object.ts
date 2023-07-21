type TypeUser = {
  name: string
  age: number
}

type TypeAddress = {
  city: string
  country: string
}

let user: TypeUser

user = {
  name: 'Max',
  age: 24
}

const address: TypeAddress = {
  city: 'SPB',
  country: 'Russia'
}

let common: TypeUser & TypeAddress

common = {
  ...user, ...address
}