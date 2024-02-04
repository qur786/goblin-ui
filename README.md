# Goblin UI - A React Component Library

Goblin UI is a lightweight and simple React UI library designed for the React-Tailwind ecosystem. It is built with React, Vite, TypeScript, and Tailwind CSS to provide a seamless development experience. The library is open source, and anyone can use it freely to enhance their React applications.

**Note:** Anybody using thing library would still need to install React, Vite, Tailwind CSS, if they want to use these tech in their own created components. This library provides react components with set of flexibility only.

## Features

- Simple and lightweight React components
- Built with Vite, TypeScript, and Tailwind CSS
- Seamless integration with React-Tailwind ecosystem

## Live Preview

Explore the components live on [Chromatic](https://65bf62db67958723222ca2d1-jeqxhslgwd.chromatic.com/).

## Getting Started

### Installation

```bash
npm install goblin-ui
```

or

```bash
yarn add goblin-ui
```

### Usage

```jsx
import { Button } from "goblin-ui";
import "goblin-ui/dist/style.css"; // Import it once in the root of your repo.

const App = () => {
  return (
    <div>
      <Button title="Click me" />
    </div>
  );
};
```

## Development

### Scripts

- `npm start`: Run Storybook for component development
- `npm build`: Build the library
- `npm lint`: Lint the code using ESLint
- `npm build:storybook`: Build Storybook for deployment
- `npm chromatic`: Deploy and test components on Chromatic

### Folder Structure

- `lib/`: Library source code
- `stories/`: Storybook stories
- `dist/`: Distribution files

## Contribution

Feel free to contribute to Goblin UI by opening issues or submitting pull requests. Your feedback and contributions are highly appreciated.

## License

Goblin UI is licensed under the MIT License - see the [LICENSE.md](https://github.com/qur786/goblin-ui/blob/main/LICENSE) file for details.
