/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // 파일 경로를 프로젝트 구조에 맞게 수정
  theme: {
    extend: {
      fontFamily: {
        // NanumSquare 폰트
        nanumSquareB: ['NanumSquareB', 'sans-serif'],
        nanumSquareEB: ['NanumSquareEB', 'sans-serif'],
        nanumSquareL: ['NanumSquareL', 'sans-serif'],
        nanumSquareR: ['NanumSquareR', 'sans-serif'],
        // NanumSquareRound 폰트
        nanumSquareRoundB: ['NanumSquareRoundB', 'sans-serif'],
        nanumSquareRoundEB: ['NanumSquareRoundEB', 'sans-serif'],
        nanumSquareRoundL: ['NanumSquareRoundL', 'sans-serif'],
        nanumSquareRoundR: ['NanumSquareRoundR', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
