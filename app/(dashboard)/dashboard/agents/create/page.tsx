import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full">
      <div className="text-sm font-medium">Agent Name</div>
      <Input
        type="text"
        name="agent_name"
        className="w-[300px] mt-2 mb-4"
        placeholder="Writer, Scientist"
      />
      <Link href="create/select_database">
        <Button className="font-semibold">Continue</Button>
      </Link>
    </div>
  );
};

export default Page;
