import React from 'react';

import { Container, Header, Main } from './styles';
import beleza from '../../assets/images/beleza.png';

export default function Product() {
  return (
    <Container>
      <Header>
        <img src={beleza} alt="beleza" />
        <h1>Nome do produto</h1>
      </Header>
      <Main>
        <ul>
          <li>
            <h3>Item 1</h3>
            <input type="date" />
          </li>

          <li>
            <h3>Item 1</h3>
            <input type="date" />
          </li>

          <li>
            <h3>Item 1</h3>
            <input type="date" />
          </li>

          <li>
            <h3>Item 1</h3>
            <input type="date" />
          </li>
        </ul>
      </Main>
    </Container>
  );
}
