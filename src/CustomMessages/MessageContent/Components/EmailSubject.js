import React from "react";
import { emailSubjectAtom } from "../../State/customMessages.atom";
import { useAtom } from "jotai";

export const EmailSubject = () => {
  const [emailSubject, setEmailSubject] = useAtom(emailSubjectAtom);
  return (
    <>
      <div>Subject</div>
      <input
        type="text"
        value={emailSubject}
        onChange={(e) => setEmailSubject(e.target.value)}
      />
    </>
  );
};
