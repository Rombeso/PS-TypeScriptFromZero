const obj: Record<string, number> = {
    a: 1,
    b: 2
}

const obj2 ={}

function swapKeysAndValues <T extends string, N>(obj: Record<T, N>): Record<T, T> {
    let result: Record<T, T> = {}
   for (let [k, v] of Object.entries(obj)) {
       const newV = String(v)
       result[newV] = k
   }
   return result
}

const res = swapKeysAndValues<string, number>(obj)
const res2 = swapKeysAndValues<string, number>(obj2)

console.log(res)
console.log(res2)