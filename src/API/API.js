export class API{
    constructor() {
        this.url = 'http://localhost:7777/notes';
    }

    load(){
        return fetch(this.url);
    }

    delete(id){
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE'
        })
    }

    addComponent(body){
        const formData = new FormData();
        for(let key in body){
            formData.append(key, body[key])
        }
        return fetch(this.url, {
            body: formData,
            method: 'POST'
        })
    }
}