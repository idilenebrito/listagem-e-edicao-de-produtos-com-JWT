import { createContext, useState } from 'react';
import api from '../services/api';

const LoginAuthContext = createContext();

function LoginAuth({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [userProfileData, setUserProfileData] = useState();

  async function HandleSubmit(e, dataForm, route, navigate) {
    e.preventDefault();
    const {
      data: { accessToken, user },
    } = await api
      .post(route, dataForm, {
        headers: { 'Content-Type': 'application/json' },
      })
      .catch(() => {
        alert('Usuario não cadastrado');
      });
    if (route == '/login') {
      localStorage.setItem('token', JSON.stringify(accessToken));
      api.defaults.headers.authorization = `Bearer ${accessToken}`;
      setAuthenticated(true);
      const {
        data: { email },
      } = await api.get(`/users/${user.id}`);
      setUserProfileData({
        email: email,
      });
      console.log('userProfileData', userProfileData);
      navigate('/edicao-produto');
      //redireciona o usuário para o login imediatamente após o cadastro do usuário
    } else navigate('/login');
  }

  function logOut() {
    setAuthenticated(false);
    localStorage.clear();
    api.defaults.headers.authorization = undefined;
  }

  return (
    <LoginAuthContext.Provider
      value={{ HandleSubmit, authenticated, userProfileData, logOut }}
    >
      {children}
    </LoginAuthContext.Provider>
  );
}
export { LoginAuthContext, LoginAuth };
