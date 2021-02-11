import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Error from './Error.js'


function App(props) {
  console.log('app props', props);
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route path='/projects'><Projects/></Route>
        <Route path='/contact'><Contact/></Route>
        <Route path='*'><Error/></Route>
      </Switch>
    </Router>
  );
}

export default App;
