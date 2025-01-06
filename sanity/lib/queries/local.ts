import { defineQuery } from "next-sanity";

export const LOCAL_DETAILS = defineQuery(`
*[_type == "local" && _id == $id][0] {
  _id,
  type,
  slug,
  image,
  title,
  phone,
  rating,
  address,
  isVisited,
  _createdAt,
  _updatedAt,
  categories,
  description,
  author -> {
    _id,
    bio,
    name,
    image,
    email,
    username
  }
}`);

export const LOCAL_RATING_QUERY = defineQuery(`
*[_type == "local" && _id == $_id][0] {
  _id,
  rating
}`);
