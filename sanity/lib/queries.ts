import { defineQuery } from "next-sanity";

export const CAFES_QUERY = defineQuery(`
*[_type == "local" && type == "cafe" && ((defined(slug.current) && !defined($search)) || (title match $search || categories match $search || author->name match $search))] | order(_createdAt desc) {
  _id,
  type,
  image,
  title,
  categories,
  rating
}`);

export const RESTAURANTS_QUERY = defineQuery(`
*[_type == "local" && type == "restaurant" && ((defined(slug.current) && !defined($search)) || (title match $search || categories match $search || author->name match $search))] | order(_createdAt desc) {
  _id,
  type,
  image,
  title,
  categories,
  rating
}`);

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
