import { type SchemaTypeDefinition } from "sanity";
import { author } from "./author";
import { local } from "./local";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, local],
};
