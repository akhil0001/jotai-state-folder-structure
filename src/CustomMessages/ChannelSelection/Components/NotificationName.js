import React from "react";
import styled from "styled-components";
import { useAtom } from "jotai";
import { notificationTitleAtom } from "../../State/customMessages.atom";

export const Container = styled.div`
  input {
    width: 100%;
  }
`;

export const NotificationName = () => {
  const [notificationName, setNotificationName] = useAtom(
    notificationTitleAtom
  );
  return (
    <Container>
      <div>Notification Name</div>
      <input
        type="text"
        value={notificationName}
        onChange={(e) => setNotificationName(e.target.value)}
      />
    </Container>
  );
};
