const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
    transpileDependencies: true,
    productionSourceMap: false,
    configureWebpack: {
        optimization: {
            splitChunks: {
                cacheGroups: {
                    default: false,
                    // Merge all the CSS into one file
                    styles: {
                        name: "styles",
                        test: (m) => m.constructor.name === "CssModule",
                        chunks: "all",
                        minChunks: 1,
                        enforce: true,
                    },
                },
            },
        },
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: "@import \"@/assets/styles/variables.scss\"; @import \"@/assets/styles/libs.scss\";",
            },
        },
    },
});
