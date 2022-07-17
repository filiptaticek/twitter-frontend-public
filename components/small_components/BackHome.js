import { Heading } from "@chakra-ui/react"

const BackHome = () => {
  return(
    <div style={{ textAlign:"center", color: "black" }}>
      <Heading size="md" m={2} style={{ textAlign:"center" }}>
        Back to <a href="http://localhost:3000/" style={{ color:"rgba(30,161,241,255)" }}>Homepage </a>
      </Heading>
    </div>
  )
}

export {
  BackHome
}