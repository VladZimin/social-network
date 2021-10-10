import {Field, reduxForm, reset} from "redux-form";
import {maxLengthCreator, required} from "../components/utils/validators/validators";
import {Input} from "../components/common/FormsControls/FormControls";
import {connect} from "react-redux";
import {login} from "../redux/auth-reducer";
import {Redirect} from "react-router-dom";


const maxLength30 = maxLengthCreator(30)

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='email' name='email' validate={[required, maxLength30]} component={Input}/>
            </div>
            <div>
                <Field placeholder='password' name='password' validate={[required, maxLength30]} component={Input}/>
            </div>
            <div>
                <Field type='checkbox' name='rememberMe' component={Input}/>Remember me
            </div>
            {props.error && <div>{props.error}</div>}
            <button>LOGIN</button>
        </form>
    )
}
LoginForm = reduxForm({form: 'login'})(LoginForm)
let Login = (props) => {
    const onSubmit = (dataForm, dispatch) => {
        props.login(dataForm.email, dataForm.password, dataForm.rememberMe)
        dispatch(reset('login'))
        console.log(dataForm);
    }
    return (
        <>{props.isAuth
            ? <Redirect to='/profile'/>
            : <div>
                <h1>Login</h1>
                <LoginForm onSubmit={onSubmit}/>
            </div>}
        </>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login})(Login)