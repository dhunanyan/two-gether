import { type SchemaTypeDefinition } from "sanity";
import { author } from "./author";
import { cafe } from "./cafe";
import { category } from "./category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, cafe, category],
};
