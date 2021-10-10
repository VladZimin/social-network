import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg'/>
            {props.message}
            <div className={s.likes}>
                <img src="https://w7.pngwing.com/pngs/764/686/png-transparent-white-heart-love-social-media-like-button-emoticon-emoji-like-new-s-text-heart-logo.png"/>
                <span>{props.likes}</span>
            </div>
        </div>
    )
}

export default Post