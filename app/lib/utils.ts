import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getKey(boards: Record<string, string>, board: string): string {
  let result = ""
  for (const key in boards) {
    if (board === boards[key]) {
      const result = key
      return result
    }
  }
  return result
}
