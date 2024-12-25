import { Local } from "@/sanity/types";
import { Categories, LocalType, Stars } from "./constants";
import { Icons } from "./icons";

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDateAndTime(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
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
    case Categories.GREEN:
      return "Green";
  }
}

export function isInt(n: number): boolean {
  return Number(n) === n && n % 1 === 0;
}

export function isFloat(n: number): boolean {
  return Number(n) === n && n % 1 !== 0;
}

export function parseRatingToValue(rating: Local["rating"]): number {
  return rating && rating?.length !== 0
    ? rating.reduce((a, r) => a + (r?.value || 0), 0) / rating.length
    : 0;
}

export function parseRatingToStars(value: number): Stars[] {
  return [
    ...Array(Math.floor(value)).fill(Stars.ACTIVE),
    ...(isFloat(value) ? [Stars.HALF] : []),
    ...Array(5 - Math.floor(value) - Number(isFloat(value))).fill(
      Stars.DISABLED
    ),
  ];
}

export function reverseBackRatingIndex(index: number): number {
  switch (index) {
    case 1:
      return 5;
    case 2:
      return 4;
    case 3:
      return 3;
    case 4:
      return 2;
    case 5:
      return 1;
    default:
      return 0;
  }
}

export function getRatingIndexMessageBoxText(index: number) {
  switch (index) {
    case 1:
      return "Very Bad";
    case 2:
      return "Bad";
    case 3:
      return "Meh";
    case 4:
      return "Good";
    case 5:
      return "Very Good!";
    default:
      return null;
  }
}

export function getLocalTypeDisplayText(type: LocalType) {
  switch (type) {
    case LocalType.RESTAURANT:
      return "Restaurant";
    case LocalType.CAFE:
      return "Cafe";
    default:
  }
}

export function getLocalTypeRoute(type: LocalType) {
  switch (type) {
    case LocalType.CAFE:
      return "cafes";
    case LocalType.RESTAURANT:
      return "restaurants";
  }
}

export function getCategoryIcon(category: Categories) {
  switch (category) {
    case Categories.GREEN:
      return Icons.Tree;
    case Categories.NEW_SCHOOL:
      return Icons.Diamond;
    case Categories.OLD_SCHOOL:
      return Icons.Castle;
    case Categories.SMOKE_INSIDE:
      return Icons.Cigarette;
    case Categories.WITH_GARDEN:
      return Icons.Fence;
  }
}
