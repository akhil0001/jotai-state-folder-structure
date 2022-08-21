import React from "react";
import { useAtom } from "jotai";
import { EmailSubject } from "./EmailSubject";
import { emailContentAtom } from "../../State/customMessages.atom";

export const EmailTabContent = () => {
  const [emailContent, setEmailContent] = useAtom(emailContentAtom);
  return (
    <>
      <div>
        <EmailSubject />
      </div>
      <div>
        <div>Message</div>
        <textarea
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
        />
      </div>
    </>
  );
};
