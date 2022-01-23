import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/projects';

function Home() {
  return (
    <div className="w-full min-h-screen">
      <Navbar></Navbar>
      <Hero></Hero>
      <Projects></Projects>
    </div>
  );
}

export default Home;
