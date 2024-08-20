import tag from "noop-tag";

/**
 * Tagged template string for HTML. The tag itself doesn't do anything, but
 * using it will allow your editor to provide HTML-features for template
 * strings in scripts, e.g. stories:
 *
 * ```ts
 * const template = html`<div>Hello world</div>`
 * ```
 */
export const html = tag;

/**
 * Tagges template string for Tailwind classes. The tag itself doesn't do
 * anything, but using it will allow your editor to provide Tailwind
 * Intellisense for template strings in scripts, as well as automatic class
 * sorting via Prettier.
 *
 * ```ts
 * const classes = tw`px-16 bg-blue-200`
 * ```
 */
export const tw = tag;
