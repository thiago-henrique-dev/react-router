import React from 'react'
import './Content.css'
import { Routes, Route  } from 'react-router-dom'
import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'

const Content = props => (
    <main className="Content">
            <Routes>
            <Route path="/about">
                <About></About>
            </Route>
            <Route path="/param/:id">
                <Param></Param>
            </Route>    
            <Route path="/">
                <Home />
            </Route>
            </Routes>

        
    </main>
)

export default Content