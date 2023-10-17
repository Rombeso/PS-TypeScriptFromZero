type TStringNumber = string | number

class MapClass {
    private mapSet: {
        [Hash: string]: {
            [key: string]: TStringNumber
        }
    } = {}

    public set(key: TStringNumber, value: TStringNumber): void {
        const keyString = String(key)
        const keyLengthString = keyString.length
        if (keyLengthString in this.mapSet) {
            this.mapSet[keyLengthString] = {...this.mapSet[keyLengthString], [key]: value}
        }else {
            this.mapSet[keyLengthString] = { [key]: value }
        }
    }

    public delete(key: TStringNumber): void {
        const keyString = String(key)
        const keyLengthString = keyString.length
        if (keyLengthString in this.mapSet
            && keyString in this.mapSet[keyLengthString]) {
            delete this.mapSet[keyLengthString][keyString]
        }
    }

    public get(key: TStringNumber): TStringNumber | unknown {
        const keyString = String(key)
        const keyLengthString = keyString.length
        if (keyLengthString in this.mapSet
            && keyString in this.mapSet[keyLengthString]) {
                return this.mapSet[keyLengthString][keyString]
        }
    }
    public clear(): void {
        this.mapSet = {}
    }

}

const map = new MapClass()

map.set('12', '123')
map.set('22', '222')
map.set('333', '333')
console.log(map.get(12))
map.delete(12)
console.log(map.get(12))
map.clear()
