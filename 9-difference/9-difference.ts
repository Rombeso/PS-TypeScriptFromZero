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

type IDifference = Omit<IA, keyof IB>

function difference(obj1: IA, obj2: IB): IDifference {
    let res = obj1

    for(let key in obj2) {
        if(key in obj1) {
            delete res[key]
        }
    }

    return res
}

let v0: IDifference = difference(a, b)
console.log(v0)