import s from './FormControls.module.css'

let FormControl = ({input,TypeField, meta, ...props}) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={hasError ? s.error : ' '}>
            <TypeField {...input} {...props}/>
            {hasError ? <div><span>{meta.error}</span></div>:''}
        </div>
    )
}

export const TextArea = (props) => {
    return <FormControl {...props} TypeField={'textarea'}/>
}
export const Input = (props) => {
    return <FormControl {...props} TypeField={'input'}/>
}