// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",           // 루트의 index.html
        "./src/**/*.{js,jsx,ts,tsx}" // src 폴더 아래 모든 JSX/TSX 등
    ],
    theme: { extend: {} },
    plugins: [],
};
