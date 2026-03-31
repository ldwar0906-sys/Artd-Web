import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 중요: 본인의 저장소 이름인 'Artd-Web'을 앞뒤에 슬래시(/)를 붙여서 넣으세요.
  base: '/Artd-Web/', 
})