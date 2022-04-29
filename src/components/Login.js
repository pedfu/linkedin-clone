import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { auth } from '../firebase';
import './Login.css';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL,
            }))
        }).catch(error => alert(error));
    } 

    const register = () => {
        if(!name) {
            return alert("Please enter a full name!");   
        }
        
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic,
                }))
            })
        }).catch(error => alert(error))
    }

    const forgotPassword = () => {
        console.log("se lascou");
    }

  return (
    <div className='login'>
        <div className='login__header'>
            <img src="https://s2.glbimg.com/gJ2WZWBdrrGX0DgpAH7WuQY8k_I=/0x0:640x233/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/a/J/MmkRyqTCA7AD3DSz5DYA/2011-05-18-linkedin-logo-1.jpg" alt="Linkedin Logo"/>
        </div>

        <div className='login__login'>
            <h2>Login</h2>
            <p>Login into one of the greatest job website.</p>

            <form>
                <div className='login__inputs'>

                    <div className='login__inputInput'>
                        <input type="text" name="fullName" value={name} onChange={e => setName(e.target.value)} placeholder='Full Name (required if registering)'/>
                    </div>

                    <div className='login__inputInput'>
                        <input type="text" name="profileURL"  value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder='Profile Picture URL (optional)'/>
                    </div>

                    <div className='login__inputInput'>
                        <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' required/>
                    </div>

                    <div className='login__inputInput'>
                        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' required/>
                        <a>show</a>
                    </div>

                    <a className='login__link' onClick={register}>Not a member? Register Now!</a>
                    <a className='login__link' onClick={forgotPassword}>Esqueceu a senha?</a>
                    
                    <div className='login__loginButton'>
                        <a className='login__loginButton' type='submit' onClick={loginToApp}>Sign In</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login