import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format numeric value to Indian Rupee (INR) currency representation (e.g. ₹599, ₹1,000)
 */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format duration in minutes into a clean human string (e.g. "60 mins" or "1 hr 30 mins")
 */
export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} mins`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMins = minutes % 60;
  if (remainingMins === 0) {
    return `${hours} hr${hours > 1 ? "s" : ""}`;
  }
  return `${hours} hr ${remainingMins} mins`;
}

/**
 * Generate a unique random booking reference ID (e.g. "IMB-7K9A2P")
 */
export function generateBookingReference(): string {
  const chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
  let result = "IMB-";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
