import { Button } from "@/components/ui/button";
import React from "react";

const Page = () => {
  return (
    <div className="p-5">
      <div>
        <Button>Manage Subscriptions</Button>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className="bg-gray-200 w-full h-[130px]"></div>
      </div>
    </div>
  );
};

export default Page;
