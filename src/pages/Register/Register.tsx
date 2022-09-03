import React, {useState} from 'react';
import {useTypedSelector} from "../../_hooks/useTypedSelector";
import {useActions} from "../../_hooks/useActions";
import stringIsValid from "../../helpers/stringIsValid";
import {register} from "../../store/actionCreators/auth";
import {Link} from "react-router-dom";
import {Success} from "../../components/Success/Success";

export const Register = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [typoError, setTypoError] = useState('');
    const error = useTypedSelector(state => state.auth.registerError);
    const registerStatus = useTypedSelector(state => state.auth.registerStatus);
    const dispatch = useActions();

    function changeLogin(e: React.ChangeEvent<HTMLInputElement>) {
        setLogin(e.target.value)
    }

    function changePassword(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }

    function sendRegRequest() {
        if (stringIsValid(login, password)) {
            setTypoError('Логин и пароль должны содержать символы')
            setTimeout(() => {
                setTypoError('')
            }, 3000)
            setLogin('')
            setPassword('')
            return
        }
        dispatch(register({username: login, password: password}))
    }

    return (
        <div className='container d-flex flex-column align-items-center text-center mt-5'>
            <h1>Регистрация</h1>
            <input
                className='form-control w-25 m-2'
                type='text'
                value={login}
                placeholder='Ваш логин'
                onChange={changeLogin}
            />
            <input
                className='form-control w-25 m-2'
                type='password'
                value={password}
                placeholder='Придумайте пароль'
                onChange={changePassword}
            />
            <button className='btn btn-primary w-25 m-4' onClick={sendRegRequest}>Зарегистрироваться</button>
            {(error || typoError) && <div className="alert alert-danger w-25">{error || typoError}</div>}
            {registerStatus === 200 && <Success/>}
            <Link className='link' to={'/login'}>
                Уже имеете аккаунт?
            </Link>
        </div>
    )
}
