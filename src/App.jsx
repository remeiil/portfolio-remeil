import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [NavHighlighted, setNavHighlighted] = useState(null)
  return (
    <>
      <Header NavHighlighted={NavHighlighted} setNavHighlighted={setNavHighlighted} />
      <Main setNavHighlighted={setNavHighlighted} />
      <Footer />
    </>
  )
}

export default App
