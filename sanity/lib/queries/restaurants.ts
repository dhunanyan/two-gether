import { defineQuery } from "next-sanity";

export const RESTAURANTS_QUERY = defineQuery(`
*[_type == "local" && type == "restaurant" && 
  ((defined(slug.current) && !defined($search)) || 
  (title match $search || categories match $search || author->name match $search))] | order(_createdAt desc) {
  _id,
  type,
  image,
  title,
  categories,
  rating
}`);

// export const RESTAURANTS_QUERY = defineQuery(`
//   *[_type == "local" && type == "restaurant" &&
//     ((defined(slug.current) && !defined($search)) ||
//     (title match $search || categories match $search || author->name match $search)) &&
//     (!$categories || $categories all categories)
//   ] | order(_createdAt desc) {
//     _id,
//     type,
//     image,
//     title,
//     categories,
//     rating
//   }`);
