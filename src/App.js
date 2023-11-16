
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './ui-component/Main';
import Home from './elements/Home';


function App() {
  return (
    <div className="App">

<Routes>

<Route path="/" element={<Main child={<Home/>}/>}/>


</Routes>
    </div>
  );
}

export default App;
