import s from './App.module.scss'
import { Header } from './components/ui/header/header'
import { Router } from './router'

export function App() {
  return (
    <>
      <Header />
      <div className={s.content}>
        <Router />
      </div>
    </>
  )
}
