import React, {useState} from 'react';
import stringIsValid from "../../helpers/stringIsValid";

interface AuthLayoutTypes {
    error?: string;
    textBtn: string;
    children: React.ReactNode;
    request: (login: string, password: string) => void;
}

export const AuthLayout: React.FC<AuthLayoutTypes> = ({request, children, textBtn, error}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [typoError, setTypoError] = useState('');

    const changeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    }

    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const sendAuthRequest = () => {
        if (stringIsValid(login, password)) {
            setTypoError('Логин и пароль должны содержать символы')
            setTimeout(() => {
                setTypoError('')
            }, 3000)
            setLogin('')
            setPassword('')
            return
        }
        request(login, password);
    }

    return (
        <>
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
                placeholder='Пароль'
                onChange={changePassword}
            />
            <button className='btn btn-primary w-25 m-4' onClick={sendAuthRequest}>{textBtn}</button>
            {(error || typoError) && <div className="alert alert-danger w-25">{error || typoError}</div>}
            {children}
        </>
    );
}
