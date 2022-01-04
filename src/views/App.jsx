import React from 'react'
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import './App.css'
import { BrowserRouter as Router} from 'react-router-dom'


const App = props => (
    <div className="App">
        <Router></Router>
        <Menu />
        <Content />
    </div>
)

export default App