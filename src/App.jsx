import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NewYorkProvider from './context/NewYork.context'

import Home from './pages/Home/Home.screen';
import SectionsNews from './pages/SectionsNews/SectionsNews.screen';
import NewsDetails from './pages/NewsDetails/NewsDetails.screen';

import './App.css';
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';

function App() {
  return (
    <BrowserRouter>
      <NewYorkProvider>
        <Header />
          <div className='bodyNYT'>
            <Routes>
              <Route path='/nyttop' element={<Home />}/>
              <Route path='/section' element={<SectionsNews />}> 
                <Route path=':typeNews' element={<SectionsNews/>}/>
              </Route>
              <Route path='/details' element={<NewsDetails />}> 
                <Route path=':idNews' element={<NewsDetails />}/>
              </Route>
              <Route path='*' element={<Navigate to={'/nyttop'} />}/>
            </Routes>
          </div>
        <Footer/>
      </NewYorkProvider>
    </BrowserRouter>
  );
}

export default App;
