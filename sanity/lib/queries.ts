import { defineQuery } from "next-sanity";

export const LOCALS_QUERY = defineQuery(`
*[_type == "local" && ((defined(slug.current) && !defined($search)) || (title match $search || categories match $search || author->name match $search))] | order(_createdAt desc) {
  _id,
  _createdAt,
  type,
  slug,
  image,
  title,
  rating,
  description,
  categories
}`);

export const LOCAL_BY_ID_QUERY = defineQuery(`
*[_type == "local" && _id == $id][0] {
  _id,
  _createdAt,
  title,
  slug,
  author -> {
    _id,
    name,
    username,
    image,
    bio
  },
  rating,
  description,
  categories,
  image,
  pitch
}`);

export const LOCAL_RATING_QUERY = defineQuery(`
*[_type == "local" && _id == $id][0] {
  _id,
  rating
}`);

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
  title,
  slug,
  _createdAt,
  author -> {
    _id,
    name,
    image,
    bio
  },
  rating,
  description,
  categories,
  image
}`);
