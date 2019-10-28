module: {
  loaders: [
    {
      test: /\.vue$/,
      loader: 'vue'
    },
    {
        test: /\.s[a|c]ss$/,
        loader: 'style!css!sass'
    }
  ]
  rules: [
      {
       test: /\.svg$/,
       loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
      },
    ]
}


vue: {
  loaders: {
    scss: 'style!css!sass'
  }
}
