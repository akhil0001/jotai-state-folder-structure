import React, { useState } from "react";
import { Tabs } from "@mantine/core";
import { useAtomValue } from "jotai";
import {
  smsChannelSelectionAtom,
  emailChannelSelectionAtom,
  sameMessageContentForBothChannelsAtom
} from "../State/customMessages.atom";

import { SmsTabContent } from "./Components/SmsTabContent";
import { EmailTabContent } from "./Components/EmailTabContent";
import { CommonMessageContent } from "./Components/CommonMessageContent";

import styled from "styled-components";
export const Container = styled.div`
  height: 55%;
  background: #ffffff;

  textarea {
    height: 200px;
    width: 400px;
  }

  input {
    width: 400px;
  }
`;

export const CommonMessageContainer = styled.div``;

export const MessageContent = () => {
  const smsChannelSelection = useAtomValue(smsChannelSelectionAtom);
  const emailChannelSelection = useAtomValue(emailChannelSelectionAtom);
  const sameMessageContentSelection = useAtomValue(
    sameMessageContentForBothChannelsAtom
  );
  const [activeTab, setActiveTab] = useState("sms");

  const showTabs =
    smsChannelSelection &&
    emailChannelSelection &&
    !sameMessageContentSelection;

  return (
    <Container>
      <div>Message Content</div> &nbsp;
      {!showTabs && <CommonMessageContent />}
      {showTabs && (
        <Tabs value={activeTab} onTabChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Tab value="sms">SMS</Tabs.Tab>
            <Tabs.Tab value="email">Email</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="sms">
            <SmsTabContent />
          </Tabs.Panel>
          <Tabs.Panel value="email">
            <EmailTabContent />
          </Tabs.Panel>
        </Tabs>
      )}
    </Container>
  );
};
