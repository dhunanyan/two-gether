import { defineQuery } from "next-sanity";

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(`
  *[_type == "author" && id == $id][0] {
    _id,
    id,
    name,
    username,
    email,
    image,
    bio
  }`);

export const AUTHOR_BY_ID_QUERY = defineQuery(`
  *[_type == "author" && _id == $id][0] {
    _id,
    id,
    name,
    username,
    email,
    image,
    bio
  }`);

export const LOCALS_BY_AUTHOR_QUERY = defineQuery(`
    *[_type == "local" && author._ref == $id] | order(_createdAt desc) {
     _id,
    _createdAt,
    type,
    slug,
    image,
    title,
    rating,
    description,
    categories,
    author -> {
      _id,
      name,
      username,
      image,
      bio
    }
  }`);
