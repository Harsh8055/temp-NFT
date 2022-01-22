import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
}

export default App;
