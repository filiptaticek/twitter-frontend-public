import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import loginService from "../../services/login"
import postService from "../../services/posts"
import { setVisible, addUser } from "../../store/actions"
import { FormFrame } from "../small_components/FormFrame"
import { Form } from "../small_components/Form"

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [color, setColor] = useState("green")
  const [notification, setNotification] = useState("")
  const dispatch = useDispatch()

  function notify (color, message) { //function for error messages
    setColor(color)
    setNotification(message)
    setTimeout(() => {setNotification("")}, 3000)
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("userToken")
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      postService.setToken(user.token)
    }
  }, [dispatch])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem("userToken", JSON.stringify(user))
      window.localStorage.setItem("userNickname", JSON.stringify(username))
      postService.setToken(user.token)
      setUsername(""), setPassword("")
      dispatch(setVisible())
      dispatch(addUser(username))
    } catch (exception) {
      notify("red","wrong credentials")
    }
  }

  const loginForm = () => {
    return(
      <Form
        onSubmit={handleLogin}
        username={username}
        password={password}
        handleUsernameChange={({ target }) => setUsername(target.value) }
        handlePasswordChange={({ target }) => setPassword(target.value) }
      />
    )
  }

  return(
    <div>
      <main>
        <FormFrame text="Login" form={loginForm()} notification={notification} color={color}/>
      </main>
    </div>
  )
}

export { LoginPage }