import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skill from './Components/Skill/Skill';
import Projects from './Components/Projects/Projects';
import Blog from './Components/Blog/Blog';
import Contact from './Components/contact/Contact';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
