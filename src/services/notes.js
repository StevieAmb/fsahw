import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id) => {
  const request = axios.put(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

const removeItem = (id, deletedObject) => {
  const request = axios.delete(`${baseUrl}/${id}`, deletedObject)
  console.log(id)
  return request.then(response => response.data)
}

export default { getAll, create, update, removeItem }
