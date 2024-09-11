# RIS UI

**Component library for NeuRIS** | 👀 [Demo](https://digitalservicebund.github.io/ris-ui) | 📦 [npm](https://www.npmjs.com/package/@digitalservicebund/ris-ui) | 🤖 [PrimeVue Docs](https://primevue.org)

## Installation

RUI UI contains two things:

- a theme for [Vue 3](https://vuejs.org) components from [PrimeVue 4](https://primevue.org);
- a preset and plugin for [Tailwind](https://tailwindcss.com) that sets some global styling and exposes the design tokens used by the theme, so you can build custom UI that looks consistent with the components.

Vue and PrimeVue are required for RIS UI to work (you'll see a warning about missing peer dependencies if you're trying to use RIS UI without them). Tailwind is optional. To get started, install:

```sh
# Vue and PrimeVue if you haven't installed them already. Tailwind is optional.
npm install vue primevue tailwindcss

# RIS UI
npm install @digitalservicebund/ris-ui
```

### Vue setup

Import and apply the RIS UI theme, styling, and fonts where you set up your application (typically `main.ts`):

```diff
  // main.ts
  import { createApp } from "vue";
  import PrimeVue from "primevue/config";
+ import { RisUiTheme } from "@digitalservicebund/ris-ui/primevue";
+ import "@digitalservicebund/ris-ui/primevue/style.css";
+ import "@digitalservicebund/ris-ui/fonts.css";

  const app = createApp().use(PrimeVue, {
+   unstyled: true,
+   pt: RisUiTheme,
  })
```

### Nuxt setup

If using Nuxt, skip the Vue setup above.

Add the PrimeVue plugin and set the RIS UI theme, styling, and fonts to your `nuxt.config.ts`:

```diff
  import { RisUiTheme } from "@digitalservicebund/ris-ui/primevue";
  export default defineNuxtConfig({
    modules: [
+     "@primevue/nuxt-module",
    ],
+   primevue: {
+     pt: RisUiTheme,
+     unstyled: true,
+   },
  // your other configuration
  })
```

## Tailwind usage

If you want, also install the Tailwind preset (for colors, spacings, etc.) and plugin (for typography classes, etc.):

```diff
  // tailwind.config.js
+ import { RisUiPreset, RisUiPlugin } from "@digitalservicebund/ris-ui/tailwind";

  export default {
+   presets: [RisUiPreset],
+   plugins: [RisUiPlugin],

    // your other configuration
  };
```

## Development

To make changes to RIS UI, you'll need the current [Node.js LTS](https://nodejs.org/en/download/package-manager) along with npm installed on your machine.

To get started, first clone this repository:

```sh
git clone https://github.com/digitalservicebund/ris-ui.git
```

Then install dependencies:

```sh
npm install

# This will populate the public/fonts folder. See public/fonts/.gitkeep
# for more information.
npm run sync-fonts
```

You can now run a local preview to see any changes you make to the code:

```sh
npm run storybook
```

Check out [package.json](./package.json) for additional scripts.

### Repository contents

RIS UI uses the following tools:

- [Storybook](https://storybook.js.org/), a playground for previewing components and styling
- [Tailwind](https://tailwindcss.com/) for styling
- [Vite](https://vitejs.dev/) as our dev server and bundler
- [Unplugin Icons](https://github.com/unplugin/unplugin-icons) for providing SVG icons as components
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for code consistency

You can find more in [package.json](./package.json), but the above are the ones you'll work with the most.

In terms of files and folders, you'll find:

| Folder         | Contents                                  |
| -------------- | ----------------------------------------- |
| (root)         | General docs and configuration            |
| `.github/`     | GitHub Actions configuration              |
| `.storybook/`  | Storybook setup                           |
| `src/primevue` | The RIS UI preset for PrimeVue            |
| `src/tailwind` | The RIS UI preset and plugin for Tailwind |
| `src/lib`      | Internal tools and helpers                |

### Tailwind IntelliSense

If you're using VS Code with the [official Tailwind extension](https://tailwindcss.com/docs/editor-setup), you can get autocompletions and more by adding this to your VS Code settings:

```jsonc
{
  // other settings
  "tailwindCSS.experimental.classRegex": ["tw`([^`]*)`"],
}
```

This will detect Tailwind CSS classes in template strings tagged with `tw` such as:

```ts
import { tw } from "@/lib/tags";

const classes = tw`bg-blue-200 px-16`;
```

See [tags.ts](./src/lib/tags.ts) for more information.

### Committing

Before making your first commit, you'll need some additional prerequisites installed. These help us with code consistency and quality:

- [GitHub CLI](https://cli.github.com/): Used for checking the pipeline status before pushing
- [jq](https://jqlang.github.io/jq/): Used by our license check, which ensures all our dependencies use [allowed licenses](./allowed-licenses.json) only
- [Lefthook](https://github.com/evilmartians/lefthook): Runs Git commit hooks
- [Talisman](https://github.com/thoughtworks/talisman): Validates you're not accidentially committing secrets

Once they're installed, run:

```sh
# In ./ris-ui
lefthook install
```

When you make a commit now, Lefthook will ensure your changes and commit message adhere to our coding guidelines:

- Code is formatted with Prettier
- ESLint passes without warnings
- The commit message follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. If you're making changes to a component, please use the component name as the scope (multiple scopes are allowed).

Keep in mind that your commit messages will be used for generating changelogs and inferring version numbers when making a release. If you made multiple changes, please consider squashing them to keep the history, as well as the changelogs, tidy and readable.

### Making a release

To release a new version, run the ["Release to npm"](https://github.com/digitalservicebund/ris-ui/actions/workflows/release.yml) action. This will:

- Build the project
- Publish the build to npm
- Create a Git tag and GitHub release
- Generate a changelog based on the commits since the last release

Releases are created automatically by [semantic-release](https://github.com/semantic-release/semantic-release?tab=readme-ov-file). Please refer to their documentation to learn more about how version numbers are inferred and how changelogs are created.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).
