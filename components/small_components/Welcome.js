import { Heading } from "@chakra-ui/react"

const Welcome = () =>
{
  return(
    <div style={{ textAlign:"center" }}>
      <Heading size="2xl" m={2}>Welcome to <span style={{ color:"rgba(30,161,241,255)" }}>Twitter</span></Heading>
    </div>
  )
}

export {
  Welcome
}