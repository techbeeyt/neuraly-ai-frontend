import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const AgentCard = () => {
  return (
    <div className={`bg-gray-200 w-full rounded-3xl px-5 py-6`}>
      <div className="flex justify-between items-start gap-2">
        <h1 className="font-medium">Patient Diagaram History</h1>
        <div>
          <svg
            viewBox="18.328 12.752 4.389 16.227"
            fill="none"
            height={16}
            width={16}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="clip0_11919_28676">
                <rect
                  x="0.5"
                  y="0.840088"
                  width="40"
                  height="40"
                  rx="20"
                  fill="white"
                />
              </clipPath>
            </defs>
            <g clipPath="url(#clip0_11919_28676)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.5 16.8401C21.6 16.8401 22.5 15.9401 22.5 14.8401C22.5 13.7401 21.6 12.8401 20.5 12.8401C19.4 12.8401 18.5 13.7401 18.5 14.8401C18.5 15.9401 19.4 16.8401 20.5 16.8401ZM20.5 18.8401C19.4 18.8401 18.5 19.7401 18.5 20.8401C18.5 21.9401 19.4 22.8401 20.5 22.8401C21.6 22.8401 22.5 21.9401 22.5 20.8401C22.5 19.7401 21.6 18.8401 20.5 18.8401ZM18.5 26.8401C18.5 25.7401 19.4 24.8401 20.5 24.8401C21.6 24.8401 22.5 25.7401 22.5 26.8401C22.5 27.9401 21.6 28.8401 20.5 28.8401C19.4 28.8401 18.5 27.9401 18.5 26.8401Z"
                fill="#74796D"
              />
            </g>
          </svg>
        </div>
      </div>

      <div className="py-4 flex justify-start items-center">
        <span className="text-xl font-semibold text-gray-600 mr-2">19</span>
        <span className="text-gray-500 text-sm">Chat Sessions</span>
      </div>

      <Link href="/chat/:agent-id:/:session-id:">
        <Button className="w-28">
          <span className="font-semibold">Open</span>
        </Button>
      </Link>
    </div>
  );
};

export default AgentCard;
