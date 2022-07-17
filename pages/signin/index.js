/* eslint-disable */
import { useState } from "react"
import signinService from "../../services/signin"
import { FormFrame } from "../../components/small_components/FormFrame"
import { Form } from "../../components/small_components/Form"
import { BackHome } from "../../components/small_components/BackHome"

const App = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [color, setColor] = useState("")
  const [notification, setNotification] = useState("")

  function notify (color, message) { //function for error messages
    setColor(color)
    setNotification(message)
    setTimeout(() => {setNotification("")}, 3000)
  }

  const handleSignin = async (event) => { //all around signing in
    event.preventDefault()
    if (username===""||password==="")
      notify("red","fill in both username and password")
    else{
      try {
        const user = await signinService.signin({
          username,password
        })
        notify("green"," signed in")
        setUsername("")
        setPassword("")
      } catch (exception) {
        notify("red"," username is already in use")
        console.log(exception)
      }
    }
  }

  const signinForm = () => (
    <Form 
      onSubmit={handleSignin}
      username={username}
      password={password}
      handleUsernameChange={({ target }) => setUsername(target.value) }
      handlePasswordChange={({ target }) => setPassword(target.value) }
      />
  )  

  return(
    <div>
      <main >
        <FormFrame text="Sign in" form={signinForm()} notification={notification} color={color}/>
        <BackHome />
      </main>
    </div>
  )
}

export default App