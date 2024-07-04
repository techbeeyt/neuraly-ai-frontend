"use client";

import React, { useEffect, useState } from "react";
import StepsItem from "./steps-item";
import { usePathname } from "next/navigation";

const StepsContainer = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("create");

  useEffect(() => {
    const currentPath = pathname.split("/")[pathname.split("/").length - 1];
    setCurrentPath(currentPath);
  }, [pathname]);

  return (
    <div className="flex flex-col gap-4">
      {/* Steps are arranged in column here */}
      <StepsItem
        title="Agent Name"
        status={currentPath === "create" ? "current" : "done"}
      />
      <StepsItem
        title="Select Database"
        status={
          currentPath === "select_database"
            ? "current"
            : currentPath === "create"
            ? "todo"
            : "done"
        }
      />
      <StepsItem
        title="Start Chat"
        status={currentPath === "setting_up" ? "current" : "todo"}
        isLastStep={true}
      />
    </div>
  );
};

export default StepsContainer;
