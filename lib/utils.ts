import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCreatedAt(date: string | Date): string {
  if (!date) return "Unknown date"; // Prevents errors
  const parsedDate = typeof date === "string" ? new Date(date) : date;
  if (isNaN(parsedDate.getTime())) return "Invalid date"; 
  return format(parsedDate, "MM dd, yyyy");
}

export function formatDayMonth(date: string | Date): string {
  if (!date) return "Unknown date";
  const parsedDate = typeof date === "string" ? new Date(date) : date;
  if (isNaN(parsedDate.getTime())) return "Invalid date";
  return format(parsedDate, "d MMM");
}

export const getRandomIndex = (length: number): Promise<number> => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(Math.floor(Math.random() * length));
      }, 60000); // 1-minute delay
  });
};

export const hexToRgb = (hex: string) => {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = hex.split("").map((char) => char + char).join("");
  }
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
};


