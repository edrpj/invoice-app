/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class',
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
        "secondary-600": "#373B53",
        "tertiary-800": "#EC5757",
        "tertiary-300": "#FF9797",
        light: "#F8F8FB",
        'light-secondary': "#F9FAFE",
        "dark-900": "#0C0E16",
        "dark-800": "#141625",
        "brand-blue-900": "#292C44",
        "brand-blue-800": "#7E88C3",
        "brand-blue-300": "#DFE3FA",
        "brand-gray": "#888EB0",
        "brand-green-100": "#F3FDFA",
        "brand-green-600": "#33D69F",
        "brand-green-900": "#1F2B3F",
        "brand-orange-100": "#FFF9F0",
        "brand-orange-600": "#FF8F00",
        "brand-orange-900": "#2B2736",
        "brand-gray-200": "#F4F4F5",
      },
    },
  },
  plugins: [],
};
