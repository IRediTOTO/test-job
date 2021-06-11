module.exports = {
    plugins: [
       "postcss-import",
       "tailwindcss",
       ...("production" === process.env.NODE_ENV
          ? [
               "postcss-flexbugs-fixes",
               [
                  "postcss-preset-env",
                  {
                     autoprefixer: { flexbox: "no-2009" },
                     stage: 3,
                     features: { "custom-properties": !1 },
                  },
               ],
               [
                  "cssnano",
                  {
                     preset: ["default", { discardComments: { removeAll: !0 } }],
                  },
               ],
            ]
          : []),
    ],
 };
 