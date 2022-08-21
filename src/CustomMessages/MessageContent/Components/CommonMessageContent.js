import React from "react";
import { useAtom } from "jotai";
import { EmailSubject } from "./EmailSubject";
import {
  emailContentAtom,
  smsContentAtom
} from "../../State/customMessages.atom";

export const CommonMessageContent = () => {
  const [emailContent, setEmailContent] = useAtom(emailContentAtom);
  const [_, setSmsContent] = useAtom(smsContentAtom);
  return (
    <>
      <div>
        <EmailSubject />
      </div>
      <div>
        <div>Message</div>
        <textarea
          value={emailContent}
          onChange={(e) => {
            setEmailContent(e.target.value);
            setSmsContent(e.target.value);
          }}
        />
      </div>
    </>
  );
};
