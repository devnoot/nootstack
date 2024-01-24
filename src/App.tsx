import { Provider } from 'react-redux'
import { store } from './features/store/store.tsx'
import { Layout } from './Layout.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './features/router/router.tsx'

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}
