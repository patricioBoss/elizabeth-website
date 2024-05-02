import React, { useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  return (
    <FloatingWhatsApp
      accountName="Elizabeth Graney"
      avatar="/img/elizabeth reed avatar.jpg"
      buttonClassName="left-[2rem] "
      onClose={() => setOpen(false)}
      onClick={() => setOpen(true)}
      phoneNumber="16195379874"
      chatboxClassName={`left-[2rem]  ${
        open ? "animate-bounce-in" : " animate-bounce-out"
      }`}
    />
  );
};

export default WhatsAppWidget;
