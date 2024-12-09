import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Singup.css'
import { Authcontex } from '../Contex/UserContex';

const Singup = () => {
   
    const [error, seterror] = useState();

    const[success,setsuccess]=useState();
    const {createuser}=useContext(Authcontex);

    const handlesubmit = (event) => {
        event.preventDefault();
        setsuccess(false);
        const Form = event.target;
        const email = Form.email.value;
        const password = Form.password.value;
        const confirmPassword = Form.confirm.value;
        console.log(email, password, confirmPassword)

        if (!/(?=.*?[A-Z])/.test(password)) {
            seterror("At least one upper case English letter")
            return;
        }
        if (!/(?=.*?[a-z])/.test(password)) {
            seterror("At least one lower case English letter")
            return;
        }
        if (!/(?=.*?[0-9])/.test(password)) {
            seterror("At least one digit")
            return;
        }
        if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            seterror("At least one special character")
            return;
        }
        if (!/.{8,}/.test(password)) {
            seterror("Minimum eight in length ")
            return;
        }

        if (password !== confirmPassword) {
            seterror("Your Password and Confirm Password is not Match")
            return;
        }
        seterror("")

        createuser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            setsuccess(true)
            Form.reset();
        })
        .catch(error=>{
            seterror(error.message)
        })

    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sing Up Now!!!</h2>
            <form onSubmit={handlesubmit} >
                <div className="form-control">
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' id='email' required></input>
                </div>

                <div className="form-control">
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='password' required></input>
                </div>
                <div className="form-control">
                    <label htmlFor='password'>Confirm Password</label>
                    <input type='password' name='confirm' id='confirm' required></input>
                </div>

                <p className='p'>{error}</p>
                {
                    success && <p className='success'>User Singup Successfully</p>
                }

                <input type="submit" className='btn-submit' value="Sing Up" />
            </form>
            <p>Already Have An Account? Please <Link to='/login'>LogIn</Link></p>


        </div>
    );
};

export default Singup;