import { useSelector } from "react-redux"
import { LoginPage } from "../components/whole_pages/LoginPage"
import { MainPage } from "../components/whole_pages/MainPage"
import { Welcome } from "../components/small_components/Welcome"
import { NoAccount } from "../components/small_components/NoAccount"

const App = () => {
  const visibility = useSelector((state) => state.visibility)

  return(
    <div>
      {visibility?
        <MainPage />
        :
        <div>
          <Welcome />
          <LoginPage />
          <NoAccount />
        </div>
      }
    </div>
  )
}

export default App
