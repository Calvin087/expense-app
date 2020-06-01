import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify App</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
    </header>
)

export default Header