
import React from 'react';
import { Route,Switch } from 'react-router-dom';
import About from './comps/About/About';
import Home from './comps/Home/Home';
import Navbar from './comps/Navbar/Navbar';
import GameUpdates from './comps/GameUpdates/GameUpdates';
import Footer from './comps/Footer/Footer';

function App() {
  return (
    <>
    <Navbar/> {/**THis is the navbar */}
    <Switch>
   <Route exact path='/' component={Home}/>
   <Route exact path='/about' component={About}/>
   <Route exact path='/game-updates' component={GameUpdates}/>
    {/* Routing and switching */}

    </Switch>
    <Footer/>
    </>
  );
}

export default App;
