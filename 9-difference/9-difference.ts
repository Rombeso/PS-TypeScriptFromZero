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
// type TDifference = Omit<IA, keyof IB>
type TDifference2<A extends {}, B extends {}> = Pick<A, Exclude<keyof A, keyof B>>

function difference<A extends {}, B extends {}>(obj1: A, obj2: B): TDifference2<A, B> {
    let res: TDifference2<A, B> = obj1 as TDifference2<A, B>
    for(let key in obj2) {
        if(key in obj1) {
            delete res[key as Exclude<keyof A, keyof B>]
        }
    }
    return res
}

let v1 = difference(a, b)

console.log(v1)