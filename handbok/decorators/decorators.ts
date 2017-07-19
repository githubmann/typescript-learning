
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

// TODO: go on
/* 
  commond line
  tsc decorator.ts --target es5 --experimentalDecorator
*/

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
function enumerable(value: boolean) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value
  }
}