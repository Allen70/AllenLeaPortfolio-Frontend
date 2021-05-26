import './App.css';
import { Home } from './pages/Home'
import { Arcade } from './pages/Arcade'
import { Navbar } from './components/Navbar'
import { BrowserRouter as Router,  Route,  Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' render={(routerProps) => <Home {...routerProps}/>}/>
          <Route exact path='/arcade' render={(routerProps) => <Arcade {...routerProps}/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
