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
        const bodyObj = {text: body}
        return fetch(this.url, {
            body: JSON.stringify(bodyObj),
            method: 'POST'
        })
    }


}