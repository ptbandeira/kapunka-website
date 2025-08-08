import { defineConfig } from "astro/config";
import react from "@astrojs/renderer-react";

// Astro configuration for the Kapunka site
// This configuration enables the React renderer so we can use React components
// (such as the Three.js scene) within Astro pages. The site builds as static
// output, which is perfect for Netlify deployments.
export default defineConfig({
  integrations: [react()],
  output: "static",
});
