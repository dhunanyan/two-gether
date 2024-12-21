import { defineField, defineType } from "sanity";

export const local = defineType({
  name: "local",
  title: "Local",
  type: "document",
  fields: [
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      validation: (Rule) =>
        Rule.required().custom((value) =>
          value && ["cafe", "restaurant"].includes(value)
            ? true
            : "Type must be either 'Cafe' or 'Restaurant'."
        ),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "text",
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string", name: "category", title: "Category" }],
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
