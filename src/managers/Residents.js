import { fetchData, postJson } from '../apis/fetchData';

export const getResidents = (payload) => {
    fetchData('residents', { query: payload })
}

export const saveResident = (payload) => {
    postJson(`residents/`, payload)
}