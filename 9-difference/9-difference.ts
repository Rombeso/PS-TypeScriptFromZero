interface IA {
    a: number
    b: string
}

interface IB {
    a: number
    c: boolean
}

let a: IA = { a: 5, b: '' }
let b: IB = { a: 10, c: true }

interface IDifference {
    b: string
}
type TDifference = Omit<IA, keyof IB>
type TExclude = Exclude<keyof IA, keyof IB>
type TDifference2 = Pick<IA, TExclude>

function difference(obj1, obj2) {
    let res = obj1
    for(let key in obj2) {
        if(key in obj1) {
            delete res[key]
        }
    }
    return res
}

let v0: IDifference = difference(a, b)
let v1: TDifference2 = difference(a, b)

console.log(v0)
console.log(v1)