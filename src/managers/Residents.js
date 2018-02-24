import { fetchData } from '../apis/fetchData';
const baseAddress = "localhost:8081/";

export const GetResidents = (payload) => {
    fetchData('residents', { query: payload })
}