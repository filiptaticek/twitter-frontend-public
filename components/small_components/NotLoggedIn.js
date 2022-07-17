import { Heading } from "@chakra-ui/react"

const NotLoggedIn = () => {
  return(
    <Heading size="md" style={{ textAlign:"center" }}>
      You need to be <a style={{ color:"rgba(30,161,241,255)" }} href="http://localhost:3000/">logged in</a> to see this page
    </Heading>
  )
}

export {
  NotLoggedIn
}