import { Provider } from 'react-redux'
import { useTaskStore } from 'src/stores/task-store'
import 'tailwindcss/tailwind.css'
function MyApp({ Component, pageProps }) {
  const store=useTaskStore(pageProps.initialReduxState)


  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
