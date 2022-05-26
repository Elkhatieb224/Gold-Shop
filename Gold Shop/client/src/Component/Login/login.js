import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

import './login.css';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('EMAIL', email);
    console.log('PASS', password);
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='formLogin'>
      <div className='form'>
        <form className='login' onSubmit={(e) => onSubmit(e)}>
          <span className='titelForm'>تسجيل الدخول</span>
          <br />
          <br />

          <label>
            <input
              className='input'
              type='email'
              name='email'
              placeholder='البريد الالكتروني'
              onChange={(e) => onChange(e)}
              required
            />
          </label>
          <br />
          <br />
          <label>
            <input
              className='input'
              type='password'
              name='password'
              placeholder='كلمة السر'
              onChange={(e) => onChange(e)}
              required
              minLength='6'
            />
          </label>
          <br />
          <br />
          <div className='loginButton'>
            <button className='Button'>تسجيل الدخول</button>
          </div>
          <br />
          <br />
          <br />
          <div className='loginButton'>
            <Link to='./Signup'>
              <button className='Button'>التسجيل</button>
            </Link>
            <Link to='/'>
              <button className='Button'>الصفحة الرئيسية</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
