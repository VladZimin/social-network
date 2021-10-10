import s from './Users.module.css'
import React from "react";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return <div >
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                    <img
                        src={user.photos.small != null ? user.photos.small : 'https://img.icons8.com/ios/452/duolingo-logo.png'}
                        className={s.userIMG}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}>
                            Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>
                            Follow</button>
                    }
                </div>
            </span>
        <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </span>
        </span>
    </div>

}

export default User