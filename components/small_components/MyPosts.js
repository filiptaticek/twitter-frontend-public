import { MyPost } from "./MyPost"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import postService from "../../services/posts"

const MyPosts = () => {
  const [posts, setPosts] = useState([])
  const user = useSelector((state) => state.users)

  useEffect(() => { //getting the users from the server and setting them to a variable
    postService
      .getAll()
      .then(posts => {setPosts(
        (posts.filter(function (post){return post.user.username===user})).reverse())})},
  [])

  const handleRemoving = (id) =>
  {
    event.preventDefault()
    postService.removepost(id)
    console.log("Removed the post with id ",id," from the server")
    var newposts = posts.filter(post => post.id !== id)
    setPosts(newposts)
  }

  return(
    <div>
      {posts.map(post =>
      {
        const [year, month, day] = post.date.substring(0,10).split("-")
        let date = day.substring(0,2) + ". " +  month.substring(1,2) + ". " + year
        return(
          <MyPost
            content={post.content}
            date={date}
            likes={(post.likedby).length}
            key={post.id}
            removepost={() => handleRemoving(post.id)}
          />
        )
      })}
    </div>
  )
}

export {
  MyPosts
}
