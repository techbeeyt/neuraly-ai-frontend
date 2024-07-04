import DatabaseSelectCard from "@/components/dashboard/create/select_database/database-select-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="w-full pr-4">
      <div className="text-sm font-medium">Select Database</div>
      <div className="mt-6 mb-4 grid grid-cols-3 gap-4 max-w-[868px]">
        {Array.from({ length: 13 }).map((item, index) => {
          return <DatabaseSelectCard key={index} />;
        })}
      </div>
      <div className="pb-8">
        <Link href="setting_up">
          <Button className="font-semibold">Start Chat Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
