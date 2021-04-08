import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import MessageBoard from './components/MessageBoard/MessageBoard';
import './App.css';

export default class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Router>
          <AppBar position="relative">
            <Toolbar>
              <Link to="/">
                <Typography variant="h5"><strong>MappingForGood</strong></Typography>
              </Link>
              <a href="https://stable-liberty-305417.wl.r.appspot.com/map">
                <Typography variant="h6">The Map</Typography>
              </a>
              <Link to='/submitConcerns'>
                <Typography variant="h6">Submit Concerns</Typography>
              </Link>
              <Link to='/messageBoard'>
                <Typography variant="h6">Message Board</Typography>
              </Link>
            </Toolbar>
          </AppBar>
          <Route path='/' exact component={Home} />
          <Route path='/submitConcerns' component={Form} />
          <Route path='/messageBoard' component={MessageBoard} />
        </Router>
      </div>
    )
  }
}

