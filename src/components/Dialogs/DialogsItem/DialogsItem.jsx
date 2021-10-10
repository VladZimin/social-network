import s from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";


const DialogsItem = (props) => {
    return (
        <div className={s.dialogsItems}>
            <div>
                <NavLink to={'/messages/'+props.id} activeClassName={s.active}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogsItem
