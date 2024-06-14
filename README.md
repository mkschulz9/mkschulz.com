# Matthew Schulz's Personal Website

- Welcome to the behind the scenes of Matthew Schulz's personal website! This
  website is a React application built from scratch that showcases some of
  Matthew's projects and more. The website is hosted on GitHub Pages and can be
  accessed at [mkschulz9.github.io](https://mkschulz9.github.io).

\*Note: This website is a work in progress and is constantly being updated. This
is not the final version.

| Type                          | Name                                                               | Related Folder(s) / File(s)                                        | Description                                                                             |
| ----------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| Package Manager               | [pnpm](https://pnpm.io/)                                           | [package.json](package.json) <br> [pnpm-lock.yaml](pnpm-lock.yaml) | Package manager that facilitates efficient management and installation of dependencies. |
| Build Tool                    | [Vite](https://vitejs.dev/)                                        | [vite.config.ts](vite.config.ts)                                   | Build tool that provides fast and efficient development experience.                     |
| Static Type Checker           | [TypeScript](https://www.typescriptlang.org/)                      | [tsconfig.json](tsconfig.json)                                     | Static type checker that helps catch type-related bugs early.                           |
| UI Libraries                  | [React](https://reactjs.org/) <br> [MUI](https://mui.com/)         | [src/main.tsx](src/main.tsx) <br> [src/components](src/components) | UI libraries that provide a rich set of components and utilities.                       |
| Client Router (Not added yet) | [React Router](https://reactrouter.com/)                           | [src/main.tsx](src/main.tsx)                                       | Client-side router that enables navigation without page reloads.                        |
| CI/CD                         | [GitHub Actions](https://github.com/features/actions)              | [.github/workflows](.github/workflows)                             | CI/CD tool that automates the build, test, and deployment processes.                    |
| Code Linter                   | [ESLint](https://eslint.org/)                                      | [eslint.config.js](eslint.config.js)                               | Code linter that helps maintain consistent code style.                                  |
| Code Formatter                | [Prettier](https://prettier.io/)                                   | [.prettierrc.yaml](.prettierrc.yaml)                               | Code formatter that helps maintain consistent code style.                               |
| Commit Linter                 | [commitlint](https://github.com/conventional-changelog/commitlint) | [.commitlintrc.json](.commitlintrc.json)                           | Commit linter that checks if commit messages meet a certain format.                     |
| Git Hooks                     | [husky](https://typicode.github.io/husky/#/)                       | [.husky](.husky)                                                   | Git hooks that run tasks before/after Git commands.                                     |

## CI/CD Pipelines

CI/CD pipelines are implemented using GitHub Actions. Workflow files are defined
in [.github/workflows](.github/workflows).

| Pipeline                                                                    | Deployed site                                                  | Trigger                  | Description                    |
| --------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------ | ------------------------------ |
| [github-pages-deploy.yml](.github/workflows/github-pages-deploy.yml) (Prod) | [uscautodrivelab.github.io](https://uscautodrivelab.github.io) | on Push to `main` branch | Build and deploy to prod site. |

### Explanation of Steps Defined in `github-pages-deploy.yml`

- The pipeline is triggered on push to the `main` branch.
- The pipeline has two jobs: `build` and `deploy`.
- The `build` job installs dependencies, builds the project, and uploads the
  production-ready build files as an artifact.
- The `deploy` job downloads the artifact and deploys the production-ready
  build.
- The pipeline uses a GitHub token stored in the repository secrets to deploy
  the production-ready build to [GitHub Pages](https://pages.github.com/).

## Git Hooks

When Git commit is made, the following happens in the background:

- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) lint and
  format the staged code.
- [commitlint](https://github.com/conventional-changelog/commitlint) checks if
  the commit message meets the
  [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format.
