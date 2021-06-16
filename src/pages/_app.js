import { Provider } from 'react-redux'
import 'tailwindcss/tailwind.css'
import store from "src/redux/store";

function MyApp({ Component, pageProps }) {
  store.dispatch()

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
