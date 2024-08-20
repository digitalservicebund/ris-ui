# RIS UI

**Component library for NeuRIS** | 👀 [Demo](https://digitalservicebund.github.io/ris-ui) | 🤖 [PrimeVue Docs](https://primevue.org)

## Installation

RUI UI is a theme for [Vue 3](https://vuejs.org) components from [PrimeVue 4](https://primevue.org). Both are required for RIS UI to work (you'll see a warning about missing peer dependencies if you're trying to use RIS UI without them). To get started, install:

```sh
# Vue and PrimeVue if you haven't installed them already
npm install vue primevue

# RIS UI
npm install @digitalservice4germany/ris-ui
```

## Usage

Import and apply the RIS UI theme and styling where you set up your application (typically `main.ts`):

```diff
  // main.ts
  import { createApp } from "vue";
  import PrimeVue from "primevue/config";
+ import { RisUi } from "@digitalservice4germany/ris-ui";
+ import "@digitalservice4germany/ris-ui/style.css";

  const app = createApp().use(PrimeVue, {
+   unstyled: true,
+   pt: RisUi,
  })
```

## Development

If you want to make changes to RIS UI, you'll need the current [Node.js LTS](https://nodejs.org/en/download/package-manager) as well as NPM installed on your machine.

To get started, first clone this repository:

```sh
git clone https://github.com/digitalservicebund/ris-ui.git
```

Then install dependencies:

```sh
npm install
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

| Folder        | Contents                       |
| ------------- | ------------------------------ |
| (root)        | General docs and configuration |
| `.github/`    | GitHub Actions configuration   |
| `.storybook/` | Storybook setup                |
| `src/preset`  | The RIS UI preset              |
| `src/lib`     | Internal tools and helpers     |

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

- [Lefthook](https://github.com/evilmartians/lefthook): Runs Git commit hooks
- [Talisman](https://github.com/thoughtworks/talisman): Validates you're not accidentially committing secrets

Once they're installed, run:

```sh
# In ./ris-ui
lefthook install
```

When you make a commit now, Lefthook will ensure your changes and commit message adhere to our coding guidelines.

### Making a release

> 🚜 Under construction

## Contributing

🇬🇧
Everyone is welcome to contribute to the development of _RIS UI_. You can contribute by opening pull requests, providing documentation, answering questions or giving feedback. Please do follow our guidelines and our [Code of Conduct](CODE_OF_CONDUCT.md).

🇩🇪
Jede:r ist herzlich eingeladen, die Entwicklung von _RIS UI_ mitzugestalten. Du kannst einen Beitrag leisten, indem du Pull-Requests eröffnest, die Dokumentation erweiterst, Fragen beantwortest oder Feedback gibst. Bitte befolge die Richtlinien und unseren [Verhaltenskodex](CODE_OF_CONDUCT_DE.md).

### How to contribute?

🇬🇧
Open a pull request with your changes and it will be reviewed by someone from the team. When you submit a pull request, you declare that you have the right to license your contribution to DigitalService and the community. By submitting the patch, you agree that your contributions are licensed under the [GPLv3 license](./LICENSE.md).

Please make sure that your changes have been tested before submitting a pull request.

🇩🇪
Nach dem Erstellen eines Pull Requests wird dieser von einer Person aus dem Team überprüft. Wenn du einen Pull Request einreichst, erklärst du dich damit einverstanden, deinen Beitrag an den DigitalService und die Community zu lizenzieren. Durch das Einreichen des Patches erklärst du dich damit einverstanden, dass deine Beiträge unter der [GPLv3-Lizenz](./LICENSE.md) lizenziert sind.

Bitte stelle sicher, dass deine Änderungen getestet wurden bevor du einen Pull Request sendest.
