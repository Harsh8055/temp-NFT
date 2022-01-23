import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import NFT from './nft'
import Explore from './components/Explore';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/nft/:id' element={<NFT />} />
        <Route path='/explore' element={<Explore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
