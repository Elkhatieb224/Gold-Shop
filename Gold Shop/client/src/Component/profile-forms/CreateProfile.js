import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    location: '',

    status: '',
  });

  const { status, location } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>انشاء الحساب الشخصي</h1>
      <br />
      <p className='lead'>ادخل بياناتك حتى تساعد في اختيار كليتك</p>
      <br />
      <small>
        <h3>* = معلومات اساسية</h3>{' '}
      </small>
      <br />
      <form onSubmit={(e) => onSubmit(e)}>
        {/* status */}

        <div className='custom-select'>
          <select name='status' value={status} onChange={(e) => onChange(e)}>
            <option value='0'>* نظام المدرسة الثانوية</option>
            <option value='thanwyaAmma'>ثانوية عامة</option>
            <option value='americanDiploma'> امريكان دبلومة</option>
          </select>
        </div>

        {/* Location */}
        <div class='custom-select'>
          <select
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
          >
            <option value='0'>* المحافظة </option>
            <option value='cairo'> القاهرة </option>
            <option value='beniSuef'> بني سويف </option>
          </select>
        </div>

        <input type='submit' className='btn btn-primary my-1' />
        <br />
        <br />
        <br />
        <Link className='btn btn-light my-1' to='dashboard'>
          <button className='btn'>الرجوع للخلف</button>
        </Link>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
