import { render, screen, waitFor, within } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import type { AutoCompleteCompleteEvent } from "primevue/autocomplete";
import RisAutoCompleteMultiple, {
  AutoCompleteMultipleSuggestion,
} from "./RisAutoCompleteMultiple.vue";
import PrimeVue from "primevue/config";
import userEvent from "@testing-library/user-event";
import { ref } from "vue";

const mockSuggestions = [
  { id: "1", label: "Mars", secondaryLabel: "The red planet" },
  { id: "2", label: "Earth", secondaryLabel: "The blue planet" },
];

// Create a wrapper to handle the search
const TestWrapper = {
  components: { RisAutoCompleteMultiple },
  setup(props: { suggestions: AutoCompleteMultipleSuggestion[] }) {
    const modelValue = ref([]);
    const filteredList = ref(props.suggestions); // Start by showing all

    function handleSearch(event: AutoCompleteCompleteEvent) {
      const query = event.query.toLowerCase();

      if (!query) {
        filteredList.value = props.suggestions;
      } else {
        filteredList.value = props.suggestions.filter(
          (suggestion) =>
            suggestion.label.toLowerCase().includes(query) ||
            (suggestion.secondaryLabel &&
              suggestion.secondaryLabel.toLowerCase().includes(query)),
        );
      }
    }

    return {
      modelValue,
      filteredList,
      handleSearch,
    };
  },
  template: `
    <RisAutoCompleteMultiple
      v-model="modelValue"
      :suggestions="filteredList"
      :loading="false"
      placeholder="Search planets"
      @complete="handleSearch"
    />`,
  props: ["suggestions"],
};

describe("RisAutoCompleteMultiple", () => {
  it("renders the input and suggestions in the dropdown when searching", async () => {
    const user = userEvent.setup();

    render(TestWrapper, {
      props: { suggestions: mockSuggestions },
      global: { plugins: [PrimeVue] },
    });

    const input = screen.getByPlaceholderText("Search planets");
    expect(input).toBeInTheDocument();

    const dropdownButton = screen.getByRole("button", {
      name: "Vorschläge anzeigen",
    });
    expect(dropdownButton).toBeInTheDocument();
    expect(dropdownButton).toHaveAttribute("tabindex", "0");

    // when
    await user.type(input, "m");

    // then
    await waitFor(() => {
      const optionsList = screen.getByRole("listbox", { name: "Option List" });
      expect(optionsList).toBeVisible();
      const marsOption = within(optionsList).getByRole("option", {
        name: "Mars",
      });
      expect(marsOption).toBeInTheDocument();
    });
  });

  it("renders dropdown button with tabindex=-1 when disableDropdownTabNavigation is true", async () => {
    render(TestWrapper, {
      props: {
        suggestions: mockSuggestions,
        disableDropdownTabNavigation: true,
      },
      global: { plugins: [PrimeVue] },
    });

    const dropdownButton = screen.getByRole("button", {
      name: "Vorschläge anzeigen",
    });
    expect(dropdownButton).toHaveAttribute("tabindex", "-1");
  });

  it("renders the ProgressSpinner when loading is true", () => {
    render(TestWrapper, {
      props: { suggestions: mockSuggestions, loading: true },
      global: { plugins: [PrimeVue] },
    });

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("selects and unselects an option", async () => {
    const user = userEvent.setup();
    render(TestWrapper, {
      props: { suggestions: mockSuggestions },
      global: { plugins: [PrimeVue] },
    });

    const input = screen.getByPlaceholderText("Search planets");

    // when searching
    await user.type(input, "m");

    await waitFor(async () => {
      const marsOption = screen.getByText("Mars");
      expect(marsOption).toBeInTheDocument();
      // when clicking on the option
      await user.click(marsOption);
    });

    const chipList = screen.getByRole("listbox");
    expect(chipList).toBeInTheDocument();

    // then
    const selectedChips = within(chipList).getByRole("option", {
      name: "Mars",
    });
    expect(selectedChips).toBeInTheDocument();

    // when searching again
    await user.clear(input);
    await user.type(input, "m");

    await waitFor(async () => {
      const optionsList = screen.getByRole("listbox", { name: "Option List" });
      const marsOption = within(optionsList).getByRole("option", {
        name: "Mars",
      });
      expect(marsOption).toBeInTheDocument();
      const checkbox = within(marsOption).getByRole("checkbox");
      expect(checkbox).toBeChecked();
      await user.click(marsOption);
    });

    // then selected item is removed
    expect(selectedChips).not.toBeInTheDocument();
  });
});
