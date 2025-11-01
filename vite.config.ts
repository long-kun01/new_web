import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/dejiuweb/',   // 你的仓库名，必须以 / 开头、/ 结尾
  plugins: [react()],
  build: {
    outDir: 'docs'      // 让打包产物输出到 docs 目录
  }
})
