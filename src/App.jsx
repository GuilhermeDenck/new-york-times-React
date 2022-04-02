import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewYorkProvider from './context/NewYork.context'

import Home from './pages/Home/Home.screen';
import SectionsNews from './pages/SectionsNews/SectionsNews.screen';
import NewsDetails from './pages/NewsDetails/NewsDetails.screen';

import './App.css';
import Header from './components/Header/Header.component';

function App() {
  return (
    <BrowserRouter>
      <NewYorkProvider>
        <Header />
<<<<<<< HEAD
        <div className='bodyNYT'>
          <Routes>
            <Route path='*' element={<Home />}/>
            <Route exact path='/nyttop' element={<Home />}/>
            <Route path='/section' element={<SectionsNews />}> 
              <Route path=':typeNews' element={<SectionsNews/>}/>
            </Route>
          </Routes>
        </div>
=======
          <div className='bodyNYT'>
            <Routes>
              <Route path='*' element={<Home />}/>
              <Route exact path='/nyttop' element={<Home />}/>
              <Route path='/section' element={<SectionsNews />}> 
                <Route path=':typeNews' element={<SectionsNews/>}/>
              </Route>
              <Route path='/details' element={<NewsDetails />}> 
                <Route path=':idNews' element={<NewsDetails />}/>
              </Route>
            </Routes>
          </div>
>>>>>>> fdedc4564eff9a1f9d4ccb422dbeaad42250df86
      </NewYorkProvider>
    </BrowserRouter>
  );
}

export default App;
