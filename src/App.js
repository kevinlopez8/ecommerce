import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ContactoPage } from './Components/Pags/ContactoPage/ContactoPage';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
