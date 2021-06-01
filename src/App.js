import logo from './logo.svg';
import './App.css';
import About from './About'
import Covidapp from './Covidapp'
import Practice from './Practice'
import Home from './Home'
import {Navbar,Nav,Form,Button,FormControl} from 'react-bootstrap'
import {Link,Route,BrowserRouter as Router,Switch} from 'react-router-dom'
function App() {
  
  return (
    <div className="App"> 
    <Router>
 <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home"> <Link to="Home">Home</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Navbar.Brand href="#home"><Link to="Practice">Covid-19-District-Data</Link></Navbar.Brand>
    <Navbar.Brand href="#home"><Link to="Covidapp">Covid-19-Pradesh-Data</Link></Navbar.Brand>
    <Navbar.Brand href="#home"><Link to="About">About Us</Link></Navbar.Brand>
      </Nav>
      <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
      </Form>
        </Navbar.Collapse>
        </Navbar>
    
  <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Covidapp">
            <Covidapp />
          </Route>
          <Route path="/Practice">
            <Practice />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
       </Router>
    </div>   
  );
}

export default App;
