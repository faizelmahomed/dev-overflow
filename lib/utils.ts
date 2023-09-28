import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const secondsPast = (now.getTime() - createdAt.getTime()) / 1000;

  if (secondsPast < 60) {
    return `${Math.round(secondsPast)} seconds ago`;
  }
  if (secondsPast < 3600) {
    return `${Math.round(secondsPast / 60)} minutes ago`;
  }
  if (secondsPast <= 86400) {
    return `${Math.round(secondsPast / 3600)} hours ago`;
  }
  if (secondsPast <= 604800) {
    const days = Math.round(secondsPast / 86400);
    return `${days} days ago`;
  }
  if (secondsPast <= 2419200) {
    const weeks = Math.round(secondsPast / 604800);
    return `${weeks} weeks ago`;
  }
  if (secondsPast <= 29030400) {
    const months = Math.round(secondsPast / 2419200);
    return `${months} months ago`;
  }
  const years = Math.round(secondsPast / 31536000); // 31536000 seconds in a year
  return `${years} years ago`;
};

export const formatAndDivideNumber = (num: number): string => {
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)}M`;
  } else if (num >= 1_000) {
    return `${(num / 1_000).toFixed(1)}K`;
  }
  return num.toString();
};
