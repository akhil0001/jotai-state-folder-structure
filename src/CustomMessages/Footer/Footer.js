import React from "react";
import styled from "styled-components";
import { useResetAtom } from "jotai/utils";
import { useAtom } from "jotai";
import { customMessagesAtom } from "../State/customMessages.atom";

export const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100vw;
  height: 10rem;
  bottom: 0rem;
  left: 0;
  background: #ffffff;
`;

export const StyledButton = styled.button`
  height: 2rem;
`;

export const Footer = () => {
  const resetToInitialState = useResetAtom(customMessagesAtom);
  const [customMessagesAtomData] = useAtom(customMessagesAtom);
  console.log(customMessagesAtomData, "customMessagesAtomData");
  return (
    <Container>
      <StyledButton onClick={() => {}}>Send message(s)</StyledButton>
      <StyledButton onClick={resetToInitialState}>Reset State</StyledButton>
    </Container>
  );
};
