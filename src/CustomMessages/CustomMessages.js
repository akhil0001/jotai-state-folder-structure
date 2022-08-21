import React, { useEffect } from "react";
import { ChannelSelection } from "./ChannelSelection/ChannelSelection";
import { MessageContent } from "./MessageContent/MessageContent";
import { ParticipantList } from "./ParticipantList/ParticipantList";
import { Footer } from "./Footer/Footer";
import { Container, LeftContainer, RightContainer } from "./styled";
import { useAtom } from "jotai";
import { useUpdateAtom } from "jotai/utils";
import { appointmentsAtom } from "../CustomMessages/State/customMessages.atom";
import { getAppointmentData } from "./api/getAppointmentData";



export const CustomMessages = () => {
  const setAppointments = useUpdateAtom(appointmentsAtom);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAppointmentData();
      setAppointments(data);
    }
    fetchData();
  },[setAppointments]);

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
