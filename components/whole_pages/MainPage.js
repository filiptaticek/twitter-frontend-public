import { Posts } from "../small_components/Posts"
import { useDispatch } from "react-redux"
import { changeColor } from "../../store/actions"

const MainPage = () => {

  const dispatch = useDispatch()
  dispatch(changeColor(["white","black","black"]))

  return(
    <div>
      <main>
        <Posts />
      </main>
    </div>
  )
}

export {
  MainPage
}