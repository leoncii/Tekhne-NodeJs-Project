import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export const App = () => (
    <>
    <BrowserRouter>
    <GlobalStyles />
    <Navbar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/contact' component={Contact} />                
        </Switch >
    </BrowserRouter >
    </>
)
