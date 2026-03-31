import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 깃허브 .io 주소가 아니라 Vercel 주소를 쓸 거라면 아래처럼 '/'로 해야 합니다.
  base: '/', 
})