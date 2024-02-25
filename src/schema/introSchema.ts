import { defineCollection, z } from "astro:content";

export const introCollection = defineCollection({
    type: "content",
    schema: {
        sort: z.number()
    }
})