import { Heading, Button } from "@chakra-ui/react"

const Post = ({ content,likes, user, date, likepost, likedby }) => { //component for single post

  const loggedUserJSON = window.localStorage.getItem("userNickname")
  const label = likedby.includes(loggedUserJSON)
    ?"Dislike":"Like"
  const variant = likedby.includes(loggedUserJSON)
    ?"outline":"solid"

  return(
    <div className="main" >
      <p>from
        <span style={{ fontWeight:"bold" }}> {date} </span>
        by user
        <span style={{ fontWeight:"bold" }}> {user}</span>
      </p>
      <Heading size="xl" m={8} ml={5} mr={5} style={{ fontStyle:"italic" }}>
        {content}
      </Heading>
      <p>Has {likes} likes</p>
      <form onSubmit={likepost}>
        <Button m={5} colorScheme="twitter" variant={variant} type="submit">
          {label}
        </Button>
      </form>
    </div>
  )
}

export {
  Post
}