import { defineCollection, z } from "astro:content";

const productos = defineCollection({
    schema: z.object({
        title: z.string(),
        detail: z.string(),
        img: z.string(),
        destacado: z.boolean(),
    })
});
const servicios = defineCollection({
    schema: z.object({
        title: z.string(),
        detail: z.string(),
        img: z.string(),
        destacado: z.boolean(),
    })
});

export const collections = {productos, servicios};