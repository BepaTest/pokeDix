import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//pages
import PokeDix from './pages/PokeDix'
import DixTeam from './pages/DixTeam'
import Pokemon from './pages/Pokemon'
//navbar
import Navigation from './components/Navbar'
// context provider
import { PokemonProvider } from './components/PokemonContext'

function App() {
  return (
    <PokemonProvider>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={PokeDix}></Route>
          <Route path='/team' component={DixTeam}></Route>
          <Route path='/pokemon/:name' component={Pokemon}></Route>
        </Switch>
      </Router>
    </PokemonProvider>
  )
}

export default App
