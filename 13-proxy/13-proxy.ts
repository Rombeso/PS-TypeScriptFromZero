interface IProductApi {
    getProduct(userId: number): Promise<any>
}

class ProductApi implements IProductApi {
    private data: any
    async getProduct(userId: number): Promise<any> {
        const res = await fetch(`https://dummyjson.com/products/${userId}`)
        this.data = await res.json();
        return await this.data
    }
}

class ProductProxy implements IProductApi {
    constructor(private api: IProductApi) {
    }

    async getProduct(id: number) {
        if(id < 10 && id > 0) {
            return await this.api.getProduct(id)
        }
        console.log('Значение id больше 10!')
        return undefined;
    }
}

let res = new ProductProxy(new ProductApi)
res.getProduct(1)?.then(r => console.log(r))

let res2 = new ProductProxy(new ProductApi)
res2.getProduct(20)?.then(r => console.log(r))
