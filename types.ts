const cool: boolean = true
const cool2: string = 'true'

// array
const pets: string[] = ['cat','dog'] 
const pets2: Array<string> = ['cat','dog'] 

let meh: undefined =undefined
let meh2: null =null

let obj: object = {a: 'asd'}

// Tuple
let basket: [string, number]
basket = ['asdf',5]

// Enum
enum Size {Small = 1, Medium =2, Large =3}
let sizeName: string = Size[2]


// Any !!!!!!!!!!!
let whatever: any = 'asdfasdf'

// void
let func = ():void => {
  console.log('asdf')
  // return 'asdf'
}

let func2 = ():string => {
  console.log('asdf')
  return 'asdf'
}

// interface
interface RobotArmy {
  count: number,
  type: string,
  magic?: string 
}

let funcc = (robots: RobotArmy) => {
  console.log(robots)
}

funcc({type:'adsf', count:2})


// functions
let func3 = (robots: RobotArmy): void => {
  console.log(robots)
}

// Class
class Animal {
  sing: string
  constructor(sound: string) {
    this.sing  = sound
  }

  greet() {
    return `Hello ${this.sing}`
  }
}

const lion = new Animal('Raaaawwwr!!')
console.log(lion.greet())
