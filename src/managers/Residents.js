import { fetchData, postJson } from '../apis/fetchData';
import { fetchPromise } from '../apis/fetchShobc';


export const getResidents = () => {
    return fetchData('residents')
}

export const saveResident = (payload) => {
    const tr = {
        name: "דין",
        lastName: "ווינצסטר",
        email: "",
        phoneNumber1: "",
        phoneNumber2: ""
    }
    //postJson('residents/', tr)
    
    fetchPromise('residents', { method: 'POST' }, { body: JSON.stringify(tr)}, true)
    .then(x=>console.log(x))
}