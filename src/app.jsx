
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header'
import Footer from './components/footer'
import Main from './components/main'

createRoot(document.getElementById('root')).render(<>
  <Header/>
  <Main/>
  <Footer/>
</>)
