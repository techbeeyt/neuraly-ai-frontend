"use client";

import RegisterForm from "@/components/auth/register-form";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <div className="min-w-screen h-screen bg-white">
      <div className="w-full flex flex-col lg:flex-row h-full items-center">
        <div className="lg:w-1/2 w-full h-full flex flex-col justify-end relative">
          <div className="w-full pt-10 h-full flex items-center justify-center overflow-y-auto">
            <div className="flex flex-col justify-center items-center w-[360px]">
              <h1 className="w-full text-[28px] font-semibold text-start mb-2">
                Sign Up
              </h1>

              <h5 className="w-full text-start text-[16px] text-[#475467] mb-6">
                Start your 30-day free trial.
              </h5>

              <Suspense fallback={null}>
                <RegisterForm />
              </Suspense>
            </div>
          </div>
          <div className="2xl:px-5 p-3 flex flex-col lg:flex-row lg:justify-between justify-center items-center gap-2">
            <p className="text-sm">
              &copy; Neuraly Ai {new Date().getFullYear()}
            </p>
            <a
              href="mailto:help@kickscrapper.com"
              className="flex items-center gap-1 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              help@kickscrapper.com
            </a>
          </div>
        </div>
        <div className="lg:flex hidden lg:w-1/2 lg:h-full bg-[url('/images/backgrounds/register-page-bg-img.svg')] bg-no-repeat bg-cover bg-top items-center justify-center"></div>
      </div>
    </div>
  );
};

export default Page;
