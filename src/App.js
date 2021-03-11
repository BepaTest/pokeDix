import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//pages
import PokeDix from './pages/PokeDix'
import DixTeam from './pages/DixTeam'
import Pokemon from './pages/Pokemon'
//navbar
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <PokeDix />
        </Route>
        <Route path='/team'>
          <DixTeam />
        </Route>
        <Route path='/pokemon/:id' children={<Pokemon />}></Route>
      </Switch>
    </Router>
  )
}

export default App
