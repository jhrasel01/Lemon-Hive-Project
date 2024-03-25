/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mob: "300px",
        // => @media (min-width: 640px) { ... }

        tab: "550px",
        // => @media (min-width: 768px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1500px",
        // => @media (min-width: 1536px) { ... }
      },
      container: {
        center: true,
      },
      colors: {
        "primary-color": "#FFC93E",
        "secondary-color": "#111D5E",
        "custom-blue-color": "#2563EB",

        "custom-gray-color": "#617187",
        "custom-gray-color2": "#F9FAFB",
        "custom-gray-color3": "#CDCDCD",
      },
    },
  },
  plugins: [],
};
