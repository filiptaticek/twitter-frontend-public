import { Input, Button } from "@chakra-ui/react"

const Form = ({ onSubmit, username, handleUsernameChange, password, handlePasswordChange }) => {
  return(
    <form onSubmit={onSubmit}>
      <div>
        <span style={{ fontWeight:"bold" }}>Username</span>
        <Input
          style={{ width:"50%", margin:"20px", border: "1px solid black" }}
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <span style={{ fontWeight:"bold" }}>Password</span>
        <Input
          style={{ width:"50%", margin:"20px", border: "1px solid black" }}
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <Button colorScheme="twitter" type="submit">Confirm</Button>
    </form>
  )
}

export {
  Form,
}