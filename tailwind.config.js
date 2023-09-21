/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      sans: ["League Spartan", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-800": "#7C5DFA",
        "primary-500": "#9277FF",
        "secondary-900": "#1E2139",
        "secondary-700": "#252945",
        "tertiary-800": "#EC5757",
        "tertiary-300": "#FF9797",
        light: "#F8F8FB",
        "dark-900": "#0C0E16",
        "dark-800": "#131625",
        "brand-blue-800": "#7E88C3",
        "brand-blue-300": "#DFE3FA",
        "brand-gray": "#888EB0",
      },
    },
  },
  plugins: [],
};
