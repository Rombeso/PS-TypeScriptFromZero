import fetch from 'node-fetch'

enum Gender {
    MALE = 'male',
    FEMALE = 'female'
}

enum HairColor {
    BLACK = 'Black',
    CHESTNUT = 'Chestnut'
}

enum HairType {
    STRANDS = 'Strands',
    WAVY = 'Wavy'
}

enum EyeColor {
    BLUE = 'Blue',
    GREEN = 'Green'
}

interface IAddress {
    address: string,
    city: string,
    coordinates: {
        lat: number,
        lng: number
    },
    postalCode: string,
    state: string
}

interface IHair {
    color: HairColor,
    type: HairType
}


interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: Gender,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: EyeColor,
    hair: IHair,
    domain: string,
    ip: string,
    address: IAddress,
    macAddress: string,
    university: string,
    bank: {
        cardExpire: string,
        cardNumber: string,
        cardType: string,
        currency: string,
        iban: string
    },
    company: {
        address: IAddress,
        department: string,
        name: string,
        title: string
    },
    ein: string,
    ssn: string,
    userAgent: string
}

interface IResponseSuccess {
    users: IUser[],
    total: number,
    skip: number,
    limit: number
}

interface IResponseFailed {
    message: string
}

async function getData(): Promise<void | undefined> {
    let response = await fetch('https://dummyjson.com/users')
    let users = await response.json() as IResponseSuccess | IResponseFailed
    if ('message' in users) {
        throw Error(users.message)
    } else if ('users' in users){
        console.log(users.users)
    } else {
        throw Error('Проблемы с подключением')
    }
}

getData()