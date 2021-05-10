import './App.css';
import { Home } from './components/Home'
import { Professional } from './components/Professional'
import { Personal } from './components/Personal'
import { Arcade } from './components/Arcade'
import {  BrowserRouter as Router,  Route,  Link,  Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <nav>
        <Link to='/professional'>Professional</Link> | <Link to='/personal'>Personal</Link> 
      </nav>
        <Switch>
          <Route exact path='/' render={(routerProps) => <Home {...routerProps}/>}/>
          <Route exact path='/professional' render={(routerProps) => <Professional {...routerProps}/>}/>
          <Route exact path='/personal' render={(routerProps) => <Personal {...routerProps}/>}/>
          <Route exact path='/arcade' render={(routerProps) => <Arcade {...routerProps}/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
