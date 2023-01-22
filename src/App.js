import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';
import { DropDown } from './components/drop-down/DropDown';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <DropDown />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
