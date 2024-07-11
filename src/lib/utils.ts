import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function calculateDiscount(originalPrice: number, discountPercentage: number): number {
  if (originalPrice < 0 || discountPercentage < 0 || discountPercentage > 100) {
    throw new Error("Invalid input: original price and discount percentage must be positive, and discount percentage must be between 0 and 100.");
  }

  const discountAmount = (originalPrice * discountPercentage) / 100;
  const discountedPrice = originalPrice - discountAmount;

  return discountedPrice;
}