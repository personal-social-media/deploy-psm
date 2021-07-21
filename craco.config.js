const dotenvCra = require('dotenv-cra');

dotenvCra.config();

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}