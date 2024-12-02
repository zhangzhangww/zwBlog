import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import * as path from 'path'

// https://vite.dev/config/
export default defineConfig({
	resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
			}
		},
		plugins: [
			vue(),
			AutoImport({
			  imports: ['vue', 'vue-router'],
			}),
			Components({
			  resolvers: [ElementPlusResolver({ ssr: false, directives: false })],
			  dirs: ['src/layout/components', 'src/components'],
			  dts: true,
			}),
		  ],
})
