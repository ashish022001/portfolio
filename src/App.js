import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
function App() {
  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Services/>
    <Resume/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default App;
