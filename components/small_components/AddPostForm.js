import { Button } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"

const AddPostForm = ({ handleAddingPosts, content, setContent, }) => {
  return(
    <form onSubmit={handleAddingPosts}>
      <div>
        <span style={{ fontWeight:"bold" }}>Content</span>
        <Input
          style={{ width:"50%", margin: "20px", border:"2px solid black" }}
          type="text"
          value={content}
          onChange={setContent}
        />
      </div>
      <Button colorScheme="twitter" type="submit">Add post</Button>
    </form>
  )
}

export {
  AddPostForm,
}