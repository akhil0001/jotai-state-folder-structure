import React from "react";
import styled from "styled-components";
import { useAtom, useAtomValue } from "jotai";
import {
  smsChannelSelectionAtom,
  emailChannelSelectionAtom,
  sameMessageContentForBothChannelsAtom
} from "../../State/customMessages.atom";

export const Container = styled.div``;

export const MessageType = () => {
  const [sameContent, setSameContent] = useAtom(
    sameMessageContentForBothChannelsAtom
  );
  const smsChannelSelection = useAtomValue(smsChannelSelectionAtom);
  const emailChannelSelection = useAtomValue(emailChannelSelectionAtom);

  return (
    <Container>
      <p>Message type</p>
      <div>
        <input
          type="radio"
          checked={sameContent === true}
          name="channelSelection"
          disabled={!smsChannelSelection || !emailChannelSelection}
          onChange={(e) => setSameContent(true)}
        />
        <span>Send same message across all channels</span>
      </div>
      <div>
        <input
          type="radio"
          checked={sameContent === false}
          name="channelSelection"
          disabled={!smsChannelSelection || !emailChannelSelection}
          onChange={(e) => setSameContent(false)}
        />
        <span>Customise message for each channel</span>
      </div>
    </Container>
  );
};
