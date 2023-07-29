import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Explore } from './pages/explore/Explore';
import { Playlists } from './pages/playlists/Playlists';
import { WatchLater } from './pages/watchLater/WatchLater';
import { SinglePlaylist } from './pages/singlePlaylist/SinglePlaylist';
import { SingleVideo } from './pages/singleVideo/SingleVideo';
import { SingleCategoryListing } from './pages/SingleCategoryListing/SingleCategoryListing';

function App() {
  return (
    <div className="App">
      
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/videos" element={<Explore/>}/>
      <Route path="/playlists" element={<Playlists/>}/>
      <Route path="/watch-later" element={<WatchLater/>}/>
      <Route path="/category" element={<SingleCategoryListing/>}/>
      <Route path="/video" element={<SingleVideo/>}/>
      <Route path="/playlist" element={<SinglePlaylist/>}/>
     </Routes>
    </div>
  );
}

export default App;
