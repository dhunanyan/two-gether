import { type SchemaTypeDefinition } from "sanity";
import { author } from "./author";
import { local } from "./local";
import { category } from "./category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, local, category],
};
