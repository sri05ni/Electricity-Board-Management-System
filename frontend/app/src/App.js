import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/screens/Home'
import Headers from './components/Headers'
import EditApplicant from './components/screens/EditApplicant'
import Stats from './components/screens/Stats'
import LoginScreen from './components/screens/LoginScreen'

function App() {
  return (
    <BrowserRouter>
    <Headers/>
    <Routes>
    <Route exact path='/' element={<LoginScreen/>}></Route>
    </Routes>
    <Routes>
    <Route exact path='/home' element={<Home />}></Route>
    </Routes>
    <Routes>
    <Route exact path='/editApplicant/:id' element={<EditApplicant/>}></Route>
    </Routes>
    <Routes>
    <Route exact path='/StatisticsCollection/' element={<Stats/>}></Route>
    </Routes>
    <Routes>
    <Route exact path='/login' element={<LoginScreen />}></Route>
    </Routes>
    {/* <Routes>
    <Route exact path='/logout' element={<LoginScreen />}></Route>
    </Routes> */}
    </BrowserRouter>    
  )
}

export default App
