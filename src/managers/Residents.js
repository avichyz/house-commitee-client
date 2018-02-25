import { fetchData, postJson } from '../apis/fetchData';
const baseAddress = "localhost:8081/";

export const getResidents = (payload) => {
    fetchData('residents', { query: payload })
}

export const saveResident = (payload) => {
    postJson(`${baseAddress}/residents`, payload)
}