import React from 'react'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { PostConteiners } from './pages/PostConteiners'

function App() {
  return (
    <div>
      <Header />
      <PostConteiners />
      {/* <Products/> */}
    </div>
  )
}

export default App
