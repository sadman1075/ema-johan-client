import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontex } from '../Contex/UserContex';

const Login = () => {
    const { sininuser } = useContext(Authcontex)
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/'
    const [error, seterror] = useState()
    const [success, setsuccess] = useState()

    const handlelogin = (event) => {
        event.preventDefault();
        setsuccess(false);
        const Form = event.target;
        const email = Form.email.value;
        const password = Form.password.value;
        console.log(email, password)


        sininuser(email, password)
            .then(result => {
                const user = result.user
                setsuccess(true)
                Form.reset()
                navigate(from,{replace:true})

            })
            .catch(error => {
                seterror(error.message)
            })

    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>LogIn Now!!!</h2>
            <form onSubmit={handlelogin}>
                <div className="form-control">
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' id='email' required></input>
                </div>

                <div className="form-control">
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='password' required></input>
                </div>
                <p className='error'>{error}</p>
                {
                    success && <p className='success'>Login Successfully</p>
                }
                <input type="submit" className='btn-submit' value="LogIn" />
            </form>
            <p>New To ema john <Link to='/singup'>Create A New Accout?</Link></p>


        </div>
    );
};

export default Login;