import { defineConfig } from 'vite'; // Vite의 구성 설정을 위한 함수 import
import react from '@vitejs/plugin-react'; // Vue 등 다른 프레임워크는 바꿔주세요
import path from 'path'; // Node.js의 경로 관련 유틸리티를 제공하는 path 모듈 (절대 경로 생성에 필요)
import { fileURLToPath } from 'url'; // ES Module 환경에서는 __dirname이 없기 때문에 URL 기반 파일 경로를 얻기 위해 사용

// ES Module 환경에서는 __dirname이 없기 때문에 URL 기반 파일 경로를 얻기 위해 사용
// ES Module(ESM)은 **ECMAScript(자바스크립트 표준)**에서 정의한 공식 모듈 시스템입니다
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Vite 설정을 내보냄
export default defineConfig({
   // 사용할 Vite 플러그인을 정의 (React 프로젝트이므로 react() 사용)
  plugins: [react()],

  // 모듈 해석 관련 설정 (import 시 경로 처리 방식 지정)
  // 특정 경로에 접근시, 이설정을 안하면, 이런 형식으로 사용해야함. ../../../../../
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // @는 src/ 폴더로 연결
    },
  },
});