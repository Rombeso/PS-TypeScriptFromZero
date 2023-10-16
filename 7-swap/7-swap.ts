const obj: Record<string, number> = {
    a: 1,
    b: 2
}

function swapKeysAndValues <T extends string, N>(obj: Record<T, N>): Record<T, T> | {} {
    let result = {}
   for (let [k, v] of Object.entries(obj)) {
       const newV = String(v)
       result[newV] = k
   }
   return result
}

const res = swapKeysAndValues<string, number>(obj)

console.log(res)