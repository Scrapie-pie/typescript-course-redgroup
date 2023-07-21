function entity<T>(args: T): T {
  return args
}

entity<number>(1)
entity<string>('1')

const entity2 = <T>(args: T): T => {
  return args
}

class Channel<T> {
  private name: T

  constructor(name: T) {
    this.name = name
  }

  getName(): T {
    return this.name
  }
}

new Channel<string>('RED Group')
new Channel<number>(1)

interface IPair<K, V> {
  key: K
  value: V
}

const pair1: IPair<string, number> = {
  key: '1',
  value: 1
}

type TypeLength = {
  length: number
}

function getNameLength<T extends TypeLength>(entity: T): number {
  return entity.length
}

getNameLength('str')
getNameLength([0, 1, 2])