import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './state/store'
import { App } from './App.tsx'
import 'react-toastify/dist/ReactToastify.css'
import './styles/index.css'
import './styles/app.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
