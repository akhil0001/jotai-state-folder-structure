import React from "react";
import { ChannelSelection } from "./ChannelSelection/ChannelSelection";
import { MessageContent } from "./MessageContent/MessageContent";
import { ParticipantList } from "./ParticipantList/ParticipantList";
import { Footer } from "./Footer/Footer";
import { Container, LeftContainer, RightContainer } from "./styled";
import { useAtom } from "jotai";
import { useUpdateAtom } from "jotai/utils";
import { appointmentsAtom } from "../CustomMessages/State/customMessages.atom";

const testAppointmentData = [
  {
    _id: "62de4fff05f1be002619a564",
    scheduled_start_time: "2022-07-25T08:10:39.209Z",
    appointment_start_time: "2022-07-25T08:10:39.209Z",
    appointment_id: "KD-477-1",
    scheduled_end_time: "2022-07-25T09:10:39.209Z",
    participants: [
      {
        name: "abhishek s",
        role: "host",
        selected: true,
        participantId: "62de4fff05f1be002619a569"
      },
      {
        name: "Akhil",
        role: "primary-guest",
        selected: true,
        participantId: "62de4fff05f1be002619a559"
      }
    ]
  },
  {
    _id: "62de4fff05f1be002619a564",
    scheduled_start_time: "2022-07-25T08:10:39.209Z",
    appointment_start_time: "2022-07-25T08:10:39.209Z",
    appointment_id: "KD-477-1",
    scheduled_end_time: "2022-07-25T09:10:39.209Z",
    participants: [
      {
        name: "Ashwini",
        role: "host",
        selected: true,
        participantId: "62de4fff05f1be002619a569"
      },
      {
        name: "Ram",
        role: "primary-guest",
        selected: true,
        participantId: "62de4fff05f1be002619a559"
      }
    ]
  }
];

export const CustomMessages = () => {
  const setAppointments = useUpdateAtom(appointmentsAtom);
  React.useEffect(() => {
    setAppointments(testAppointmentData);
  }, [setAppointments]);
  return (
    <>
      <Container>
        <LeftContainer>
          <ParticipantList />
        </LeftContainer>
        <RightContainer>
          <ChannelSelection />
          <MessageContent />
        </RightContainer>
        <Footer />
      </Container>
    </>
  );
};
