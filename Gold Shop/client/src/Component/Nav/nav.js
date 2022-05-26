import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faUserPlus,
//   faSignInAlt,
//   faHome,
//   faInfoCircle,
//   faSignOutAlt,
//   faUser,
// } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Nav = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div className='container'>
      <ul>
        <Link to='/' className='active'>
          {/* <FontAwesomeIcon icon={faHome} /> */}
          الصفحة الرئيسية
        </Link>

        <Link to='/dashboard'>
          {/* <FontAwesomeIcon icon={faUser} /> */}
          الصفحة الشخصية
        </Link>
        <div className='topnav-right'>
          <a onClick={logout} href='/#!'>
            {/* تسجبل الخروج <FontAwesomeIcon icon={faSignOutAlt} size='2x' /> */}
            تسجيل الخروج
          </a>
          <a href='#!'>
            {/* <FontAwesomeIcon icon={faInfoCircle} size='2x' /> */}
          </a>
        </div>
      </ul>
    </div>
  );

  const guestLinks = (
    <div className='container'>
      <ul>
        <Link to='/' className='active'>
          {/* <FontAwesomeIcon icon={faHome} /> */}
          الصفحة الرئيسية
        </Link>

        <div className='topnav-right'>
          <a href='#!'>
            {/* <FontAwesomeIcon icon={faInfoCircle} size='2x' /> */}
          </a>
        </div>

        <Link to='/Signup'>
          {/* <FontAwesomeIcon icon={faUserPlus} /> */}
          التسجسل
        </Link>
        <Link to='/Login'>
          {/* <FontAwesomeIcon icon={faSignInAlt} /> */}
          تسجيل الدخول
        </Link>
      </ul>
    </div>
  );

  return (
    <div>
      <div className='container'></div>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </div>
  );
};

Nav.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Nav);
