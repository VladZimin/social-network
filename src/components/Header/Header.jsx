import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    let logout = () => {
        props.logout()
    }
    return (
        <header className={s.header}>
            <img src={props.profilePhoto != null?props.profilePhoto:'https://img.icons8.com/ios/452/duolingo-logo.png'} />
            <div className={s.authBlock}>
                {props.isAuth
                    ? <>
                        <div>{props.login}</div>
                        <div><button onClick={logout}>Logout</button></div>
                    </>
                    : <NavLink to='/login'>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header
