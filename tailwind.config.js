import withMT from "@material-tailwind/react/utils/withMT";
/** @type {import('tailwindcss').Config} */
 
// eslint-disable-next-line no-undef
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
