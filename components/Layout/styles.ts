import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  text-align: center;
`;

export const Header = styled.div`
  overflow: hidden;
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 9;
  cursor: pointer;
`;

export const Content = styled.div`
  margin-top: 60px;
  padding: 16px;
  align-items: center;
  text-align: center;
`;

export const LoadingContainer = styled.div`
  margin: auto;

  div {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    z-index: 9;
  }
`;
