import { defineCollection, z } from "astro:content";

// Post collection schema
const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date().optional(),
    draft: z.boolean().optional(),
    image: z.string().optional(),
    categories: z.array(z.enum(["Vorspeise", "Hauptgericht", "Nachspeise"])),
    tags: z.array(
      z.enum([
        "einfach",
        "schnell",
        "herzhaft",
        "süß",
        "vegan",
        "vegetarisch",
        "lowcarb",
        "Gemüse",
        "Fleisch",
        "Fisch",
        "Salat",
        "Reis",
        "Pasta",
        "Frühling",
        "Sommer",
        "Herbst",
        "Winter",
      ])
    ),
    preptime: z.string(),
    effort: z.string(),
    servings: z.number().int(),
    ingredients: z
      .array(
        z.object({
          title: z.string(),
          amount: z.any(),
          unit: z.any().optional(),
        })
      )
      .optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  posts: postsCollection,
  pages: pagesCollection,
};
