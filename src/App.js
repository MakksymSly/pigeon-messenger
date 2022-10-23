import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'


function App(props) {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <Navbar dispatch={props.dispatch} state={props.state} />
        <div className="App-wrapper-content">
          <Routes>
            <Route path='/profile/*' element={<Profile store={props.state} />}/>
            <Route path='/dialogs/*' element={<DialogsContainer store={props.state} />}/>
            <Route path='/music/*' element={<Music />}/>
            <Route path='/news/*' element={<News />}/>
            <Route path='/settings/*' element={<Settings />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;







      