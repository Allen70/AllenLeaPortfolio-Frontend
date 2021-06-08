import { BrowserRouter as Router,  Route,  Switch} from 'react-router-dom'

import './App.css';

import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'


import { Navbar } from './components/Navbar'

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' render={(routerProps) => <Home {...routerProps}/>}/>
          <Route exact path='/projects' render={(routerProps) => <Projects {...routerProps}/>}/>
          <Route exact path='/contact' render={(routerProps) => <Contact {...routerProps}/>}/>
          <Route path='/blogs' component={() => { 
              window.location.href = 'https://allenlea2007.medium.com/' 
              return null
          }}/>
 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
