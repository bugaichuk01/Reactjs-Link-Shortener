import React from 'react'
import { Link } from 'react-router-dom'

export const Success = () => {
    return (
        <div className='container d-flex align-items-center flex-column'>
            <div className="alert alert-success w-25">Вы успешно зарегистрированы!</div>
            <Link className='link' to={'/login'}>Теперь войдите!</Link>
        </div>
    )
}