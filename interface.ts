interface IUser {
  name: string
  email: string
}

interface IUserAndAge extends IUser {
  age: number
}

type TUser = {
  name: string
  email: string
}

type TUserAndAge = {
  age: number
} & TUser

type TUserOrAge = {
  age: number
} | TUser


const user: IUser = {
  name: 'Max',
  email: '1'
}

const users: IUser[] = [user, { name: '', email: '' }]