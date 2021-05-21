
import './App.css';
import Home from './home';
import Navbar from './navbar';
import Footer from './footer';
import About from './about';
import Pricing from './pricing';
import Contact from './contact';
import Button from './button'
import {BrowserRouter,Route, Switch} from 'react-router-dom';



function App() {
  return (
    <div>
        <BrowserRouter>
      <Navbar />
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/pricing" component={Pricing}/>
          <Route path="/" exact component={Home}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/Button" component={Button}/>
        </Switch>
      <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
