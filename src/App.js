import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import Services from './components/pages/Services';
import Home from './components/pages/Home';
import NavbarMenu from './components/NavbarMenu';
import OurMission from './components/pages/about-components/OurMission';

function App() {
  return (
    <Router>
      <NavbarMenu />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/services' exact Component={Services} />
        <Route path='/mission' exact Component={OurMission} />
        <Route path='/contact-us' exact Component={ContactUs} />
        <Route path='/sign-up' exact Component={SignUp} />
        <Route path='/marketing' exact Component={Marketing} />
        <Route path='/consulting' exact Component={Consulting} />
      </Routes>
    </Router>
  );
}

export default App;
