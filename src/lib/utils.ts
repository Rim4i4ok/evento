import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export function sleep(ms: number = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function capitalize(str: string) {
  return `${str.charAt(0).toLocaleUpperCase() + str.slice(1)}`;
}
