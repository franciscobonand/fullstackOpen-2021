import axios from 'axios'

const url = 'http://localhost:3001/persons'

const getAll = async () => {
    const response = axios.get(url)
    return (await response).data
}

const create = async (newObj) => {
    const response = axios.post(url, newObj)
    return (await response).data
}

const delPers = async (id) => {
    const response = axios.delete(`${url}/${id}`)
    return (await response).data
}

const updatePers = async (id, newObj) => {
    const response = axios.put(`${url}/${id}`, newObj)
    return (await response).data
}

const numberClient = {getAll, create, delPers, updatePers}

export default numberClient