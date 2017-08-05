// bad
class PersonBad {
  public name: string
  public subName: string
  public email: string
  constructor(name: string, subName: string, email: string) {
    this.name = name
    this.subName = subName
    if (this.validateEmail(email)) {
      this.email = email
    } else {
      throw new Error('please input valid email')
    }
  }

  validateEmail(email) {
    return /\S+@\s+\.\S+/.test(email)
  }
}

// great

class Email {
  private email: string
  constructor(email: string) {
    if (this.validateEmail(email)) {
      this.email = email
    } else {
      throw new Error('please input valid email')
    }
  }
  private validateEmail(email) {
    return /\S+@\s+\.\S+/.test(email)
  }
  get(): string{
    return this.email
  }
}
class PersonGreat {
  public name: string
  public subName: string
  public email: Email
  constructor(name: string, subName: string, email: Email) {
    this.name = name
    this.subName = subName
    this.email = email
  }
}
