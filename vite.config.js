import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 중요: 저장소 이름인 Artd-Web을 앞뒤에 슬래시와 함께 넣으세요.
  base: '/Artd-Web/', 
})