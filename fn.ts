type TypeChannelReturn = {
  name: string
}

function getChannel(name: string): TypeChannelReturn {
  return { name }
}

type TypeChannelFunction = (name: string) => TypeChannelReturn

const getChannelName: TypeChannelFunction = (name) => {
  return { name }
}

const getNumber = (...numbers: number[]) => {
  return numbers
}

// Перегрузки
function getCar(name: string): string
function getCar(name: string, price: number): string
function getCar(name: string, price?: number): string {
  return price ? `Название ${name}, Цена ${price}` : `Название ${name}`
}

const car1 = getCar('bmw')
const car2 = getCar('bmw', 100000)