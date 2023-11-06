enum ERequestMethod {
    GET = 'GET',
    POST = 'POST',
}

enum EHeaders {
    CONTENT_TYPE = 'Content-Type',
    COOKIE = 'Cookie',
}

interface IRequestConstructor {
    url: {
        url: string
        query?: string
    }
    method: ERequestMethod
    body?: {
        [key: string]: string
    }
    headers?: {
        [key in EHeaders]: string
    }
}

class FetchBuilder {
    private request: IRequestConstructor
    private data: any

    addUrl(url: string, query?: string) {

        const setUrl = {
            url: url,
            query: query
        }
        this.request = {...this.request, url: setUrl}
        return this
    }

    addMethod(method: ERequestMethod) {
        this.request['method'] = method
        return this
    }

    addBody(body: { [key: string]: string }) {
        this.request.body = body
        return this
    }

    addHeaders(headers: { [key in EHeaders]: string }) {
        this.request['headers'] = headers
        return this
    }

    async buildAndFetch(): Promise<any> {
        let res
        let url

        if (!this.request.method) {
            throw new Error('Добавте Method - addMethod()')
        }

        if (!this.request.url.url) {
            throw new Error('Добавте URL - addUrl()')
        }

        if (this.request.url.query) {
            url = `${this.request.url.url}?${this.request.url.query}`
        } else {
            url = this.request.url.url
        }

        if (this.request.method === ERequestMethod.GET) {
            res = await fetch(url)
        } else {
            const config = {
                method: this.request.method,
                body: JSON.stringify(this.request.body),
            }
            if (this.request.headers) {
                config['headers'] = {...this.request.headers}
            }
            res = await fetch(url, config)
        }

        try {
            this.data = await res.json();
            return this.data
        } catch (e) {
            if (e instanceof Error) {
                console.log(e.message)
            }
        }
    }


}

const fetch1 = new FetchBuilder()
    .addUrl('https://dummyjson.com/user/1')
    .addMethod(ERequestMethod.GET)
    .buildAndFetch()

fetch1.then(res => console.log('fetch1:', res))
