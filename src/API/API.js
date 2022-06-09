export class API{
    constructor() {
        this.url = 'http://localhost:7777/notes';
    }

    load(){
        return fetch(this.url)
            .then(response=>response.json());
    }

    delete(id){
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE'
        })
    }

    add(body){
        return fetch(this.url, {
            body: JSON.stringify(body),
            method: 'POST'
        })
    }
}