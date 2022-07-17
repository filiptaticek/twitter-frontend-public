import { Heading } from "@chakra-ui/react"

const NoAccount = () => {
  return(
    <div style={{ textAlign:"center" }}>
      <Heading size="md" m={2} style={{ textAlign:"center" }}>
        Dont have an account?
        <a href="./signin" style={{ color: "rgba(30,161,241,255)" }}>Sign in</a>
      </Heading>
    </div>
  )
}

export {
  NoAccount
}