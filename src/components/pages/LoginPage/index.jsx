import {useState} from "react"
import {useForm} from "react-hook-form"
import {useHistory} from "react-router-dom";

import {getAuth,  signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';

import './styles.css';

export const LoginPage = () => {
    const [mode,
        setMode] = useState("login");

    const {register, handleSubmit} = useForm();

    const history = useHistory();

    const loginUser = async(formVals) => {
        try {
            console.log("Login Submitted", formVals);
            const auth = getAuth();
            const loginUser = await signInWithEmailAndPassword(auth, formVals.user, formVals.password);
            console.log(auth);
            history.push('/');
        } catch (error) {
            console.log("Error connecting to firebase", error)
        }
    }

    const signUpUser = (formVals) => {
        try {
            console.log("Sign Up Submitted", formVals);
            const auth = getAuth();
            const signUpUser = await createUserWithEmailAndPassword(auth, formVals.user, formVals.password);
            console.log("New user was created", signUpUser);
            history.push('/');
        } catch (error) {
            //handle incorrect password
            console.log("Error from firebase", error)
        }
    }

    return (
        <div className="pets-page">

            {mode === "login" && (

                <form className="form-layout" onSubmit={handleSubmit(loginUser)}>
                    <h2>Welcome back, please sign in!</h2>
                    <br/>

                    <label htmlFor="user">Username</label>
                    <input type="email" name="user" required {...register('user')}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required {...register('password')}/>

                    <input type="submit" value="login"/>
                    <br/>
                    <p>Don't have an account with us yet? Create a new account with your email and
                        password.</p>
                    <button onClick={() => setMode("signUp")}>
                        Sign Up</button>
                </form>
            )
        }

        {
            mode === "signup" && (
                <form className="form-layout" onSubmit={handleSubmit(signUpUser)}>
                    <h2>Creat a new account now!</h2>
                    <br/>

                    <label htmlFor="user">Email</label>
                    <input type="email" name="user" required {...register('user')}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required {...register('password')}/>

                    <label htmlFor="passwordConfirm">Password</label>
                    <input
                        type="password"
                        name="passwordConfirm"
                        required
                        {...register('passwordConfirm')}/>

                    <input type="submit" value="login"/>
                    <br/>
                    <p>Have an account already?</p>
                    <button onClick={() => setMode("login")}>
                        Login</button>
                </form>
            )
            
        } 
        </div>
    )
}