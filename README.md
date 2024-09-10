
# Build Tool Showcase

This project demonstrates the use of various build tools and package managers in a small web application. It showcases the implementation of Webpack, Babel, Sass, ESLint, and Jest in a modern JavaScript development environment.

## Project Description

The web application displays a list of popular build tools fetched from a JSON file. It uses ES6+ JavaScript features, Sass for styling, and the date-fns library for date formatting.

## Setup Instructions

1. Clone the repository:
     ```
   git clone https://github.com/Harr-izle/Build-Tool-Showcase.git
   cd build-tool-showcase
      ```
   

3. Install dependencies:
     ```
   npm install
      ```

4. Run the development server:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:8080`

## Available npm Scripts

- `npm start`: Start the development server
- `npm run build`: Create a production build
- `npm run lint`: Run ESLint on the source files
- `npm test`: Run Jest tests

## Build Process Explanation

1. The development build uses webpack-dev-server for hot reloading and faster development.
2. The production build optimizes the code by minifying JavaScript and CSS, and implementing code splitting.
3. Babel is used to transpile ES6+ code to ensure browser compatibility.
4. Sass is compiled to CSS and extracted into separate files.
5. ESLint is used for code linting to maintain code quality.
6. Jest is used for unit testing.

## Project Structure

- `src/`: Contains the source code
  - `index.js`: Main entry point
  - `styles.scss`: Main Sass file
- `webpack.common.js`: Common Webpack configuration
- `webpack.dev.js`: Development-specific Webpack configuration
- `webpack.prod.js`: Production-specific Webpack configuration
- `babel.config.js`: Babel configuration
- `.eslintrc.js`: ESLint configuration
- `jest.config.js`: Jest configuration

## Learn More

To learn more about the tools used in this project, check out their official documentation:

- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)
