import type { DrawerPassThroughOptions } from "primevue";
import { tw } from "@/lib/tags";

// Classes prefixed with `drawer-` are required by `components-extra/drawer.css`
// for features not supported by Tailwind.

const drawer: DrawerPassThroughOptions = {
  root: {
    class: tw`drawer-root shadow-gray-1000/15 relative max-h-[85dvh] w-full overflow-auto bg-white shadow-[0_0_0.5rem]`,
  },

  header: {
    class: tw`drawer-header sticky top-0 z-10 flex min-h-64 items-center justify-between gap-8 bg-white px-16 py-8 transition-shadow duration-100`,
  },

  pcCloseButton: {
    root: {
      class: tw`ris-label2-regular flex cursor-pointer items-center gap-6 py-12 text-blue-800 outline-offset-4 outline-blue-800 focus-visible:outline-4`,
    },

    icon: {
      width: "1.25rem",
      height: "1.25rem",
    },
  },

  title: {
    class: tw`ris-subhead-bold`,
  },

  content: {
    class: tw`px-16 py-8`,
  },

  footer: {
    class: tw`drawer-footer sticky bottom-0 bg-white px-16 pt-16 pb-24 transition-shadow duration-100`,
  },

  mask: {
    class: tw`bg-gray-900/30 transition duration-300 has-[.enter-from]:bg-gray-900/0 has-[.leave-to]:bg-gray-900/0`,
  },

  transition: {
    enterFromClass: tw`enter-from translate-y-full`,
    enterActiveClass: tw`enter-active transition duration-300`,
    leaveActiveClass: tw`leave-active transition duration-150`,
    leaveToClass: tw`leave-to translate-y-full`,
  },
};

export default drawer;
