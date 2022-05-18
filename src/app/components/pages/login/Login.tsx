import './Login.css';

import { Button, Form, Input, Label } from 'reactstrap';
import React, { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { CustomInput } from 'app/components/common/input/CustomInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gescoLogo from 'app/assets/media/logos/gesco.png';

export const Login = () => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [isFormSubmit, setFormSubmit] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    
    return (
        <div className="login">
            <div className="">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-5">
                    <div className="login-wrapper p-4 p-md-5">
                        <div className="form-logo">
                        <img width={100} src={gescoLogo} alt="logo" />
                        </div>
                        <h4 className="text-center text-primary ">Xoş Gəlmisiniz</h4>
                        <p className="text-center mb-4">Zəhmət olmasa email və şifrənizi düzgün daxil edin.</p>
                        <Form onSubmit={(e) => {}}>
                            <div className="form-group">
                                <Label for="email" className="font-weight-bold">Email</Label>
                                {/* <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email daxil edin"
                                    onChange={(e:React.ChangeEvent) => {}}
                                /> */}
                                <CustomInput 
                                    value={emailValue}
                                    onChange={setEmailValue}
                                    required={true}
                                    isFormSubmit={false}
                                    regex={emailRegex}
                                    placeHolder="Elektron poçt daxil edin"
                                    emptyError="Elektron poçt daxil edin"
                                    invalidError="Daxil etdiyiniz elektron poçt üçün düzgün deyil"
                                />
                            </div>
                            <div className="form-group position-relative">
                                <Label for="password" className="font-weight-bold">Şifrə</Label>
                                <FontAwesomeIcon
                                    icon={true ? faEye : faEyeSlash}
                                    className="eye-icon"
                                    onClick={() => {
                                        setPasswordVisible(!isPasswordVisible)
                                    }}
                                   
                                /> 
                                <CustomInput 
                                    value={passwordValue}
                                    onChange={setPasswordValue}
                                    required={true}
                                    isFormSubmit={false}
                                    regex={passwordRegex}
                                    emptyError="Şifrəni daxil edin"
                                    invalidError="Şifrə minimum 8 simvol, minimum bir rəqəm və hər hansı bir simvol olmalıdır"
                                    type={isPasswordVisible ? "text" : "password"}
                                    placeHolder="Şifrəni daxil edin"
                                />
                                
                            </div>
                            <div className="form-group">
                                <Button
                                    color="primary"
                                    className="font-weight-bold mt-4"
                                    block
                                >
                                Daxil ol
                                </Button>
                            </div>
                        </Form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
)
};
