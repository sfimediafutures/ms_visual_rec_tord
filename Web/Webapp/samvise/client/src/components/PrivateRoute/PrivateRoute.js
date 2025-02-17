import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { authContext } from "../../contexts/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useContext(authContext);
  const { loading } = auth;

  if (loading) {
    return (
      <Route
        {...rest}
        render={() => {
          return <p></p>;
        }}
      />
    );
  }

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        return auth.data ? <Component {...routeProps} /> : <Redirect to="/" />;
      }}
    />
  );
};

export default PrivateRoute;
