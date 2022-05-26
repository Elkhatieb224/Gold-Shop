import React from 'react';
import { Link } from 'react-router-dom';
// import CreateProfile from '../profile-forms/CreateProfile'

export const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i></i> تعديل البيانات{' '}
      </Link>
      <div>
        <Link to='/quiz' className='btn btn-light'>
          <i>تادية الامتحان</i>
        </Link>
      </div>
    </div>
  );
};

export default DashboardActions;
