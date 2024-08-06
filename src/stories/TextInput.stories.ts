import InputText from "primevue/inputtext";
import { Meta, StoryObj } from '@storybook/vue3';
import ErrorOutline from '~icons/ic/error-outline';

const meta: Meta<typeof InputText> = {
    title: 'Text Input',
    component: InputText,
    tags: ['autodocs'],
    argTypes: {
        value: { control: 'text', description: 'The value of the input' },
        size: { control: 'select', options: ['large', 'small'], description: 'The HEIGHT of the input' },
        disabled: { control: 'boolean', description: 'Disables the input' },
        readOnly: { control: 'boolean', description: 'Makes the input read-only' },
        error: { control: 'boolean', description: 'Sets the error state' },
        label: { control: 'select', options: ['none', 'top', 'left'], description: 'The position of the label' },
        prefix: { control: 'text', description: 'The prefix text' },
        suffix: { control: 'text', description: 'The suffix text' }
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 'Text',
        disabled: false,
        readOnly: false,
    },
    render: (args) => ({
        components: { InputText },
        setup() {
            return { args };
        },
        template: `
          
          <InputText
              id="label"
              :value="args.value"
              aria-label="text input"
              :disabled="args.disabled"
              readonly
          />
          
        `,
    }),
};

export const PlaceholderShort: Story = {
    args: {
        size: 'small',
        placeholder: 'Placeholder',
        disabled: false,
        readOnly: false,

    },
    render: (args) => ({
        components: { InputText },
        setup() {
            return { args };
        },
        template: `
          <div class="flex flex-col gap-2 mt-10">
          <label for="label">Label</label>
          <InputText 
              id="label" 
              :value=args.value 
              aria-label="text input"
              :size="args.size"
              :disabled="args.disabled"
              :readonly="args.readOnly"
                :placeholder="args.placeholder"
                class="max-w-128"
            
          />
          </div>
        `,
    }),
};

export const PlaceholderMedium: Story = {
    args: {
        size: 'small',
        placeholder: 'Placeholder',
        disabled: false,
        readOnly: false,

    },
    render: (args) => ({
        components: { InputText },
        setup() {
            return { args };
        },
        template: `
          <div class="flex flex-col gap-2 mt-10">
          <label for="label">Label</label>
          <InputText 
              id="label" 
              :value=args.value 
              aria-label="text input"
              fluid
              :size="args.size"
              :disabled="args.disabled"
              :readonly="args.readOnly"
                :placeholder="args.placeholder"
              class="max-w-424"
            
          />
          </div>
        `,
    }),
};

export const PlaceholderLong: Story = {
    args: {
        size: 'small',
        placeholder: 'Placeholder',
        disabled: false,
        readOnly: false,

    },
    render: (args) => ({
        components: { InputText },
        setup() {
            return { args };
        },
        template: `
          <div class="flex flex-col gap-2 mt-10">
          <label for="label">Label</label>
          <InputText 
              id="label" 
              :value=args.value 
              aria-label="text input"
              fluid
              :size="args.size"
              :disabled="args.disabled"
              :readonly="args.readOnly"
              :placeholder="args.placeholder"
              class="max-w-576"
            
          />
          </div>
        `,
    }),
};

export const LabelLeft: Story = {
    args: {
        value: 'Text',
        disabled: false,
        readOnly: false,
        size: 'large',
    },
    render: (args) => ({
        components: { InputText },
        setup() {
            return { args };
        },
        template: `
          <div class="flex gap-10 mt-10 items-center">
          <label for="label">Label</label>
          <InputText 
              id="label" 
              :value=args.value
              :size="args.size"
              aria-label="text input"
              :disabled="args.disabled"
              :readonly="args.readOnly"
          />
          </div>
        `,
    }),
};

export const SuccessFilled: Story = {
    args: {
        value: 'Text',
        success: true,
        size: 'large',
        helperText: 'Enter your username to reset your password.'
    },
    render: (args) => ({
        components: { InputText },
        setup() {
            return { args };
        },
        template: `
          <div class="max-w-576">
          <label for="label" class="mb-4" >Label</label>
          <InputText
              id="label"
              :value="args.value"
              aria-describedby="helper-text"
              :variant="args.success && 'filled'"
              :size="args.size"
          />
          <small id="label-help" class="text-green-800 mt-4">
            Success message with helper text goes here
          </small>
          </div>
        `,
    }),
};

export const InvalidWithHelper: Story = {
    args: {
        value: 'Text',
        invalid: true,
        size: 'large',
    },
    render: (args) => ({
        components: { InputText, ErrorOutline },
        setup() {
            return { args };
        },
        template: `
          <div class="max-w-576">
          <label for="label" class="mb-4" >Label</label>
          <InputText
              id="label"
              :value="args.value"
              aria-label="text input"
              :invalid="args.invalid"
                :size="args.size"
          />
          <small id="label-help" class="text-red-800 flex items-center gap-2 mt-4">
            <ErrorOutline />
            Error message with helper text goes here
          </small>
          </div>
        `,
    }),
};

export const WithPrefix: Story = {
    args: {
        value: 'Text',
        size: 'large',
        prefix: '@',
    },
    render: (args) => ({
        components: { InputText },
        setup() {
            return { args };
        },
        template: `
          <div class="relative max-w-576">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3">
            <span class="text-gray-600">{{ args.prefix }}</span>
          </div>
          <InputText
              id="label"
              :value="args.value"
              aria-label="text input"
              :size="args.size"
              class="pl-10"
          />
          </div>
        `,
    }),
};