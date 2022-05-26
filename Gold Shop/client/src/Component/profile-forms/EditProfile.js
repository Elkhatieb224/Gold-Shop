import React, { useState, Fragment, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    location: '',
    // skills: '',
    status: '',
  });
  useEffect(() => {
    getCurrentProfile();

    setFormData({
      location: loading || !profile.location ? '' : profile.location,
      // skills: loading || !profile.skills ? '' : profile.skills.join(','),
      status: loading || !status.location ? '' : status.location,
    });
  }, [loading]);

  const { status, location,  } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>تعديل الملف الشخصي</h1>
      <p className='lead'>ادخل بياناتك لمساعدتك في اختيار كليتك</p>
      <small>* = معلومات اساسية </small>
      <form onSubmit={(e) => onSubmit(e)}>
        {/* status */}

        <div className='form-group'>
          <select name='status' value={status} onChange={(e) => onChange(e)}>
            <option value='0'>* نظام المدرسة الثانوية</option>
            <option value='thanwyaAmma'>ثانوية عامة</option>
            <option value='americanDiploma'> امريكان دبلومة</option>
          </select>
        </div>

        {/* Location */}
        <div class='form-group'>
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

  
        <input type='submit' class='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          الرجوع للخلف
        </Link>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
