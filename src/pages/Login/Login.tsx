import React, {useEffect} from 'react';
import {useTypedSelector} from "../../_hooks/useTypedSelector";
import {useActions} from "../../_hooks/useActions";
import {useNavigate} from "react-router";
import {loginLocal} from "../../store/reducers/auth.slice";
import {Link} from "react-router-dom";
import {AuthLayout} from "../AuthLayout/AuthLayout";
import {login} from "../../store/actionCreators/auth";

export const Login = () => {
    const {loginStatus, loginError, accessToken} = useTypedSelector(state => state.auth);
    const dispatch = useActions();
    const navigate = useNavigate();

    useEffect(() => {
        if (loginStatus === 200) {
            dispatch(loginLocal(accessToken))
            navigate('/home')
        }
    }, [dispatch, loginStatus, navigate, accessToken])


    return (
        <div className='container d-flex flex-column align-items-center text-center mt-5'>
            <h1>Вход</h1>
            <AuthLayout
                error={loginError}
                textBtn={'Войти'}
                request={(username: string, password: string) => dispatch(login({username, password}))}
            >
                <Link className='link' to={'/registration'}>
                    Еще не зарегистрированы?
                </Link>
            </AuthLayout>
        </div>
    )
}
