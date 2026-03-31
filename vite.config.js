import { defineConfig } from 'vite'
import react from '@vitejs/react-vite' // 또는 @vitejs/plugin-react

export default defineConfig({
  plugins: [react()],
  base: '/', // 이 줄이 핵심입니다! 경로를 루트로 고정해 줍니다.
})