module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      { pattern: 'src/**/*.js', watched: false, included: true, served: true },
      { pattern: 'src/**/*.jsx', watched: false, included: true, served: true },
      { pattern: 'spec/**/*.spec.js', watched: false },
      { pattern: 'spec/**/*.spec.jsx', watched: false }
    ],
    exclude: ['src/index.js', 'src/App.test.js', 'src/setupTests.js', 'src/test/setupTests.js'],
    preprocessors: {
      'src/**/*.js': ['webpack', 'sourcemap'],
      'src/**/*.jsx': ['webpack', 'sourcemap'],
      'spec/**/*.spec.js': ['webpack', 'sourcemap'],
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
    reporters: ['progress', 'kjhtml', 'coverage'],
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'text-summary' }
      ]
    },
    browsers: ['ChromeHeadless'],
    singleRun: true,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    client: {
      clearContext: false
    }
  });
};
