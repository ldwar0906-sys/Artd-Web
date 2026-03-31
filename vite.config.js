import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 깃허브 저장소 이름인 'Artd-Web'을 base 경로로 설정해야 
  // 배포 후 이미지와 스크립트가 정상적으로 불러와집니다.
  base: "/Artd-Web/",
})

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// https://vite.dev/config/
// export default defineConfig({
  // plugins: [react()],
// })
