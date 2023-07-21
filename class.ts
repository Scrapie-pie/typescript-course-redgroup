class Car {
  name: string
  price: number

  constructor(name: string, price: number) {
    this.name = name
    this.price = price
  }

  getInfo1(): string {
    return `${this.name} - ${this.price}`
  }

  public getInfo2(): string {
    return `${this.name} - ${this.price}`
  }

  private privateGetInfo1(): string {
    return `${this.name} - ${this.price}`
  }

  anyting() {
    this.privateGetInfo1()
  }

}


class Bus extends Car {
  constructor(name: string, price: number) {
    super(name, price)
  }

  test() {
    this.getInfo1()
  }
}

new Car('BNW', 100000).getInfo1()