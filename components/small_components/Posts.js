import { Post } from "./Post"
import { useEffect, useState } from "react"
import postService from "../../services/posts" //importing services for sending and getting notes from and to the server

const Posts = () => { //component that renders post component for each thing in an array

  const [posts, setPosts] = useState([])
  const loggedUserJSON = window.localStorage.getItem("userNickname") //and fetch the username of the person ()

  useEffect(() => { //on start, we fetch all the posts from the server
    postService
      .getAll()
      .then(initialNotes => {
        setPosts(initialNotes.reverse())
      })
  }, [])

  const handleLikingPosts = (id) => { //handling liking for each post
    event.preventDefault()
    const post = posts.find(n => n.id === id) //first we find the spicific post by the id we gave to our function

    const likedpost = { //if not, we add him to that list
      content: post.content,
      date:post.date,
      user: post.user,
      id:post.id,
      likedby: post.likedby.concat(loggedUserJSON)
    }

    if (post.likedby.includes(loggedUserJSON))//now we check, if the actually logged in user is in the list of people, that liked this specific post
    {
      try{
        var arr = post.likedby
        for( var i = 0; i < arr.length; i++){
          if ( arr[i] === loggedUserJSON) {
            arr.splice(i, 1)
          }
        }

        let dislikedpost = { //if not, we add him to that list
          content: post.content,
          date:post.date,
          user: post.user,
          id:post.id,
          likedby: arr
        }
        postService.likepost(id, dislikedpost)
        setPosts(posts.map(post => post.id !== id ? post : dislikedpost ))
        console.log("Disliked")
      }
      catch(error){
        console.log(error)
      }
    }
    else { //if so, we want to remove from him from that array
      postService.likepost(id, likedpost)
      setPosts(posts.map(post => post.id !== id ? post : likedpost ))
      console.log("Liked")
    }
  }

  return(
    <div>
      {posts.map(post => {
        const [year, month, day] = post.date.substring(0,10).split("-")
        let datum = day.substring(0,2) + ". " +  month.substring(1,2) + ". " + year
        return(
          <Post
            content={post.content}
            likes={(post.likedby).length}
            key={post.id}
            user={post.user.username}
            date={datum}
            likepost={() => handleLikingPosts(post.id)}
            likedby = {post.likedby}
          />
        )
      })}
    </div>
  )
}


export {
  Posts
}
