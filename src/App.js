import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import Auctions from './components/Auctions'
import Vendors from './components/Vendors'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/auctions" component={Auctions} />
        <Route path="/vendors" component={Vendors} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
