import { Heading } from "@chakra-ui/react"

const FormFrame = ({ text, form, color, notification }) => {
  return(
    <div className="main">
      <Heading size="lg" m={2} style={{ textAlign:"center" }}>
        {text}
      </Heading>
      <div>{form}</div>
      <Heading size="md" m={2} style={{ textAlign:"center", color:color }}>
        {notification}
      </Heading>
    </div>
  )
}

export {
  FormFrame
}