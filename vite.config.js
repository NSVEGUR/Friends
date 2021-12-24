import { resolve } from 'path';
import { defineConfig } from "vite";

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
	root,
	build: {
		outDir,
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: resolve(root, 'index.html'),
				apartment: resolve(root, 'apartment', 'index.html'),
				weirdone: resolve(root, 'weirdone', 'index.html'),
				lobsters: resolve(root, 'lobsters', 'index.html'),
				foodie: resolve(root, 'foodie', 'index.html'),
				centralperk: resolve(root, 'centralperk', 'index.html'),
				thanksgiving: resolve(root, 'thanksgiving', 'index.html'),
				seasons: resolve(root, 'seasons', 'index.html'),
				mondler: resolve(root, 'mondler', 'index.html'),
			}
		}
	}
})