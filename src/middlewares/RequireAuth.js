import { Redirect } from 'react-router-dom';

export default function RequireAuth(Component, role) {

  return () => {
    const dataLogin = JSON.parse(localStorage.getItem('dataLogin'))
    if(dataLogin) {
      if(dataLogin.type === role) {
        return <Component />;
      }else{
        return <Redirect to="/login" />;
      }
    }
  };
}
