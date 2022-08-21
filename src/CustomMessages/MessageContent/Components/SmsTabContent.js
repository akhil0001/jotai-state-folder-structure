import React from "react";
import { useAtom } from "jotai";
import { smsContentAtom } from "../../State/customMessages.atom";

export const SmsTabContent = () => {
  const [smsContent, setSmsContent] = useAtom(smsContentAtom);
  return (
    <div>
      <div>Message</div>
      <textarea
        value={smsContent}
        onChange={(e) => setSmsContent(e.target.value)}
      />
    </div>
  );
};
