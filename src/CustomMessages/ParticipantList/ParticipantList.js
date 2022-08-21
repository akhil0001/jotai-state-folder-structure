import React, { useEffect } from "react";
import styled from "styled-components";
import { appointmentsAtom } from "../State/customMessages.atom";
import { useAtom } from "jotai";
import { splitAtom } from "jotai/utils";
import { Appointment } from "./Components/Appointment/Appointment";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ParticipantList = () => {
  const appointmentsSplitAtom = splitAtom(appointmentsAtom);
  const [appointmentsSplitAtomsAtom] = useAtom(appointmentsSplitAtom);

  const appointmentsElements = appointmentsSplitAtomsAtom?.map(
    (appointmentAtom) => {
      if (!appointmentAtom) return <></>;
      return (
        <Appointment
          key={`${appointmentAtom}`}
          appointmentAtom={appointmentAtom}
        />
      );
    }
  );

  return <Container>{appointmentsElements}</Container>;
};
