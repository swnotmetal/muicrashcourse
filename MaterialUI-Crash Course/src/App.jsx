
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import SearchAppBar  from "./components/appBar"
import Home from './pages/home'
import Tour from './pages/tour'

function App() {
  return(
    <BrowserRouter>
      <SearchAppBar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/:id' element={<Tour/>}/>
    </Routes>
    </BrowserRouter>
  )

  
}
export default App;


