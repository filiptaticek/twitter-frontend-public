/* eslint-disable */

import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import postService from "../../services/posts"
import { FormFrame } from "../../components/small_components/FormFrame"
import { NotLoggedIn } from "../../components/small_components/NotLoggedIn"
import { addUser } from "../../store/actions"
import { AddPostForm } from "../../components/small_components/AddPostForm"
import { changeColor } from "../../store/actions"

const App = () => {
  const [content, setContent] = useState("")
  const [color, setColor] = useState("red")
  const [notification, setNotification] = useState("")
  const visibility = useSelector((state) => state.visibility)
  const dispatch = useDispatch()

  dispatch(changeColor(["black","white","black"]))
  
  function notify (color, message) { //function for error messages
    setColor(color)
    setNotification(message)
    setTimeout(() => {setNotification("")}, 3000)
  }

  useEffect(() => { //if the user is in local storage, we login
    const loggedUserJSON = window.localStorage.getItem("userToken")
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch((addUser(user)))
      postService.setToken(user.token)
    }
  }, [dispatch])

  const handleAddingPosts = async (event) => { //all around adding new posts
    event.preventDefault()
    if (content===""){
      notify("red","You need to fill in the content of your post")
    }
    else{
      try {
        const date = new Date()
        const likedby = []
        const post = await postService.addpost({
          content, date, likedby
        })
        setContent("")
        notify("green","Your has been send to others!")
      } catch (exception) {
        console.log(exception)
      }
    }
  }

  const addpostForm = () => (
    <AddPostForm 
      handleAddingPosts={handleAddingPosts}
      content={content}
      setContent = {({ target }) => setContent(target.value)}
    />
  )

  return(
    <div>
      <main>
        {visibility?
          <FormFrame text="Write a tweet" form={addpostForm()} notification={notification} color={color}/>
          :
          <NotLoggedIn />
        }
      </main>
    </div>
  )
}

export default App