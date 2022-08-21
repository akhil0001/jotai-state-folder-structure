import React, { useState } from "react";
import styled from "styled-components";
import { MessageType } from "./Components/MessageType";
import { NotificationName } from "./Components/NotificationName";
import { PreferredChannel } from "./Components/PreferredChannel";

export const Container = styled.div`
  height: 40%;
  background: #ffffff;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;
`;

export const SelectionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChannelSelection = () => {
  return (
    <Container>
      <NotificationName />
      <SelectionsContainer>
        <PreferredChannel />
        <MessageType />
      </SelectionsContainer>
    </Container>
  );
};
