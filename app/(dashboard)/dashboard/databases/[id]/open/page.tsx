import { Button } from "@/components/ui/button";
import React from "react";

const Page = () => {
  return (
    <div className="bg-slate-50 h-[calc(100vh-72px)] p-6">
      <div className="mb-4">
        <span>Databases</span> <span>&gt;</span> <span>Dbname</span>
      </div>

      <div className="mb-2">
        <h1 className="text-lg font-semibold">Dbname</h1>
      </div>

      <div className="flex justify-start items-center gap-2 bg-white p-2 overflow-x-auto rounded-md mb-2">
        <div className="px-3 py-1.5 rounded-md border border-gray-200 shadow-md">
          Table 1
        </div>
        <div className="px-3 py-1.5 rounded-md border border-gray-200">
          Table 1
        </div>
        <div className="px-3 py-1.5 rounded-md border border-gray-200">
          Table 1
        </div>
        <div className="px-3 py-1.5 rounded-md border border-gray-200">
          Table 1
        </div>

        <Button className="px-3 py-1.5 rounded-md border border-gray-200">
          + Add Table
        </Button>
      </div>

      <div className="flex justify-start items-start gap-1">
        <div className="relative w-full h-[60vh] bg-gray-300 overflow-auto database-grid-container p-2 rounded">
          <table className="database-grid">
            <thead>
              <tr>
                <th></th>
                <th>Username</th>
                <th>Email</th>
                <th>Birthdate</th>
                <th>Last Active</th>
                <th>Current Address</th>
                <th>Permanant Address</th>
                <th>Skills</th>
                <th>Note</th>
              </tr>
            </thead>

            <tbody>
              {Array.from({ length: 267 }).map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>Username</td>
                    <td>Email</td>
                    <td>Birthdate</td>
                    <td>Last Active</td>
                    <td>Zia Hall, RUET, Rajshahi</td>
                    <td>Kazipur, Gangni, Meherpur</td>
                    <td>c++, js, typescript, golang</td>
                    <td>Nothing to say..............................</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="bg-white p-2 shadow-md border border-gray-200 rounded font-semibold text-sm whitespace-nowrap">
          + Add column
        </div>
      </div>
      <div className="bg-white w-[200px] flex justify-center items-center mt-1 p-2 shadow-md border border-gray-200 rounded font-semibold text-sm whitespace-nowrap">
        + Add Row
      </div>
    </div>
  );
};

export default Page;
