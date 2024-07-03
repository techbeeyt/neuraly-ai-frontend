"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import { useSession } from "next-auth/react";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const query = useSearchParams();
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      if (query.get("redirect")) {
        redirect(query.get("redirect")!);
      } else {
        redirect("/dashboard");
      }
    }
  }, [query, status]);

  if (status === "loading") {
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

  return <div>{children}</div>;
};

export default AuthWrapper;
