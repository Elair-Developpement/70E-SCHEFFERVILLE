import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDayFromDate(date: string): string {
  const day = date.split("-").at(2);
  return day!;
}

export function getMonthFromDate(date: string): string {
  const month = date.split("-").at(1);
  return month!;
}
