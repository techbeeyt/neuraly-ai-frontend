"use client";

import useMobileMenu from "@/hooks/useMobileMenu";
import Image from "next/image";
import React from "react";

const MobileChatListBtn = () => {
  const mobileMenu = useMobileMenu();

  return (
    <button
      className="lg:hidden block fixed top-[32px] -translate-y-1/2 left-3"
      onClick={mobileMenu.toggleChatList}
    >
      {mobileMenu.isChatListOpen ? (
        <Image
          src={"/icons/ui/mobile-menu-close.svg"}
          width={24}
          height={24}
          alt="mobile-menu"
          className="animate-out"
        />
      ) : (
        <Image
          src={"/icons/ui/mobile-menu-btn.svg"}
          width={24}
          height={24}
          alt="mobile-menu"
        />
      )}
    </button>
  );
};

export default MobileChatListBtn;
