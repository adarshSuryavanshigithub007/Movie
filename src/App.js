import './App.css';

import {BrowserRouter,HashRouter,Routes,Route, UseParams,} from 'react-router-dom'
import Header from './Header';
import Watchlist from './Watchlist';
import Watched from './Watched';
import Add from './Add';
import "./lib/font-awesome/css/all.min.css"
import React from 'react-router-dom';
import { GlobalProvider } from './GlobalState';


function App() {
    return (
   <GlobalProvider> 
      <>
     <HashRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Watchlist/>}></Route>
        <Route exact path='/Watched' element={<Watched/>}></Route>
        <Route exact path='/add' element={<Add/>}></Route>
      </Routes>
     </HashRouter>

     
      </>
  </GlobalProvider>
    );
}

export default App;
