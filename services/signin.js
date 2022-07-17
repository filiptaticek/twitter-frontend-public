import axios from "axios" //importing axios
const baseUrl = "http://localhost:3001/api/users" //setting our baseUrl to be /api/login

const signin = async credentials => {
  const response = await axios.post(baseUrl, credentials) //sending request to our baseUrl
  return response.data
}

export default { signin }