import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export let withAuthRedirect = Component => {
    class RedirectComponent extends React.Component {

        render() {
            if (!this.props.isAuth) return <Redirect to='/login'/>

            return <Component {...this.props}/>
        }
    }
    let mapStateToPropsForRedirect = state => {
        return {
            isAuth: state.auth.isAuth
        }
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)

}