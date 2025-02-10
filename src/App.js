import React from 'react'
import './App.css'
import Login from './Pages/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Dashboard from './Modules/Dashboard';
import New from './Modules/New';
import DataFetching from './Modules/DataFetching';
import MobView from './ViewData/MobView';
import AcView from './ViewData/AcView';
import MobDet from './ViewData/ProductDetails/MobDet';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/new' element={<New />} />
          <Route path='/fetching' element={<DataFetching />} />
          <Route path='/mobiles' element={<MobView />} />
          <Route path='/mobiles/:id' element={<MobDet />} />
          <Route path='/acdata' element={<AcView />} />
        </Routes>
      </Router>
      

    </div>
  )
}

export default App