import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import SignInOutContainer from '../containers/index'
import Navigation from './nav'
import Home from './home'
import About from './About'
import Books from './booklist'
import Transaction from './transaction'


function App() {
  return (
    <div>
      <Router>

        <Routes>
          <Route path='/' element={<SignInOutContainer />}/> 
          <Route path='/nav' element={<Navigation/>} />
          <Route path='/home' element={<Home />}  />
          <Route path='/about' element={<About />}/>
          <Route path='/booklist' element={<Books />} />
          <Route path='/transaction' element={<Transaction />} />
        </Routes>
    </Router>
    </div>
  )
}


export default App
