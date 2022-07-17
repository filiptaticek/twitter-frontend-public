import { Heading } from "@chakra-ui/react"
import { useSelector } from "react-redux"

const Menu = () => {
  const colorScheme = useSelector((state) => state.color)

  const sections = [
    {
      name:"Home",
      link:"http://localhost:3000",
      id:0
    },
    {
      name:"New post",
      link:"http://localhost:3000/newpost",
      id:1
    },
    {
      name:"My posts",
      link:"http://localhost:3000/myaccount",
      id:2
    }
  ]

  return(
    <div>
      {sections.map(
        section => {
          return (
            <div key={section.id} style={{ color: colorScheme[section.id], width:"33%", display:"inline-block", textAlign:"center", marginTop:"7px" }}>
              <Heading size="md" style={{ width:"100%" }}>
                <a href={section.link}>{section.name}</a>
              </Heading>
            </div>
          )
        })}
    </div>
  )
}

export {
  Menu
}