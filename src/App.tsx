import { Provider } from 'react-redux'

import s from './App.module.scss'

import { Header } from '@/components/ui/header'
import { Router } from '@/router'
import { store } from '@/services/store'

export function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className={s.content}>
        <Router />
      </div>
    </Provider>
  )
}
