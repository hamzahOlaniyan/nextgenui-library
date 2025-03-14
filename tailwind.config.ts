import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */

export default {
  //   prefix: "ng-", // Adds "ng-" prefix to all Tailwind classes
  //   important: ".ng", // Ensures Tailwind styles work inside a parent ".ng" div
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,ts,jsx,tsx,mdx}",
  ], // Ensure it scans all files
  theme: {
    extend: {
      colors: {
        primary: colors.cyan,
      },
    },
  },
  plugins: [],
  //   corePlugins: {
  //     preflight: true, // Prevents Tailwind from resetting global styles
  //   },
};
