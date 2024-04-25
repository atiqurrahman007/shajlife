import { API_URL } from "./urls";


export const fetchDataFromApi = async (endpoint) => {
    const res = await fetch(`${API_URL}${endpoint}`);
    const data = await res.json(); // Await the json() method
    return data;
}
