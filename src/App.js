import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
//pages
import Home from './pages/home';
import About from './pages/about';
import ErrorPage from './pages/error';
import Contact from './pages/contact';
import Github from './pages/github';

//components
import NavBar from './components/nav';
import SideBar from './components/sidebar'
function App() {
  return (
    <Router>
    <NavBar/>
    <SideBar/>
    <Switch>
      <Route exact  path="/">
        <Home/>
      </Route>
      <Route   path="/about">
        <About/>
      </Route>
      <Route  path="/contact">
        <Contact/>
      </Route>
      <Route  path="/github">
        <Github/>
      </Route>
      <Route  path="*">
        <ErrorPage/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
