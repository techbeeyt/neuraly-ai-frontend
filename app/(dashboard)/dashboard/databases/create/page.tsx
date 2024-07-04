import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="bg-slate-50 h-[calc(100vh-72px)] flex justify-center items-start">
      <div className="w-[700px] p-10">
        <button className="bg-white border-2 border-gray-500 font-semibold rounded-md px-4 py-1.5 flex justify-center items-center gap-2">
          <span>Continue Table</span>
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
        <div className="my-6">
          <h1 className="font-medium">Continue by CSV file</h1>

          <div className="w-full bg-white h-[140px] mt-2 border-2 border-dashed border-gray-500 rounded-md flex justify-center items-center">
            <span className="text-gray-600">Drop CSV file here or Browse</span>
          </div>
        </div>
        <div>
          <h1 className="font-medium">Import From 3rd Party Sites</h1>

          <div className="mt-2 w-full grid grid-cols-4 gap-4">
            <div className="h-[130px] bg-white rounded-lg flex flex-col justify-center items-center gap-3 border border-gray-200">
              <Image
                src="/icons/brands/google-sheets.svg"
                width={60}
                height={60}
                alt="Google Sheets"
              />
              <div className="text-center">
                <h1 className="text-sm font-medium">Google Sheets</h1>
              </div>
            </div>

            <div className="h-[130px] bg-white rounded-lg flex flex-col justify-center items-center gap-3 border border-gray-200">
              <Image
                src="/icons/brands/airtable.svg"
                width={60}
                height={60}
                alt="Airtable"
              />
              <div className="text-center">
                <h1 className="text-sm font-medium">Airtable</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
