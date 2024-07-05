"use client";

import useMobileMenu from "@/hooks/useMobileMenu";
import Image from "next/image";
import React from "react";

const ChatLeftNavbar = () => {
  const mobileMenu = useMobileMenu();
  return (
    <div
      className={`fixed lg:top-[72px] top-[64px] lg:left-0 ${
        mobileMenu.isChatListOpen ? "left-0" : "-left-full"
      } w-[300px] lg:h-[calc(100vh-72px)] h-[calc(100vh-64px)] bg-[#f6f6f6] border-r-2 border-gray-200 overflow-auto chat z-[10000] transition-all duration-150 ease-in`}
    >
      <div className="flex justify-center items-center py-4 border-b border-gray-300">
        <button className="bg-white border-2 border-gray-500 font-semibold rounded-md px-4 py-1.5 flex justify-center items-center gap-2">
          <span>New Session</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 26 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_12102_1083)">
              <rect
                width="24.8402"
                height="24.8402"
                transform="translate(0.792236 0.0158691)"
                fill="white"
              />
              <path
                d="M13.2124 8.29599V16.5761M9.07235 12.436H17.3524M23.5625 12.436C23.5625 18.1522 18.9286 22.7861 13.2124 22.7861C7.49619 22.7861 2.8623 18.1522 2.8623 12.436C2.8623 6.71983 7.49619 2.08594 13.2124 2.08594C18.9286 2.08594 23.5625 6.71983 23.5625 12.436Z"
                stroke="black"
                strokeWidth="2.48402"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_12102_1083">
                <rect
                  width="24.8402"
                  height="24.8402"
                  fill="white"
                  transform="translate(0.792236 0.0158691)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

      <div className="pb-8">
        {Array.from({ length: 20 }).map((item, index) => {
          return (
            <div
              key={`chat_${index}`}
              className="flex justify-start items-center gap-4 px-6 py-3 border-b border-gray-300"
            >
              <div>
                <Image
                  src="/icons/neuraly-icon.svg"
                  height={30}
                  width={30}
                  alt="neuraly.ai"
                />
              </div>

              <div key={index} className="w-full">
                <span className="whitespace-nowrap font-medium text-sm">
                  {`Doctor Is responsible for this issue fixed by others`.slice(
                    0,
                    30
                  )}
                  {`Doctor Is responsible for this issue fixed by others`
                    .length > 30
                    ? "..."
                    : ""}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatLeftNavbar;
