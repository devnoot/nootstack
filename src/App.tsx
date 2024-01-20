import { Provider } from 'react-redux'
import { store } from './features/store/store.tsx'
import { Layout } from './Layout.tsx'

export const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <h1 className='text-3xl'>Hello</h1>
      </Layout>
    </Provider>
  )
}
