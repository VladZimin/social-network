import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import { withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) this.props.history.push('/login')
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {

        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    userStatus: state.profilePage.userStatus,
    authorizedUserId: state.auth.userId
})

export default compose(connect (mapStateToProps,{getUserProfile,getUserStatus,
        updateUserStatus}),
    withRouter, /*withAuthRedirect*/)(ProfileContainer)