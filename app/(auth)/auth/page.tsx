"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (router) {
      router.push("/auth/login");
    }
  }, [router]);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Player
        autoplay
        loop
        src="/lottie/loader.json"
        style={{ height: "50px", width: "50px" }}
      />
    </div>
  );
}
