import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.header`
  display: flex;
  background-color: #2f939f;
  padding: 0;
  box-shadow: 0 2px 4px #829399;

  div {
    display: flex;
    margin: 0 auto;
    max-width: 840px;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    a {
      text-decoration: none;
      color: #ebf3ea;
      font-weight: bold;
      font-size: 18px;
      font-weight: 800;

      img {
        width: 75px;
        height: auto;
        margin-top: 3px;
      }

      &:hover {
        color: ${darken(0.06, '#EBF3EA')};
      }
    }
  }
`;

export const Login = styled.section`
  display: flex;
  align-items: center;
  text-decoration: none;

  button {
    background: #ebf3ea;
    color: #2f939f;
    border: 0;
    border-radius: 4px;
    padding: 8px 15px;
    margin-right: 10px;
    font-size: 18px;
    font-weight: 800;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.04, '#EBF3EA')};
    }
  }
`;
