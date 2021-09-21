
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Pages from './components/Pages';
import Header from './components/Header/Header';
import { DataProvider } from './GlobalState';
import Footer from './components/Header/Footer';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Pages />
       
        </div>
      </BrowserRouter>
    </DataProvider>

  );
}

export default App;
