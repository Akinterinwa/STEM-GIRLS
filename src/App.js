import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home-content/Home';
import NavbarMenu from './components/NavbarMenu';
import OurMission from './components/pages/about-components/OurMission';
import Approach from './components/pages/about-components/Approach';
import Team from './components/pages/about-components/Team';
import Footer from './components/footer';
import Events from './components/pages/workshops-components/Events';
import Location from './components/pages/workshops-components/Location';
import StartNew from './components/pages/workshops-components/StartNew';
import Volunteer from './components/pages/connect-component/Volunteer';
import Sponsors from './components/pages/connect-component/Sponsors';
import ContactUs from './components/pages/connect-component/ContactUs';
import Donate from './components/pages/donate/Donate';
import ScrollTop from './components/ScrollTop';

function App() {
  return (
    <Router>
      <ScrollTop />
      <NavbarMenu />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/mission' exact Component={OurMission} />
        <Route path='/approach' exact Component={Approach} />
        <Route path='/events' exact Component={Events} />
        <Route path='/location' exact Component={Location} />
        <Route path='/start-new' exact Component={StartNew} />
        <Route path='/team' exact Component={Team} />
        <Route path='/contact' exact Component={ContactUs} />
        <Route path='/sponsors' exact Component={Sponsors} />
        <Route path='/volunteer' exact Component={Volunteer} />
        <Route path='donate' exact Component={Donate} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
