module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'webpack'],
    files: [
      { pattern: 'spec/**/*.spec.jsx', watched: false }
    ],
    exclude: [],
    preprocessors: {
      'spec/**/*.spec.jsx': ['webpack', 'sourcemap']
    },
    webpack: {
      mode: 'development',
      output: {
        publicPath: ''
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            type: 'asset/resource'
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx']
      },
      devtool: 'inline-source-map'
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 2,
    browserNoActivityTimeout: 30000,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity,
    client: {
      clearContext: false
    }
  });
};
