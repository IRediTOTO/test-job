const incstr = require("incstr"),
    classNames = {},
    generateClassName = incstr.idGenerator({
        alphabet: "abcdefghijklmnopqrstuvwxyz",
    });
module.exports = {
    poweredByHeader: !1,
    images: {
        domains: ["via.placeholder.com", "picsum.photos", "mcdn.coolmate.me", "source.unsplash.com", "localhost", "1.gravatar.com", "2.gravatar.com", "0.gravatar.com", "i.imgur.com", "pho.borcoro.com"

            , "secure.gravatar.com"
        ]
    },
    // future: {
    //    webpack5: true,
    // },

    // webpack: (config, { dev }) => {
    //     if (!dev) {
    //         const MangleCssClassPlugin = require("mangle-css-class-webpack-plugin");
    //         config.plugins.push(
    //             new MangleCssClassPlugin({
    //                 classNameRegExp: `(([a-zA-Z-:]*)[\\\\\\\\]*:)*([\\\\\\\\]*!)?tw-[a-zA-Z-]([a-zA-Z0-9-]*([\\\\\\\\]*(\\%|\\#|\\.|\\[|\\]))*)*`,
    //                 //  ignorePrefixRegExp: "((hover|focus|active|disabled|visited|first|last|odd|even|group-hover|focus-within|xs|sm|md||lg|xl)(\\\\\\\\\\\\\\\\|\\\\)?:)*",

    //                 classGenerator: (original, opts, context) => {
    //                     if (classNames[original]) {
    //                         return classNames[original];
    //                     }

    //                     let nextId;

    //                     do {
    //                         // Class name cannot start with a number.
    //                         nextId = generateClassName();
    //                     } while (/^[0-9_-]/.test(nextId));

    //                     return classNames[original] = nextId;
    //                 },
    //                 //  log: true
    //             })
    //         );
    //     }
    //     return config;
    // },
};
