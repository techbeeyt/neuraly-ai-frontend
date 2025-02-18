import AgentCard from "@/components/dashboard/agent-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="">
      <div className="p-6 border-b border-gray-200">
        <Link href="agents/create">
          <Button className="flex justify-center items-center gap-2 py-2">
            <span className="text-[16px] font-semibold">Create Agent</span>
            <svg
              width="23"
              height="23"
              viewBox="0 0 26 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.7125 1.03491C6.42467 1.03491 1.32739 6.13219 1.32739 12.42C1.32739 18.7078 6.42467 23.8051 12.7125 23.8051C19.0003 23.8051 24.0976 18.7078 24.0976 12.42C24.0976 6.13219 19.0003 1.03491 12.7125 1.03491ZM12.7125 7.24496C13.2841 7.24496 13.7475 7.70835 13.7475 8.27997V11.385H16.8525C17.4241 11.385 17.8875 11.8484 17.8875 12.42C17.8875 12.9916 17.4241 13.455 16.8525 13.455H13.7475V16.56C13.7475 17.1316 13.2841 17.595 12.7125 17.595C12.1409 17.595 11.6775 17.1316 11.6775 16.56V13.455H8.57245C8.00083 13.455 7.53744 12.9916 7.53744 12.42C7.53744 11.8484 8.00083 11.385 8.57245 11.385H11.6775V8.27997C11.6775 7.70835 12.1409 7.24496 12.7125 7.24496Z"
                fill="white"
              />
            </svg>
          </Button>
        </Link>
      </div>

      <div className="px-6 pt-6">
        <h1 className="text-xl font-semibold">Agents</h1>
      </div>
      <div className="p-6 grid 3xl:grid-cols-5 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {Array.from({ length: 5 }).map((item, index) => {
          return <AgentCard key={`card-${index}`} />;
        })}
      </div>
    </div>
  );
};

export default Page;
