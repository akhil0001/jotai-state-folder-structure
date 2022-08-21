import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
`;

export const LeftContainer = styled.div`
  height: 80vh;
  background: #ffffff;
  width: 35vw;
`;

export const RightContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60vw;
`;
