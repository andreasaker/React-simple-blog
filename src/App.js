import React from 'react';
import Blog from './Pages/blog';
import About from './Pages/about';
import Contact from './Pages/contact';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const NavBar = () => (
    <nav class="navBar">
     <Link to="/blog/"><button class="square-button">Blog</button></Link>
     <Link to="/about/"><button class="square-button">About</button></Link>
     <Link to="/contact/"><button class="square-button">Contact</button></Link>
      
    </nav>
    
)


const App = props => {
    return(
    <Router>
    <div class="medium-container">
      <div class="flex-row">
        <NavBar />
      </div>
      <Route exact path="/" component={Blog} />
      <Route path="/blog/" component={Blog} />
      <Route path="/about/" component={About} />
      <Route path="/contact/" component={Contact} />
    </div>
    </Router>
    );
}

export default App;
