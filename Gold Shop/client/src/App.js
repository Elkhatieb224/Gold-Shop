// import React, { useEffect } from 'react';



import React,{Fragment,useEffect} from 'react';
import { BrowserRouter, Route,  Switch } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/Login/login';
import Nav from './Component/Nav/nav';
import NewStyle from './Component/NewStyle';
import Signup from './Component/Signup/Signup';
import Dashboard from './Component/dashboard/Dashboard';
import CreateProfile from './Component/profile-forms/CreateProfile';
import EditProfile from './Component/profile-forms/EditProfile';
import PrivateRoute from './Component/routing/PrivateRoute';
import Alert from './Component/layout/Alert';
// redux

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';



if (localStorage.token) {
  setAuthToken(localStorage.token);
}


const App= ()=> {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
  <Fragment>
       <BrowserRouter>
     <Nav />
      
      <Route exact path='/' component={Home} />
      <Alert />
      <Switch>
      <Route exact path='/Signup' component={Signup} />
      <Route exact path='/Login' component={Login} />
      <Route  exact path='/NewStyle' component={NewStyle} />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
      <PrivateRoute
              exact
              path='/Create-profile'
              component={CreateProfile}
            />
            <PrivateRoute exact path='/Edit-profile' component={EditProfile} />
      </Switch>
      
      
      </BrowserRouter>
    </Fragment>
    </Provider>
    )
}

export default App;
