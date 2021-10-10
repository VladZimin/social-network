import s from './ProfileInfo.module.css'
import React, {useEffect, useState} from "react";


let ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [userStatus, setUserStatus] = useState(props.userStatus)
    useEffect(() => setUserStatus(props.userStatus), [props.userStatus])
    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(userStatus)
    }
    let onChangeStatusInput = (e) => {
        setUserStatus(e.target.value)
    }
    return (
        <div>
            {!editMode &&
            <div>
                <span>Статус:</span>
                <span style={{cursor: 'pointer'}} onDoubleClick={()=>setEditMode(true)}>
                        {props.userStatus || '-------'}</span>
            </div>
            }
            {editMode && <div className={s.aboutMe}>
                <input onChange={onChangeStatusInput} autoFocus onBlur={deactivateEditMode} value={userStatus}/>
                <button>Сохранить</button>
            </div>
            }
        </div>
    )
}

export default ProfileStatus