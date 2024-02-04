# Goblin UI - An Opinionated React Component Library

Goblin UI is a lightweight and straightforward React UI library tailored for the React-Tailwind ecosystem. It is built with React, Vite, TypeScript, and Tailwind CSS to provide a seamless development experience. This library is designed with a specific philosophy—offering predefined components with minimal customization choices. The aim is to streamline development by reducing the decision-making process associated with creating components with varying styles.

**Opinionated Approach:**
Goblin UI adopts an opinionated stance, providing a curated set of React components with a deliberate lack of extensive customization options. This intentional limitation aims to simplify the development process, preventing users from getting bogged down in endless styling choices.

**Note:** Users leveraging this library will still need to install React, Vite, and Tailwind CSS separately if they wish to incorporate these technologies into their own custom components. Goblin UI offers React components with a predetermined level of flexibility, allowing developers to focus on building without the complexities of extensive styling decisions.

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

- `start`: Run Storybook for component development
- `build`: Build the library
- `lint`: Lint the code using ESLint
- `build:storybook`: Build Storybook for deployment
- `chromatic`: Deploy and test components on Chromatic

### Folder Structure

- `lib/`: Library source code
- `stories/`: Storybook stories
- `dist/`: Distribution files

## Contribution

Feel free to contribute to Goblin UI by opening issues or submitting pull requests. Your feedback and contributions are highly appreciated.

## License

Goblin UI is licensed under the MIT License - see the [LICENSE.md](https://github.com/qur786/goblin-ui/blob/main/LICENSE) file for details.
