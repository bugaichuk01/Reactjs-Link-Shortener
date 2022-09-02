import React from 'react';
import { Navigate, Route, Routes } from 'react-router'
import {useTypedSelector} from "../../_hooks/useTypedSelector";
import {Login} from "../Login/Login";
import {Register} from "../Register/Register";
import {Home} from "../Home/Home";

export const AppRoutes = () => {
    const user = useTypedSelector(state => state.auth)

    return (
        <div className='App'>
            {localStorage.getItem('auth') || user.isAuth
                ?
                <Routes>
                    <Route path='*' element={<Navigate to='/home'/>}/>
                    <Route path='/home' element={<Home/>}/>
                </Routes>
                :
                <Routes>
                    <Route path='*' element={<Navigate to='/login'/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/registration' element={<Register/>} />
                </Routes>
            }
        </div>
    );
}
