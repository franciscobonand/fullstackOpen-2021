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

const numberClient = {getAll, create}

export default numberClient