import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'




function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer title="Producto" firstName="Matias" lastName="Cobos" price={2500}/>
    </div>
  );
}


export default App;
