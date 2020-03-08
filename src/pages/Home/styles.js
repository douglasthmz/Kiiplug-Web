import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  margin: auto;
  max-width: 840px;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 2px 4px #829399;
  background-color: #2f939f;
  margin-top: 15px;
  color: #ebf3ea;
  border-radius: 4px;
  div {
    display: flex;
    margin: 10px;
    padding: 10px;
    width: 180px;
    height: 80px;
    border-radius: 4px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    label {
      font-weight: bold;
      font-size: 16px;
    }

    input {
      border: 0;
      background: none;
      color: #ebf3ea;
      font-weight: bold;
      border-bottom: 1px solid #ebf3ea;
      height: 25px;
    }

    select {
      height: 25px;
      width: 160px;
      background: none;
      border: 0;
      border-bottom: 1px solid #ebf3ea;
      color: #ebf3ea;
      font-size: 14px;
      font-weight: bold;

      option {
        color: #ebf3ea;
        background: #2f939f;
        font-size: 14px;
        font-weight: bold;
        border: none;
      }
    }

    button {
      background: #ebf3ea;
      color: #2f939f;
      border: 0;
      border-radius: 4px;
      padding: 8px 15px;
      margin-right: 10px;
      font-size: 16px;
      font-weight: 800;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.04, '#EBF3EA')};
      }
    }
  }
`;

export const PackList = styled.ul`
  display: flex;
  text-decoration: none;
  flex-direction: column;
  margin: auto;
  max-width: 840px;
  margin-top: 20px;

  li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #2f939f;
    min-height: 150px;
    box-shadow: 0 2px 4px #829399;
    border-radius: 4px;
    margin-bottom: 20px;
  }
`;

export const PackHeader = styled.header`
  display: flex;
  color: #ebf3ea;
  width: 100%;
  padding: 5px 10px 0 10px;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    img {
      display: flex;
      height: 60px;
      border-radius: 50%;
      margin: 10px 0 0 20px;
    }

    h1 {
      display: flex;
      margin-left: 30px;
      font-size: 22px;
    }
  }
  button {
    display: flex;
    background: none;
    border: none;
    align-self: flex-start;
  }
`;

export const PackInfos = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #ebf3ea;
  color: #2f939f;
  width: 92%;
  align-self: center;
  margin-top: 10px;
  padding: 5px;
  border-radius: 4px;
  div {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    font-size: 14px;

    span + span {
      margin-top: 3px;
    }

    button {
      background: #ebf3ea;
      color: #2f939f;
      border: 1px solid #2f939f;
      border-radius: 4px;
      padding: 8px 15px;
      margin-right: 10px;
      font-size: 16px;
      font-weight: 800;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.04, '#EBF3EA')};
      }
    }
  }
`;
