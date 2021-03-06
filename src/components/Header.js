import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify App</h1>
        <NavLink to="/dashboard" activeClassName="is-active">Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
        <button onClick={startLogout}>Log Out</button>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})


export default connect(undefined, mapDispatchToProps)(Header)