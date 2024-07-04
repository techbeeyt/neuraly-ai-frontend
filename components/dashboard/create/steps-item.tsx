import React from "react";

type StepStatus = "current" | "done" | "todo";

const StepsItem = ({
  status = "todo",
  title = "Title Goes Here",
  isLastStep = false,
}: {
  status?: StepStatus;
  title?: string;
  isLastStep?: boolean;
}) => {
  return (
    <div className="h-[160px]">
      <div className="flex justify-start items-center gap-4">
        <div
          className={`relative ${
            status === "current" ? "ring-4 ring-[#c7ecdb]" : ""
          } rounded-full`}
        >
          {status === "current" ? (
            <svg
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 20C1.5 9.50659 10.0066 1 20.5 1C30.9934 1 39.5 9.50659 39.5 20C39.5 30.4934 30.9934 39 20.5 39C10.0066 39 1.5 30.4934 1.5 20Z"
                fill="black"
              />
              <path
                d="M1.5 20C1.5 9.50659 10.0066 1 20.5 1C30.9934 1 39.5 9.50659 39.5 20C39.5 30.4934 30.9934 39 20.5 39C10.0066 39 1.5 30.4934 1.5 20Z"
                stroke="black"
                strokeWidth="2"
              />
              <circle cx="20.5" cy="20" r="6" fill="white" />
            </svg>
          ) : null}

          {status === "todo" ? (
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_12102_2070)">
                <path
                  d="M0.5 20.3333C0.5 9.28756 9.45431 0.333252 20.5 0.333252C31.5457 0.333252 40.5 9.28756 40.5 20.3333C40.5 31.3789 31.5457 40.3333 20.5 40.3333C9.45431 40.3333 0.5 31.3789 0.5 20.3333Z"
                  fill="#F9FAFB"
                />
                <path
                  d="M1.5 20.3333C1.5 9.83984 10.0066 1.33325 20.5 1.33325C30.9934 1.33325 39.5 9.83984 39.5 20.3333C39.5 30.8267 30.9934 39.3333 20.5 39.3333C10.0066 39.3333 1.5 30.8267 1.5 20.3333Z"
                  stroke="#EAECF0"
                  strokeWidth="2"
                />
                <circle cx="20.5" cy="20.3333" r="6" fill="#D0D5DD" />
              </g>
              <defs>
                <clipPath id="clip0_12102_2070">
                  <path
                    d="M0.5 20.3333C0.5 9.28756 9.45431 0.333252 20.5 0.333252C31.5457 0.333252 40.5 9.28756 40.5 20.3333C40.5 31.3789 31.5457 40.3333 20.5 40.3333C9.45431 40.3333 0.5 31.3789 0.5 20.3333Z"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          ) : null}

          {status === "done" ? (
            <svg
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_12102_2052)">
                <path
                  d="M0.5 20C0.5 8.95431 9.45431 0 20.5 0C31.5457 0 40.5 8.95431 40.5 20C40.5 31.0457 31.5457 40 20.5 40C9.45431 40 0.5 31.0457 0.5 20Z"
                  fill="white"
                />
                <path
                  d="M1.5 20C1.5 9.50659 10.0066 1 20.5 1C30.9934 1 39.5 9.50659 39.5 20C39.5 30.4934 30.9934 39 20.5 39C10.0066 39 1.5 30.4934 1.5 20Z"
                  fill="black"
                />
                <path
                  d="M1.5 20C1.5 9.50659 10.0066 1 20.5 1C30.9934 1 39.5 9.50659 39.5 20C39.5 30.4934 30.9934 39 20.5 39C10.0066 39 1.5 30.4934 1.5 20Z"
                  stroke="black"
                  strokeWidth="2"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M28.9939 12.3168L17.0606 23.8334L13.8939 20.4501C13.3106 19.9001 12.3939 19.8668 11.7273 20.3334C11.0773 20.8168 10.8939 21.6668 11.2939 22.3501L15.0439 28.4501C15.4106 29.0168 16.0439 29.3668 16.7606 29.3668C17.4439 29.3668 18.0939 29.0168 18.4606 28.4501C19.0606 27.6668 30.5106 14.0168 30.5106 14.0168C32.0106 12.4834 30.1939 11.1334 28.9939 12.3001V12.3168Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_12102_2052">
                  <path
                    d="M0.5 20C0.5 8.95431 9.45431 0 20.5 0C31.5457 0 40.5 8.95431 40.5 20C40.5 31.0457 31.5457 40 20.5 40C9.45431 40 0.5 31.0457 0.5 20Z"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          ) : null}

          {isLastStep ? null : (
            <div
              className={`absolute top-[112%] left-1/2 -translate-x-1/2 h-[125px] w-[2px] rounded-full ${
                status === "done" ? "bg-black" : "bg-[#D0D5DD]"
              }`}
            ></div>
          )}
        </div>
        <div
          className={`font-semibold ${
            status === "todo" ? "text-gray-500" : "text-black"
          }`}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default StepsItem;
