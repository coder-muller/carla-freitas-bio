import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Clamped linear map from one range to another. */
export function mapRange(value: number, [inMin, inMax]: [number, number], [outMin, outMax]: [number, number]) {
  const progress = Math.min(1, Math.max(0, (value - inMin) / (inMax - inMin)))
  return outMin + (outMax - outMin) * progress
}
