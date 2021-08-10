import './Login.css';
import React, { useState } from 'react'
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice'

function Login() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const dispatch = useDispatch()
    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                profileUrl:userAuth.user.photoURL,
            }))
        }).catch((error) => {alert(error)})
    }

    const register = () => {
        if(!name){
            return alert("Please enter a full name")
        }
        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            console.log(userAuth)
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePic
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName:name,
                    photoURL:profilePic
                }))
            })
        }).catch((error) => { alert(error)})
    }

    return (
        <div className="login">
            <img src="https://www.socialmediabutterflyblog.com/wp-content/uploads/sites/567/2019/02/linkedin-300x225.jpg" alt="" />
            <form>
                <input placeholder="Full name (required if registering)" value={name} onChange={(e) => setName(e.target.value)} type="text" />
                <input placeholder="Profile pic URL (optional)" value={profilePic} onChange={(e) => setProfilePic(e.target.value)} type="text" />
                <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                <input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                <button onClick={loginToApp}>SignIn</button>
            </form>
            <p>Not a member?
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
