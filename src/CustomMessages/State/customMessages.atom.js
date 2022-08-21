import { focusAtom } from "jotai/optics";
import { atomWithReset } from "jotai/utils";

export const initialState = {
  appointments: [],
  activeAppointmentId: "",
  participantsData: {},
  activeParticipantId: "",
  modals: {
    showLoader: false,
    showEditParticipantsModal: false,
    showStatusModal: false
  },
  participantTransactionsData: {},
  notificationTitle: "",
  smsChannelSelection: false,
  emailChannelSelection: false,
  sameMessageContentForBothChannels: false,
  emailContent: "",
  emailSubject: "",
  smsContent: ""
};

export const customMessagesAtom = atomWithReset(initialState);

export const appointmentsAtom = focusAtom(customMessagesAtom, (optic) =>
  optic.prop("appointments")
);

export const modalsAtom = focusAtom(customMessagesAtom, (optic) =>
  optic.prop("modals")
);

export const participantsDataAtom = focusAtom(customMessagesAtom, (optic) =>
  optic.prop("participantsData")
);

export const notificationTitleAtom = focusAtom(customMessagesAtom, (optic) =>
  optic.prop("notificationTitle")
);

export const smsChannelSelectionAtom = focusAtom(customMessagesAtom, (optic) =>
  optic.prop("smsChannelSelection")
);

export const emailChannelSelectionAtom = focusAtom(
  customMessagesAtom,
  (optic) => optic.prop("emailChannelSelection")
);

export const sameMessageContentForBothChannelsAtom = focusAtom(
  customMessagesAtom,
  (optic) => optic.prop("sameMessageContentForBothChannels")
);

export const emailContentAtom = focusAtom(customMessagesAtom, (optic) =>
  optic.prop("emailContent")
);

export const emailSubjectAtom = focusAtom(customMessagesAtom, (optic) =>
  optic.prop("emailSubject")
);

export const smsContentAtom = focusAtom(customMessagesAtom, (optic) =>
  optic.prop("smsContent")
);
