import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skill from './Components/Skill/Skill';
function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <About />
      <Skill  />
    </div>
  );
}

export default App;
