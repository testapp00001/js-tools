# Bun.js Tools

A collection of tools and scripts built with Bun.js to simplify working with Markdown files and documentation.

## Features

- **Markdown Combiner**: Combine multiple Markdown files into a single file.
- **Antigravity Docs Crawler**: Fetch and save documentation from the Antigravity platform.
- **Linting and Formatting**: Ensure code quality with ESLint and Prettier.
- **Type Checking**: Validate TypeScript code with `bun tsc`.

## Installation

1. Ensure you have [Bun.js](https://bun.sh/) installed on your system.
2. Clone this repository:
   ```bash
   git clone <repository-url>
   cd js-tools
   ```
3. Install dependencies:
   ```bash
   bun install
   ```

## Usage

### Markdown Combiner
Combine multiple Markdown files into a single file:
```bash
bun run ./tools/markdown-combiner/combine.ts --src <source-directory> --out <output-file>
```
Example:
```bash
bun run ./tools/markdown-combiner/combine.ts --src ./docs --out ./combined.md
```

### Antigravity Docs Crawler
Fetch documentation from the Antigravity platform:
```bash
bun run ./tools/antigravity-docs/crawler.js
```

## Scripts

The following scripts are available in `package.json`:

- `combine`: Run the Markdown Combiner tool.
- `antigravity`: Run the Antigravity Docs Crawler.
- `lint`: Check code for linting errors.
- `lint:fix`: Fix linting errors automatically.
- `format`: Format code using Prettier.
- `typecheck`: Run TypeScript type checking.

Run any script using Bun.js:
```bash
bun run <script-name>
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear messages.
4. Submit a pull request.

## License

This project is licensed under the [MIT License](./LICENSE).
