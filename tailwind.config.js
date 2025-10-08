/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FDF2F2",
          100: "#FDE8E8",
          200: "#FBD5D5",
          300: "#F8B4B4",
          400: "#F98080",
          500: "#F05252",
          600: "#E02424",
          700: "#C81E1E",
          800: "#9B1C1C",
          900: "#771D1D",
        },
        success: "#16a34a",
        warning: "#f59e0b",
        danger: "#dc2626",
        neutral: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5f5",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
    },
  },
  plugins: [],
};
