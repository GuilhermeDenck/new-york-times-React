import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewYorkProvider from './context/NewYork.context'

import Home from './pages/Home/Home.screen';
import SectionsNews from './pages/SectionsNews/SectionsNews.screen';

import './App.css';
import Header from './components/Header/Header.component';

function App() {
  return (
    <BrowserRouter>
      <NewYorkProvider>
        <div className='bodyNYT'>
          <Header />
          <Routes>
            <Route path='*' element={<Home />}/>
            <Route exact path='/nyttop' element={<Home />}/>
            <Route path='/section' element={<SectionsNews />}> 
              <Route path=':typeNews' element={<SectionsNews/>}/>
            </Route>
          </Routes>
        </div>
      </NewYorkProvider>
    </BrowserRouter>
  );
}

export default App;
