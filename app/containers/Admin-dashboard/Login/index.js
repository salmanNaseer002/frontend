import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';
import { initialValues, validationSchema } from './schema';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import LogoImg from '../../../images/logo-3.png';
import './login.css';
//importing module
import { login } from '../../../services/authService';

const eye = <FontAwesomeIcon icon={faEye} />;

const Login = () => {   

    const [passwordShown, setPasswordShown] = useState(false);
    const history = useHistory();

    const doLogin = async (user) => {
        console.log('doLOgin')
        await login(user);
        // dispatch(setDashboardData())
        history.push('/dashboard');
    }
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    return (
        <>

            <div className="login-container">

                <div className="login-div-one"></div>
                <div className="login-div-two"></div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(user) => { console.log(user); doLogin(user) }}
                >

                    <div className="login-div-three d-flex align-items-center justify-content-center flex-column">
                        <div className="  text-center">
                            <img src={LogoImg} alt="" width="200px" />
                        </div>
                        <Form>
                            <div className="login-card  p-5">
                                <h1 className="login-30 text-center">Login</h1>
                                <label htmlFor="Email" className="login-14">Email</label><br />
                                <div className="input-icon">
                                    <i class="fa fa-envelope email-icon"></i>
                                    <Field type="text" name='email' placeholder="abc@gmail.com" /><br />
                                </div>
                                <label htmlFor="Email" className="login-14 mt-4">Password</label><br />


                                <div className="input-icon">
                                    <i class="fa fa-lock pass-icon"></i>
                                    <i onClick={togglePasswordVisiblity} className="hide-icon">{eye}</i>
                                    <Field name='password' type={passwordShown ? "text" : "password"} placeholder="Password" /><br />
                                </div>


                                {/* <Link to="/dashboard" className="d-flex justify-content-center"> */}
                                <button type='submit' className="mt-5 login-btn">Login</button>
                            </div>
                        </Form>
                    </div>
                </Formik>
            </div>


        </>
    )
};

export default Login;
