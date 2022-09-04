import React from 'react';
import {useTypedSelector} from "../../_hooks/useTypedSelector";
import {Link} from "react-router-dom";
import {Success} from "../../components/Success/Success";
import {AuthLayout} from "../AuthLayout/AuthLayout";
import {useActions} from "../../_hooks/useActions";
import {register} from "../../store/actionCreators/auth";


export const Register = () => {
    const {registerStatus, registerError} = useTypedSelector(state => state.auth);
    const dispatch = useActions();

    return (
        <div className='container d-flex flex-column align-items-center text-center mt-5'>
            <h1>Регистрация</h1>
            <AuthLayout
                error={registerError}
                textBtn={'Зарегистрироваться'}
                request={(username: string, password: string) => dispatch(register({username, password}))}
            >
                {registerStatus === 200 && <Success/>}
                <Link className='link' to={'/login'}>
                    Уже имеете аккаунт?
                </Link>
            </AuthLayout>
        </div>
    )
}
