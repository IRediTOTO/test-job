module.exports = {
    mode: "jit",
    prefix: "tw-",
    purge: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    future: { removeDeprecatedGapUtilities: !0, purgeLayersByDefault: !0 },
    theme: {
        extend: {
            colors: {
                facebook: "#1877f2",

            }
        }
    },
    variants: {
        scrollbar: ['rounded'],
        extend: {

        }
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),

        // require('daisyui'),
        //  require("tailwindcss-pseudo-elements"),
        //  require("tailwindcss-filters"),
        // require("tailwind-scrollbar"),
    ],
    
};
