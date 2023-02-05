
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home'
import Update from './components/Update';
import Add from './components/Add';
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        </Routes>
</div>
  );
}

export default App;
