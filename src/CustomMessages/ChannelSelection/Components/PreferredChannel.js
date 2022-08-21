import React from "react";
import styled from "styled-components";
import { useAtom } from "jotai";
import {
  smsChannelSelectionAtom,
  emailChannelSelectionAtom
} from "../../State/customMessages.atom";

export const Container = styled.div``;

export const PreferredChannel = () => {
  const [smsSelection, setSmsSelection] = useAtom(smsChannelSelectionAtom);
  const [emailSelection, setEmailSelection] = useAtom(
    emailChannelSelectionAtom
  );
  return (
    <Container>
      <p>Prefered Channel</p>
      <div>
        SMS :{" "}
        <input
          type="checkbox"
          checked={smsSelection}
          onChange={(e) => {
            setSmsSelection(!smsSelection);
          }}
        />
      </div>
      <div>
        EMAIL :{" "}
        <input
          type="checkbox"
          checked={emailSelection}
          onChange={(e) => {
            setEmailSelection(!emailSelection);
          }}
        />
      </div>
    </Container>
  );
};
