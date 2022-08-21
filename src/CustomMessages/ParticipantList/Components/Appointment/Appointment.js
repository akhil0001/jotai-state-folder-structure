import React, { useMemo, useCallback } from "react";
import { Checkbox } from "@mantine/core";
import { useAtom } from "jotai";
import { focusAtom } from "jotai/optics";

const getParticipants = (optic) => optic.prop("participants");

export const Appointment = React.memo(({ appointmentAtom }) => {
  const [appointment] = useAtom(appointmentAtom);
  const participantsAtom = focusAtom(appointmentAtom, getParticipants);
  const [participants, setParticipants] = useAtom(participantsAtom);
  const friendlyAppointmentId = appointment?.appointment_id;
  const allChecked = participants?.every((value) => value.selected);
  const indeterminate =
    participants?.some((value) => value.selected) && !allChecked;

  const handleParticipantSelection = useCallback(
    (participantId, selectionValue) => {
      const participant = participants.find(
        (participant) => participant.participantId === participantId
      );
      const updatedParticipantData = {
        ...participant,
        selected: !selectionValue
      };
      let participantIndex = participants.findIndex(
        (participant) => participant.participantId === participantId
      );
      const updatedParticipantList = [
        ...participants.slice(0, participantIndex),
        updatedParticipantData,
        ...participants.slice(++participantIndex)
      ];
      setParticipants(updatedParticipantList);
    },
    [participants, setParticipants]
  );

  const participantItems = useMemo(() => {
    if (!participants.length) return <></>;
    const items = participants?.map((participant) => {
      return (
        <Checkbox
          mt="xs"
          ml={33}
          label={participant.name}
          key={participant.participantId}
          checked={participant.selected}
          onChange={() =>
            handleParticipantSelection(
              participant.participantId,
              participant.selected
            )
          }
        />
      );
    });
    return items;
  }, [participants, handleParticipantSelection]);

  return (
    <div>
      <Checkbox
        checked={allChecked}
        indeterminate={indeterminate}
        label={friendlyAppointmentId}
        transitionDuration={0}
        onChange={() => {}}
      />
      {participantItems}
    </div>
  );
});
