interface ICar {
  id: number
  name: string
  price: number
  yearBuild: number
}
interface ICarCreate extends Omit<ICar, 'id'> {}
interface ICarId extends Pick<ICar, 'id'> {}
interface IOptionalCar extends Partial<ICar> {}
interface IReadonlyCar extends Readonly<ICar> {}
interface IRequiredCar extends Required<ICar> {}

const car1: ICarCreate = {
  name: '',
  price: 0,
  yearBuild: 0
}

const car2: ICarId = {
  id: 0
}

const car3: IOptionalCar = {}


type TypeCarRecord = Record<'name' | 'price', string | number>
type TypeGetName = () => string
type Return = ReturnType<TypeGetName>
type Duplicate = Extract<'max' | 'andrey', 'andrey' | 'misha'>
type First = Exclude<'max' | 'andrey', 'andrey' | 'misha'>
type NotNull = NonNullable<string | number | null | undefined>

// const car: TypeCarRecord = {
//
// }

