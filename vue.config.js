// const { defineConfig } = require('@vue/cli-service')

const config1 = {
  transpileDependencies: true,
  lintOnSave: false
};

const config2 = {
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
      },
    },
  },
};

module.exports = Object.assign({}, config1, config2);

// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false
// })

// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         implementation: require('sass'),
//       },
//     },
//   },
// };