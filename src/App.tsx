import { AppRouter } from '@/router/AppRouter'
import { ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import { RootState } from './state/store'

export const App = () => {
  const { isDarkTheme } = useSelector(({ layout }: RootState) => layout)

  return (
    <div className={isDarkTheme ? 'dark app' : 'app'}>
      <AppRouter />
      <ToastContainer
        stacked
        hideProgressBar
        draggable
        position="bottom-right"
        theme={isDarkTheme ? 'dark' : 'light'}
        autoClose={3000}
      />
    </div>
  )
}
