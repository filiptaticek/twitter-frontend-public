import { MyPosts } from "../../components/small_components/MyPosts"
import { NotLoggedIn } from "../../components/small_components/NotLoggedIn"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { changeColor } from "../../store/actions"

const App = () => {
  const visibility = useSelector((state) => state.visibility)
  const dispatch = useDispatch()
  dispatch(changeColor(["black","black","white"]))

  return(
    <div>
      <main>
        {visibility?
          <MyPosts/>
          :
          <NotLoggedIn />
        }
      </main>
    </div>
  )
}

export default App