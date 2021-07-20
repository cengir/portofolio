module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // hmr: { overlay: false },
      container: {
        center: true,
      },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  variants: {
    extend: {
      boxDecorationBreak: ["hover", "focus"],
      gridAutoColumns: ["hover", "focus"],
      position: ["hover", "focus"],
      flexDirection: ["hover", "focus"],
      justifyContent: ["hover", "focus"],
    },
  },
  plugins: [],
};
