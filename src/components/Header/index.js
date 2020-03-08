import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Login } from './styles';
import logo from '../../assets/logos/logo.png';

export default function Header() {
  return (
    <Container>
      <div>
        <Link to="/">
          <img src={logo} alt="kiiplug-logo" />
        </Link>
        <Login>
          <button type="button">Login</button>
          <Link to="/">Sign in</Link>
        </Login>
      </div>
    </Container>
  );
}
