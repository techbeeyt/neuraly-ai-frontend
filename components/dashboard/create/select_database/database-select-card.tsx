import { Button } from "@/components/ui/button";
import React from "react";

const DatabaseSelectCard = ({
  id = "database",
  select_name = "database",
  name = "Name of Database",
  table_count = 0,
  row_count = 0,
}: {
  select_name?: string;
  id?: string;
  name?: string;
  table_count?: number;
  row_count?: number;
}) => {
  return (
    <div className={`bg-gray-200 w-full rounded-3xl px-5 py-6`}>
      <div className="flex justify-between items-start gap-2">
        <h1 className="font-medium">{name}</h1>
        <div>
          <input
            type="radio"
            name={select_name}
            id={id}
            className="accent-gray-700 h-4 w-4"
          />
        </div>
      </div>

      <div className="flex justify-start items-center flex-wrap gap-y-4 gap-x-6 py-4">
        <div className="flex justify-center items-center">
          <span className="text-xl font-semibold text-gray-600 mr-2">
            {table_count}
          </span>
          <span className="text-gray-500 text-sm">Tables</span>
        </div>

        <div className="flex justify-center items-center">
          <span className="text-lg font-semibold text-gray-600 mr-2">
            {row_count}
          </span>
          <span className="text-gray-500 text-sm">Rows</span>
        </div>
      </div>
    </div>
  );
};

export default DatabaseSelectCard;
