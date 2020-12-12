
import React,{useEffect} from 'react';
import { Route,Switch } from 'react-router-dom';
import About from './comps/About/About';
import Home from './comps/Home/Home';
import Navbar from './comps/Navbar/Navbar';
import GameUpdates from './comps/GameUpdates/GameUpdates';
import Footer from './comps/Footer/Footer';
import Error from './comps/Error';
import ReactGa from 'react-ga';

function App() {
  useEffect(() => {
    ReactGa.initialize('G-EQ2LXP8NY2')

    ReactGa.pageview('/')
  }, [])
  return (
    <>
    <Navbar/> {/**THis is the navbar */}
    <Switch>
   <Route exact path='/' component={Home}/>
   <Route exact path='/about' component={About}/>
   <Route exact path='/game-updates' component={GameUpdates}/>
   <Route exact component={Error}/>
    {/* Routing and switching */}

    </Switch>
    <Footer/>
    </>
  );
}

export default App;
