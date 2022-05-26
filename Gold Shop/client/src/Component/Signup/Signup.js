import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { signup } from "../../actions/auth";
import PropTypes from "prop-types";

const Signup = ({ setAlert, signup, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    Confirmpassword: "",
  });

  const { name, email, password, Confirmpassword } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== Confirmpassword) {
      setAlert("password do not match", "danger");
    } else {
      signup({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='formLogin'>
      <div className='form'>
        <form className='login' onSubmit={(e) => onSubmit(e)}>
          <span className='titelForm'>انشاء حساب</span>
          <br />
          <br />
          <label>
            <input
              className='input'
              type='text'
              name='name'
              value={name}
              placeholder='الاسم'
              onChange={(e) => onChange(e)}
            />
          </label>
          <br />
          <br />

          <label>
            <input
              className='input'
              type='email'
              name='email'
              value={email}
              placeholder='البريد الالكتروني'
              onChange={(e) => onChange(e)}
              // required
            />
          </label>
          <br />
          <br />
          <label>
            <input
              className='input'
              type='password'
              name='password'
              value={password}
              placeholder='كلمة السر'
              onChange={(e) => onChange(e)}
            />
          </label>
          <br />
          <br />
          <label>
            <input
              className='input'
              type='password'
              name='Confirmpassword'
              value={Confirmpassword}
              placeholder='تاكيد كلمة السر'
              onChange={(e) => onChange(e)}
            />
          </label>
          <br />
          <div className='loginButton'>
            <button
              className='Button'
              // onClick={e => this.onSignup(e)}
            >
              تسجيل
            </button>
          </div>
          <br />
          <br />
          <br />
          <div className='loginButton'>
            <div>
              <Link to='./login'>
                <button className='Button'>تسجيل الدخول</button>
              </Link>
            </div>
            <br />
            <div>
              <Link to='./'>
                <button className='Button'>الصفحة الرئيسية</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
Signup.prototype = {
  setAlert: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, signup })(Signup);
