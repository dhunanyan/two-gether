import { Categories } from "./constants";

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

export async function convertToBase64(image: Blob) {
  return await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(image);
  });
}

export function parseCategory(category: Categories) {
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
