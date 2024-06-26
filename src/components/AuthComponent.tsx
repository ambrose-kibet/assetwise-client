import styled from 'styled-components';
import { useEffect, useState } from 'react';
import InputComponent from './InputComponent.tsx';
import {
  handleChange,
  loginUser,
  registerUser,
} from '../redux/features/auth/authSlice.ts';
import { useAppDispatch, useAppSelector } from '../redux/hooks.ts';
import type { RootState } from '../redux/store';
import PasswordComponent from './PasswordInput.tsx';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import validator from 'validator';
const AuthComponent = () => {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const {
    tempUser: { confirmPassword, email, fullName, password },
    isLoading,
    user,
  } = useAppSelector((state: RootState) => state.auth);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value }));
  };
  const toggleAuth = () => {
    setIsRegister((oldVal) => !oldVal);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isRegister) {
      if (!email || !password || !fullName || !confirmPassword) {
        toast.error('Please fill all fields');
        return;
      }
      if (password.length < 6) {
        toast.error('Password must be at least 6 characters');
        return;
      }
      if (password !== confirmPassword) {
        toast.error('Password does not match');
        return;
      }
      if (!validator.isEmail(email)) {
        toast.error('Please provide a valid email');
        return;
      }
      const tempUser = { email, password, fullName };
      dispatch(registerUser(tempUser));
    } else {
      if (!email || !password) {
        toast.error('Please provide email and password field');
        return;
      }
      if (password.length < 6) {
        toast.error('Password must be at least 6 characters');
        return;
      }
      if (!validator.isEmail(email)) {
        toast.error('Please provide a valid email');
        return;
      }
      dispatch(loginUser({ email, password }));
    }
  };

  useEffect(() => {
    if (user) {
      navigate('/dashboard/');
    }
  }, [user, navigate]);
  return (
    <AuthContainer>
      <p className="title">welcome {isRegister ? '' : 'back'}</p>

      <form onSubmit={handleSubmit}>
        <h4>Sign {isRegister ? 'Up' : 'In'} </h4>
        {isRegister && (
          <InputComponent
            name="fullName"
            placeholder="full name"
            type="text"
            handleChange={handleInputChange}
            value={fullName}
          />
        )}
        <InputComponent
          name="email"
          placeholder="email"
          type="email"
          handleChange={handleInputChange}
          value={email}
        />
        <PasswordComponent
          name="password"
          placeholder="password"
          handleChange={handleInputChange}
          value={password}
        />
        {isRegister && (
          <PasswordComponent
            name="confirmPassword"
            placeholder="confirm password"
            handleChange={handleInputChange}
            value={confirmPassword}
          />
        )}
        <button type="submit" className="button submit-btn">
          {isRegister ? 'Register' : 'Login'}
        </button>
      </form>
      <div>
        <p>
          {isRegister ? 'Already have an account? ' : "Don't have an account? "}
        </p>
        <button
          type="button"
          onClick={toggleAuth}
          className="btn-toggler"
          disabled={isLoading}
        >
          {isRegister ? 'Login' : 'Register'}
        </button>
      </div>
    </AuthContainer>
  );
};
export default AuthComponent;

const AuthContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
  }
  .title {
    padding: 0.5rem 1.5rem;
    margin-top: 0.5rem;
    background: linear-gradient(45deg, var(--blue-500), var(--blue-700));
    border-radius: 2.5rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    color: var(--clr-white);
    position: absolute;
    letter-spacing: 2px;
    top: 0;
    left: 0;
  }

  form {
    width: 100%;
    padding: 1rem 1.5rem;
    max-width: 350px;
    h4 {
      margin-bottom: 1rem;
      text-align: center;
      font-size: 1rem;
      color: var(--blue-700);
    }
    .button {
      color: var(--blue-700);
      border-color: var(--blue-700);
      &:hover {
        color: var(--clr-white);
        background-color: var(--blue-700);
      }
    }

    .submit-btn {
      padding: 0.75rem 1.5rem;
      margin: auto;
      margin-top: 1rem;
      width: 100%;
      font-weight: 600;
    }
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    p {
      margin: 0;
      margin-right: 0.5rem;
      color: var(--blue-700);

      font-size: 1rem;
    }
    .btn-toggler {
      background: transparent;
      border: none;
      color: var(--blue-500);
      font-size: 0.9rem;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 768px) {
    .title {
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    form {
      padding: 1rem;
    }
  }
`;
