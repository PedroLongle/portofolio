import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Shadcn/ui
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}