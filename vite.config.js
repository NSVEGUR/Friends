import { resolve } from 'path';
import { defineConfig } from "vite";

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');
const blogsDir = resolve(__dirname, 'src/blogs')

export default defineConfig({
	root,
	build: {
		outDir,
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: resolve(root, 'index.html'),
				apartment: resolve(blogsDir, 'apartment', 'index.html'),
				weirdone: resolve(blogsDir, 'weirdone', 'index.html'),
				lobsters: resolve(blogsDir, 'lobsters', 'index.html'),
				foodie: resolve(blogsDir, 'foodie', 'index.html'),
				centralperk: resolve(blogsDir, 'centralperk', 'index.html'),
				thanksgiving: resolve(blogsDir, 'thanksgiving', 'index.html'),
				seasons: resolve(blogsDir, 'seasons', 'index.html'),
				mondler: resolve(blogsDir, 'mondler', 'index.html'),
			}
		}
	}
})