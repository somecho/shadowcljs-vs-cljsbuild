import { defineConfig } from "vite";

export default defineConfig({
	optimieDeps: {
		include: ['shadow']
	},
	build: {
		commonjsOptions: {
			include: [/shadow/,]
		}
	}
})
