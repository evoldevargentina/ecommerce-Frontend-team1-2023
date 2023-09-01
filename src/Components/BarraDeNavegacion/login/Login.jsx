import React from 'react';
import './login.css'
import { Form } from 'react-router-dom';

const Login = () => {
    return (
        <>
        <div className='loginFlex'>
        <div className='loginContainer'>
            <aside className='loginLeft'>
                <div className='loginLeftText'>
                    <p>Encontra todo lo que buscas en un solo lugar.</p>
                </div>
            </aside>
            <aside className='loginRight'>
                <button className='btnCreateAccount'>
                    Crear Cuenta
                </button>

                <div className='formContainer'>
                        <h2> 
                            Sign in to Show room                       
                        </h2>
                        <p>Please enter your details below to sign in</p>
                    <form className='loginForm'>
                        <div className='formControl'>
                        <label htmlFor="email">Your email adress</label>
                        <textarea name="email" id="email" cols="30" rows="1"></textarea>
                        </div>
                        <div className='formControl'>
                        <label htmlFor="email">Your password</label>
                        <textarea name="email" id="email" cols="30" rows="1"></textarea>
                        </div>
                        <button type='submit' className='loginSubmitBtn'>
                                Sign in
                        </button>
                    </form>
                </div>
            </aside>
        </div>
        </div>
        </>
    );
};

export default Login;