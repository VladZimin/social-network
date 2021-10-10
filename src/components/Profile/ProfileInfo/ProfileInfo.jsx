import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src='https://static.dw.com/image/37453510_101.jpg'/>
            </div>
            <div className={s.aboutMe}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus userStatus={props.userStatus} updateUserStatus={props.updateUserStatus}/>
                <div>{props.profile.fullName}</div>
                <div>Обо мне: {props.profile.aboutMe}</div>
                <div>В поиске работы: {props.profile.lookingForAJob?'Да':'Нет'}</div>
                <div>Требования к работе: {props.profile.lookingForAJobDescription}</div>
                <div>Контакты: {Object.keys(props.profile.contacts).map(e=><ul><li>{e}</li></ul>)}</div>
            </div>
        </div>
    )
}

export default ProfileInfo