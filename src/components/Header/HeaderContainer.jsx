import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout, setProfilePhoto} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profilePhoto: state.auth.profilePhoto
})

export default connect(mapStateToProps, {setProfilePhoto,logout})(HeaderContainer)
