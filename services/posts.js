import axios from "axios" //service for all around the posts
const baseUrl = "http://localhost:3001/api/posts"

let token = null
const setToken = newToken => {
  token = `bearer ${newToken}`
}

const addpost = async newObject => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => {
    return response.data
  })
}

const removepost = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  console.log(baseUrl, id)
  return request.then(response => {
    return response.data
  })
}

const likepost = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default {
  addpost,
  getAll,
  setToken,
  removepost,
  likepost
}
