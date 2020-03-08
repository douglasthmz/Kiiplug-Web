import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 840px;
  box-shadow: 0 2px 4px #829399;
  background-color: #2f939f;
  margin-top: 15px;
  color: #ebf3ea;
  border-radius: 4px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const Main = styled.main`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;
