
function color(value: string) { // this is decorator factory
  return function(target) { // this is decorator
    // do something with 'target' and 'value'...
  }
}

function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

class C {
    @f()
    @g()
    method() {}
}

function sealed(construtor: Function) {
  Object.seal(construtor)
  Object.seal(construtor.prototype)
}
// class decorator
@sealed
class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    return `Hello, ${this.greeting}`
  }
}

/* 
  commond line
  tsc decorator.ts --target es5 --experimentalDecorator
*/
// method decorator
class Greeter2 {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  @enumerable(false)
  greet() {
    return `Hello, ${this.greeting}`
  }
}
function enumerable(value: boolean) { // this is factory
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value
  }
}

// Accessor decorator
class Point {
  private _x: number
  private _y: number
  constructor(x: number, y: number) {
    this._x = x
    this._y = y
  }

  @configurable(false)
  get x() {return this._x}

  @configurable(false)
  get y() {return this._x}
}

function configurable(value: boolean) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.configurable = value
  }
}
function writable(value: boolean) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.writable = value
  }
}
// property decorator

class Greeter3 {
  @format("Hello, %s")
  greeting: string

  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    let formatString = getFormat(this, 'greeting')
    return formatString('%s', this.greeting)
  }
}
// TODO:
// 属性描述器

let o: object, d
o = {
  get foo() {
    return 17
  }
}
d = Object.getOwnPropertyDescriptor(0, 'foo')
o = { bar: 42}
d = Object.getOwnPropertyDescriptor(0, 'bar')

// 记住，这些选项不一定是自身属性，如果
// 是继承来的也要考虑。为了确认保留这些默认值，你可能要
// 在这之前冻结 Object.prototype，明确指定所有的选项，或者将__prot
// o__属性指向null。

// // 使用 __proto__
let  obj = {}
let descriptor = Object.create(null)
descriptor.value = 'static'
Object.defineProperty(obj, 'key', descriptor)

//// 显式
Object.defineProperty(obj, 'key', {
   enumerable: false,
   configurable: false,
   writable: false,
    value: "static"
})