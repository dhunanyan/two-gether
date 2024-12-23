import { Local } from "@/sanity/types";
import { Categories, Stars } from "./constants";

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function parseServerActionResponse<T>(response: T) {
  return JSON.parse(JSON.stringify(response));
}

export async function convertToBase64(image: Blob): Promise<string> {
  return await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(image);
  });
}

export function parseCategory(category: Categories): string {
  switch (category) {
    case Categories.NEW_SCHOOL:
      return "New School";
    case Categories.OLD_SCHOOL:
      return "Old School";
    case Categories.SMOKE_INSIDE:
      return "Smoke Inside";
    case Categories.WITH_GARDEN:
      return "With Garden";
  }
}

export function isInt(n: number): boolean {
  return Number(n) === n && n % 1 === 0;
}

export function isFloat(n: number): boolean {
  return Number(n) === n && n % 1 !== 0;
}

export function parseRating(rating: Local["rating"]): number {
  return rating && rating?.length !== 0
    ? rating.reduce((a, r) => a + (r?.value || 0), 0) / rating.length
    : 0;
}

export function parseFromRatingToStars(value: number): Stars[] {
  return [
    ...Array(Math.floor(value)).fill(Stars.ACTIVE),
    ...(isFloat(value) ? [Stars.HALF] : []),
    ...Array(5 - Math.floor(value) - Number(isFloat(value))).fill(
      Stars.DISABLED
    ),
  ];
}
