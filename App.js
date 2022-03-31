import './App.css';
import './nav.css';
import './home.css';
import './description.css';
import './surnav.css';
import logo from './logo.svg';
import Nav from './nav';
import Nav2 from './nav-2';
import Home from './home';
import Description from './description';
import Footer from './surnav';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Nav2/>
     <Home/>
     <Description/>
     <Footer/>
    </div>
  );
}

export default App;
