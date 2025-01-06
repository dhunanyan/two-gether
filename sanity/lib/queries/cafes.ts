import { defineQuery } from "next-sanity";

export const CAFES_QUERY = defineQuery(`
*[_type == "local" && type == "cafe" && 
  ((defined(slug.current) && !defined($search)) || 
  (title match $search || categories match $search || author->name match $search))] | order(_createdAt desc) {
  _id,
  type,
  image,
  title,
  categories,
  rating
}`);

// export const CAFES_QUERY = defineQuery(`
//   *[_type == "local" && type == "cafe" &&
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
