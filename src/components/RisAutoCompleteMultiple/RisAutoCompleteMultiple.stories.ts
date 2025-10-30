import { Meta, StoryObj } from "@storybook/vue3-vite";
import { html } from "@/lib/tags.ts";
import { ref } from "vue";
import { AutoCompleteCompleteEvent } from "primevue/autocomplete";
import { http, HttpResponse } from "msw";
import RisAutoCompleteMultiple from "./RisAutoCompleteMultiple.vue";
import {
  AutoCompleteMultipleSuggestion,
  Props,
} from "./RisAutoCompleteMultiple.vue";

const meta: Meta<typeof RisAutoCompleteMultiple> = {
  component: RisAutoCompleteMultiple,

  tags: ["autodocs"],

  args: {
    ariaLabel: "",
    placeholder: "Type something...",
    ariaLabelledby: "",
    loading: false,
    invalid: false,
    disabled: false,
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
                const item: AutoCompleteMultipleSuggestion = {
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

function commonSetup(
  args: Readonly<Props & { modelValue?: AutoCompleteMultipleSuggestion[] }>,
) {
  const selectedItems = ref(args.modelValue);
  const suggestions = ref<AutoCompleteMultipleSuggestion[]>([]);

  const onComplete = async (event: AutoCompleteCompleteEvent) => {
    suggestions.value = await getCompletions(event.query);
  };
  return { selectedItems, suggestions, onComplete, args };
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { RisAutoCompleteMultiple },
    setup() {
      return commonSetup(args);
    },
    template: html`
      <div class="min-h-[300px]">
        <RisAutoCompleteMultiple
          v-bind="args"
          v-model="selectedItems"
          :suggestions="suggestions"
          appendTo="self"
          @complete="onComplete"
        />
        <div v-if="selectedItems">
          Selected items: {{selectedItems.map(i => i.label)}}
        </div>
      </div>
    `,
  }),
};
