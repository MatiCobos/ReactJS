import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
{/*       <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer title="Sale All"/>} />
            <Route path="/category/:categoryId" element={<ItemListContainer/>} />
            <Route path="/item/:itemyId" element={<ItemDetailContainer/>} />
          
        </Routes>
      </BrowserRouter> */}
    <ItemDetailContainer />
      
    </div>
  );
}

export default App;
