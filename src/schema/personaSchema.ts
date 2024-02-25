import { any } from "astro/zod";
import { defineCollection, z } from "astro:content";

export const personaCollection = defineCollection({
    type: "content",
    schema: {
        name: z.string(),
        title: z.string(),
        from: z.string(),
        img: any(),
    }
});