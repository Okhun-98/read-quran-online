import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';
import { DropDown } from './components/drop-down/DropDown';
import { Rings } from 'react-loader-spinner'
import { loader } from './stores/loader';
import { useEffect, useState } from 'react';


function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loader.subscribe((item) => {
      setLoading(item?.loading)
    })
  }, [loader])

  return (
    <BrowserRouter>
      <div className='app'>
        {loading && <div className="loader"><Rings color="#00BFFF" height={80} width={80} /></div>}
        <DropDown />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
