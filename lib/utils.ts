import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function emailReducer(email: string, maxLength: number = 20) {
  const domainLength = email.split("@")[1].length + 3;

  const processedEmail = email
    .split("@")[0]
    .slice(0, maxLength - domainLength)
    .concat("...@")
    .concat(email.split("@")[1]);

  return processedEmail;
}
