
export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...Rest} render={(props) => {
    isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
  }}
  />
)