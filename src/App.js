import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/screens/Home';
import Contact from './components/screens/Contact';
import About from './components/screens/About';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFounfPage from './components/screens/NotFoundPage';
import AddUser from './components/screens/AddUser';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Contact' component={Contact} />
          <Route exact path='/AddUser' component={AddUser} />

          <Route component={NotFounfPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
