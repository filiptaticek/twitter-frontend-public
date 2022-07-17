import "../styles/globals.css"
import { Header } from "../components/small_components/Header"
import { wrapper, store } from "../store/store"
import { Provider } from "react-redux"
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {

  return(
    <ChakraProvider>
      <Provider store={store}>
        {Header()}
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )
}

export default wrapper.withRedux(MyApp)


