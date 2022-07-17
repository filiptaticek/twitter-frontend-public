import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleVisibility, setVisible, addUser } from "../../store/actions"
import { Button, Heading } from "@chakra-ui/react"
import { Menu } from "./Menu"

const Header = () => {
  const visibility = useSelector((state) => state.visibility)
  const user = useSelector((state) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("userNickname")
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(setVisible())
      dispatch((addUser(user)))
    }
  },[dispatch])


  const handleLogout = () => { //HANDLING LOGGING OUT
    event.preventDefault()
    window.localStorage.clear()
    dispatch(toggleVisibility())
  }

  const header = () => { //WHOLE HEADER COMPONENT
    return(
      <div>
        <div style={{ float:"right" }}>
          <form style={{ display: "inline-block", marginTop:"5px", marginRight:"10px" }} onSubmit={handleLogout}>
            <Button size="md" colorScheme="twitter" variant="outline" style={{ backgroundColor:"white" }} type="submit">Log out</Button>
          </form>
        </div>
        <div style={{ float:"right" }}>
          <Heading size="md" style={{ display: "inline-block", marginTop:"12px", marginRight:"12px" }}>
            <span style={{ color:"white" }}>{user}</span> is logged in
          </Heading>
        </div>
      </div>
    )
  }

  return(
    <div>
      {visibility&&
        <div id='top' style={{ backgroundColor:"rgba(30,161,241,255)" }}>
          {header()}
          <div id="middletop"><Menu /></div>
        </div>
      }
    </div>
  )
}

export {
  Header
}