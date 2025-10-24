import { Meta, StoryObj } from "@storybook/vue3-vite";
import RisAutoComplete, {
  AutoCompleteSuggestion,
  Props,
} from "./RisAutoComplete.vue";
import { html } from "@/lib/tags.ts";
import { ref } from "vue";
import { AutoCompleteCompleteEvent } from "primevue/autocomplete";
import { http, HttpResponse } from "msw";

const meta: Meta<typeof RisAutoComplete> = {
  component: RisAutoComplete,

  tags: ["autodocs"],

  args: {
    dropdown: true,
    dropdownMode: "current",
    ariaLabel: "",
    placeholder: "Type something",
    ariaLabelledby: "",
    delay: 300,
    completeOnFocus: false,
    loading: false,
    invalid: false,
    forceSelection: false,
    autoOptionFocus: false,
    selectOnFocus: false,
    typeahead: true,
    appendTo: undefined,
  },

  argTypes: {
    dropdown: { control: "boolean" },
    dropdownMode: {
      control: "select",
      options: ["blank", "current", undefined],
    },
    appendTo: {
      control: "select",
      options: [undefined, "body"],
      description: "Element to append the overlay to, e.g., 'body'.",
    },
  },

  parameters: {
    msw: {
      handlers: [
        http.get("/suggestions", ({ request }) => {
          console.log(request);
          const url = new URL(request.url);
          const q = url.searchParams.get("q") ?? "";
          return new Promise((resolve) => {
            setTimeout(() => {
              const responseData = [...Array(10).keys()].map((index) => {
                const label = (q.split("-")[0] || "item") + "-" + index;
                const item: AutoCompleteSuggestion = {
                  id: "/items/" + label,
                  label,
                };
                if (index % 4 < 2) {
                  item.secondaryLabel = "Some items get a secondary label";
                }
                return item;
              });
              resolve(HttpResponse.json(responseData, { status: 200 }));
            }, 500);
          });
        }),
      ],
    },
  },
};

const getCompletions = async (query: string) => {
  return await (await fetch(`/suggestions?q=${query}`)).json();
};

function commonSetup(args: Readonly<Props & { modelValue?: string }>) {
  const value = ref(args.modelValue);
  const suggestions = ref<AutoCompleteSuggestion[]>([]);

  const search = async (event: AutoCompleteCompleteEvent) => {
    suggestions.value = await getCompletions(event.query);
  };
  return { value, suggestions, search, args };
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { RisAutoComplete },
    setup() {
      return commonSetup(args);
    },
    template: html`
      <div class="min-h-[300px]">
        <RisAutoComplete
          v-bind="args"
          v-model="value"
          :suggestions="suggestions"
          @complete="search"
        />
        <div v-if="value">Selected ID: {{value}}</div>
      </div>
    `,
  }),
};

export const PrePopulated: Story = {
  name: "Pre-populated",
  args: {
    modelValue: "/items/item-1",
    initialLabel: "Item 1",
  },
  render: (args) => ({
    components: { RisAutoComplete },
    setup() {
      return commonSetup(args);
    },
    template: html`
      <div class="min-h-[300px]">
        <RisAutoComplete
          v-model="value"
          v-bind="args"
          :suggestions="suggestions"
          @complete="search"
        />
        <div v-if="value">Selected ID: {{value}}</div>
      </div>
    `,
  }),
};

export const Invalid: Story = {
  args: {
    modelValue: "/items/item-1",
    initialLabel: "Item 1",
    invalid: true,
  },
  render: (args) => ({
    components: { RisAutoComplete },
    setup() {
      return commonSetup(args);
    },
    template: html`
      <div class="min-h-[300px]">
        <RisAutoComplete
          v-model="value"
          v-bind="args"
          :suggestions="suggestions"
          @complete="search"
        />
        <div v-if="value">Selected ID: {{value}}</div>
      </div>
    `,
  }),
};

export const AppendedToBody: Story = {
  args: {
    appendTo: "body",
    placeholder: "Dropdown appears outside",
  },
  render: (args) => ({
    components: { RisAutoComplete },
    setup() {
      return commonSetup(args);
    },
    template: html`
      <div
        style="height: 100px; padding: 20px; background: #f0f0f0; overflow: auto;"
      >
        This box has overflow: auto, which would normally clip the dropdown.
        <br />
        Scroll the box and then open the dropdown below.
        <div style="height: 100px;"></div>
        <RisAutoComplete
          v-bind="args"
          v-model="value"
          :suggestions="suggestions"
          @complete="search"
        />
      </div>
      <div v-if="value">Selected ID: {{value}}</div>
      <div style="height: 300px;">Space below the component.</div>
    `,
  }),
};
