import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  padding: 10px 130px;
  max-width: 1440px;
  width: 100%;
  // background-color: red;
  margin-top: 96px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;

export { Container, Content };
