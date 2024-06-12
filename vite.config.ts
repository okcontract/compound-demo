import { svelte } from "@sveltejs/vite-plugin-svelte";
import react from "@vitejs/plugin-react";
import preprocess from "svelte-preprocess";
import { defineConfig } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";
import wasm from "vite-plugin-wasm";

export default defineConfig({
	plugins: [
		topLevelAwait(),
		wasm(),
		svelte({
			preprocess: [preprocess({ postcss: true })],
		}),
		react(),
	],
	server: {
		port: 5000,
		fs: {
			allow: [".."],
		},
	},
	preview: {
		port: 5000,
	},
});
