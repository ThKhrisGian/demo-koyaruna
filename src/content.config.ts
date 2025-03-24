import { defineCollection, z } from "astro:content";

import { glob, file } from 'astro/loaders';

const productos = defineCollection({});
const servicios = defineCollection({});

export const collections = {productos, servicios};