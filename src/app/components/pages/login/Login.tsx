import React, { ReactElement, ReactNode } from 'react';

import { LoginProps } from './Login.types';

import './Login.css';
import gescoLogo from 'app/assets/media/logos/gesco.png';


export const Login = () => {

    return <div className="login">
    <div className="container"></div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">
          <div className="login-wrapper p-4 p-md-5">
            <div className="form-logo">
              <img width={100} src={gescoLogo} alt="logo" />
            </div>
            <h4 className="text-center text-warning">Xoş Gəlmisiniz</h4>
            <p className="text-center mb-4">Zəhmət olmasa email və şifrənizi düzgün daxil edin.</p>
            {/* <Form onSubmit={(e) => this.handleLogin(e)}>
              <div className="form-group">
                <Label for="email" className="font-weight-bold">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email daxil edin"
                />
              </div>
              <div className="form-group position-relative">
                <Label for="password" className="font-weight-bold">Şifrə</Label>
                <Input
                  id="password"
                  name="password"
                  type={this.state.isShowPassword ? "text" : "password"}
                  placeholder="Şifrə daxil edin"
                  onChange={(e) => {
                    this.setState({ newPasswordValue: e.target.value })
                  }}
                />
                <FontAwesomeIcon
                  icon={this.state.isShowPassword ? faEye : faEyeSlash}
                  className="eye-icon"
                  onClick={() => {
                    this.setState({
                      isShowPassword: !this.state.isShowPassword
                    })
                  }}
                />
              </div>
              <div className="form-group">
                <Button
                  color="warning"
                  className="font-weight-bold mt-4"
                  block
                >
                  Daxil ol
                </Button>
              </div>
            </Form> */}
          </div>
        </div>
      </div>
    </div>
  </div>
};
