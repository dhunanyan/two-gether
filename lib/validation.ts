import { z } from "zod";

export const formSchema = z.object({
  type: z.string().refine((val) => val === "cafe" || val === "restaurant", {
    message: "Type must be 'Cafe' or 'Restaurant'",
  }),
  title: z
    .string()
    .min(3, { message: "Title must contain at least 3 chars" })
    .max(100, { message: "Title must contain up to 100 chars" }),
  description: z
    .string()
    .min(20, { message: "Description must contain at least 20 chars" })
    .max(500, { message: "Description must contain up to 500 chars" }),
  categories: z
    .array(z.enum(["new-school", "old-school", "smoke-inside", "with-garden"]))
    .min(1, { message: "At least one category must be selected" }),
  address: z
    .string()
    .max(200, { message: "Address must contain up to 100 chars" }),
  phone: z
    .string()
    .max(100, { message: "Phone number must contain up to 100 chars" }),
  image: z
    .string()
    .refine(
      (val) =>
        /^data:image\/(png|jpeg|jpg|gif);base64,[A-Za-z0-9+/=]+$/.test(val),
      {
        message: "Invalid Base64 image string",
      }
    ),
});
