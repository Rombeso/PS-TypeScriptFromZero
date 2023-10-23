const user = {
    name: 'Vasya',
    age: 8,
    skills: ['typescript', 'javascript']
}

const pickObjectKeys = <T, R extends keyof T>(obj: T, fields: R[]): { [el in typeof fields[number]]: T[el] } => {
    let res = {} as { [el in typeof fields[number]]: T[el] }
    for(let key of fields){
        res[key] = obj[key]
    }
    return res
}

const res = pickObjectKeys<typeof user, keyof typeof user>(user, ['age', 'skills'])

console.log(res)