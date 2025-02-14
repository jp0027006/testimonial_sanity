import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "mg60n7kx",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});