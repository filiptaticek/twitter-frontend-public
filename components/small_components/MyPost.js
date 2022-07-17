import { Button, Heading } from "@chakra-ui/react"

const MyPost = ({ content,likes, date, removepost }) => { //component for single post
  return(
    <div className="main">
      <p>from <span style={{ fontWeight:"bold" }}>{date}</span></p>
      <Heading size="xl" m={8} ml={5} mr={5} style={{ fontStyle:"italic" }} >{content}</Heading>
      <p>Has {likes} likes</p>
      <form onSubmit={removepost}>
        <Button m={5} colorScheme="twitter" type="submit">Delete tweet</Button>
      </form>
    </div>
  )
}

export {
  MyPost
}