
module.exports = {
  options: {
    port: 8080
  },
  use: [
    '@neutrinojs/airbnb',
    [
      '@neutrinojs/eslint',
      {
        rules: {
          "jsx-a11y/anchor-is-valid": [ "error", {
            "components": [ "Link" ],
            "specialLink": [ "to" ]
          }]
        }
      }
    ],
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'redoak'
        }
      }
    ],
    '@neutrinojs/jest',
    [
      '@neutrinojs/dev-server',
      {
        proxy: {
          '/api': 'http://localhost:5000/'
        }
      }
    ],
  ]
};
