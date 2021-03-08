# 1lith

# Table of Contents

- [Code of Conduct](./CODE_OF_CONDUCT.md)
- [Contributing](#Contributing)
- [Codebase](#Codebase)

# Contributing

All contributors and all contributions both big and small are welcome in this project. In order to ensure this community is health and works for everyone all contributors must adhere to the [Code of Conduct](./CODE_OF_CONDUCT.md) that our community follows. This code of conduct also applies to all conversations that happen within our community here on GitHub. I expect discussions in issues and pull requests to stay positive, productive, and respectful.

## Issues & PRs

The easiest way to get started is by browsing open isssues or opening a new one. There are templates for requesting features, reporting bugs, etc. If you don’t see what you need open one anyways! I'd love to help answer your question or chat through your idea.

See an issue that you want to tackle? Then open up a PR for it!

# Codebase

1lith is a javascript codebase built on top of popular open source projects.

- [Node.js](https://nodejs.org/en/)
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Chakra UI](https://chakra-ui.com/)

More specifically Next.js serves as the framework on which this entire codebase is built upon and organized for. Having a basic familiarity of the ins and outs of each technology would be helpful but isn't required.

## Folder structure

```sh
1lith/
├── common      # Commonly shared code, <Components />, utils, json, etc
├── apps        # Each app
└── public      # Public files and assets
```

## Local Set Up

1lith uses [nvm](https://github.com/nvm-sh/nvm) and `.nvmrc` to ensure contributers are using the correct version. Check the file for the current version the codebase is running.

Clone the project

```bash
git clone https://github.com/romellogoodman/1lith.git
```

Install dependencies

```bash
npm install
```

Start the dev server

```bash
npm run dev
```

# Author

- Romello Goodman ([@mellogood](https://twitter.com/mellogood))
