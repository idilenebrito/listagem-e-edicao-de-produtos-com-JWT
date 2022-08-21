import React, { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginAuthContext } from '../../contexts/loginAuth.js';
import { Box, InputButton, InputText, Title } from '../../Styles/global';

const Login = () => {
  const { HandleSubmit } = useContext(LoginAuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  return (
    <div>
      <form
        className="login-form"
        onSubmit={(e) => {
          HandleSubmit(e, formData, '/login', navigate);
        }}
      >
        <Box>
          <Title>Login</Title>
          <InputText
            type="text"
            placeholder="Email"
            value={formData.email}
            name="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e)
            }
            required
          ></InputText>
          <InputText
            type="password"
            placeholder="Senha"
            value={formData.password}
            name="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e)
            }
            required
          ></InputText>
          <InputButton className="login-btn" type="submit">
            Login
          </InputButton>
        </Box>
      </form>
    </div>
  );
};

export default Login;
