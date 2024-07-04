"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/chat");
    }, 2000);
  }, [router]);
  return (
    <div className="fixed inset-0 z-20 bg-black/10 flex justify-center items-center">
      <div className="bg-white w-[240px] h-[140px] rounded-md flex justify-center items-center flex-col gap-4">
        <Player
          autoplay
          loop
          src="/lottie/loader.json"
          style={{ height: "50px", width: "50px" }}
        />

        <div className="text-gray-500 text-sm">Setting up agent...</div>
      </div>
    </div>
  );
};

export default Page;
