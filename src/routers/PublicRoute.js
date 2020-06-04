import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest // gives me access to anything that is passed but not destructured above
}) => (
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <Redirect to='/dashboard' />
            ) : (
                <Component {...props} />
            )
        )} />
    )

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid //flips to real boolean
})

export default connect(mapStateToProps)(PublicRoute)