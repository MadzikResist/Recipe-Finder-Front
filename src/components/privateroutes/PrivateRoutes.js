import React from "react";
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({component: Component, auth, ...rest}) => {
  const secureStorage = localStorage.getItem('secure_token');
  return (<Route
    {...rest}
    render={props => !secureStorage ? <Redirect to="/login"/>
      : <Component {...props} />
    }
  />)
};

export default PrivateRoute