import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Item from './Components/Item/Item';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer />
    </div>
  );
}

export default App;
