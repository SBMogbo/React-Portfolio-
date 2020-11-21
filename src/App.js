// import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar'
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Nav from 'react-bootstrap/Nav';
import Footer from './components/footer'
import ContactPage from './pages/ContactPage'
import ProjectsPage from './pages/ProjectsPage'
import HomePage from './pages/HomePage'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Steven Brooks Mogbo",
      headerLinks: [
        { title: "home", path: "/" },
        { title: "projects", path: "/projects" },
        { title: "contact", path: "/contact" },
      ],
      home: {
        title: "Welcome to my Portfilo!",
        subTitle: "Built on React!",
        text: "Checkout my page",
      },
      projects: {
        title: "Projects",
      },
      contact: {
        title: "Contact Me",
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <NavBar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Steven Brooks Mogbo</Navbar.Brand>

            <NavbarToggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className='nav-link' to="/">Home</Link>
                <Link className='nav-link' to="/projects">Projects</Link>
                <Link className='nav-link' to="/contact">Contact</Link>


              </Nav>

            </Navbar.Collapse>
          </NavBar>
          
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/projects" exact render={() => <ProjectsPage title={this.state.projects.title}  />} />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.home.contact}/>} />



          <Footer />
        </Container>

      </Router>
    );
  }

}

export default App;
