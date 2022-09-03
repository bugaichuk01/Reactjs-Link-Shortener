import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../../_hooks/useTypedSelector";
import {useActions} from "../../_hooks/useActions";
import {useNavigate} from "react-router";
import {loginLocal} from "../../store/reducers/auth.slice";
import {login} from "../../store/actionCreators/auth";
import {Link} from "react-router-dom";
import stringIsValid from "../../helpers/stringIsValid";

export const Login = () => {

    const [loginValue, setLoginValue] = useState('');
    const [password, setPassword] = useState('');
    const [typoError, setTypoError] = useState('');
    const {loginStatus, loginError, accessToken} = useTypedSelector(state => state.auth);
    const dispatch = useActions();
    const navigate = useNavigate();

    function changeLogin(e: React.ChangeEvent<HTMLInputElement>) {
        setLoginValue(e.target.value)
    }

    function changePassword(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }

    useEffect(() => {
        if (loginStatus === 200) {
            dispatch(loginLocal(accessToken))
            navigate('/home')
        }
    }, [dispatch, loginStatus, navigate, accessToken])

    function sendLoginRequest() {
        if (stringIsValid(loginValue, password)) {
            setTypoError('Логин и пароль должны содержать символы')
            setTimeout(() => {
                setTypoError('')
            }, 3000)
            setLoginValue('')
            setPassword('')
            return
        }
        dispatch(login({username: loginValue, password: password}))
    }

    return (
        <div className='container d-flex flex-column align-items-center text-center mt-5'>
            <h1>Вход</h1>
            <input
                className='form-control w-25 m-2'
                type='text'
                value={loginValue}
                placeholder='Введите логин'
                onChange={changeLogin}
            />
            <input
                className='form-control w-25 m-2'
                type='password'
                value={password}
                placeholder='Введите пароль'
                onChange={changePassword}
            />
            <button className='btn btn-primary w-25 m-4' onClick={sendLoginRequest}>Войти</button>
            {(loginError || typoError) && <div className="alert alert-danger w-25">{loginError || typoError}</div>}
            <Link className='link' to={'/registration'}>
                Не зарегистрированы?
            </Link>
        </div>
    )
}
