import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
  ],

  theme: {
    screens: {
      xs: "425px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        magic: {
          50: "#fcf3f6",
          100: "#fae9f0",
          200: "#f7d3e1",
          300: "#f1b0c9",
          400: "#e87ea4",
          500: "#dc5884",
          600: "#ca3862",
          700: "#ae2849",
          800: "#90243e",
          900: "#792237",
          950: "#490e1c",
        },

        "magic-text-dark": "#27272a",

        // primaryColor: "#cc3f65",
        // secondColor: "#0044b4",
        // yellowRegilet: "#ff960c",
        // blueRegilet: "#77c8e5",
        // greenRegilet: "#71b024",
        // roseRegilet: "#eb008b",
        // blurRose: "rgba(170, 9, 81, 0.73)",
      },
      backgroundImage: {
        texture: "url('/public/images/utils/texture.svg')",
        Slide1: "url('/public/images/slides/slide_1.png')",
        Slide2: "url('/public/images/slides/slide_2.png')",
        Slide3: "url('/public/images/slides/slide_3.png')",
        // Slides - Nosotros
        Slide4: "url('/public/images/slides/slide_4.jpg')",
        Slide5: "url('/public/images/slides/slide_5.jpg')",
        Slide6: "url('/public/images/slides/slide_6.jpg')",
      },
      keyframes: {
        change: {
          "0%": { marginLeft: "0" },
          "20%": { marginLeft: "0" },
          "25%": { marginLeft: "-100%" },
          "45%": { marginLeft: "-100%" },
          "50%": { marginLeft: "-200%" },
          "70%": { marginLeft: "-200%" },
          "75%": { marginLeft: "-300%" },
          "100%": { marginLeft: "-300%" },
        },
      },
      animation: {
        change: "change 20s infinite alternate linear",
      },
    },
  },

  plugins: [forms],
};
