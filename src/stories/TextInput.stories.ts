import InputText from "primevue/inputtext";
import { Meta, StoryObj } from '@storybook/vue3';
import ErrorOutline from '~icons/ic/error-outline';
import IconCheck from "~icons/ic/baseline-check";
import Password from "primevue/password";

const meta: Meta<typeof InputText> = {
    title: 'Text Input',
    component: InputText,
    tags: ['autodocs'],
    argTypes: {
        value: { control: 'text', description: 'The value of the input' },
        size: { control: 'select', options: ['large', 'small'], description: 'The HEIGHT of the input' },
        disabled: { control: 'boolean', description: 'Disables the input' },
        readOnly: { control: 'boolean', description: 'Read only input' },
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
              :readonly="args.readOnly"
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
              :placeholder="args.placeholder"
              class="max-w-128"
              :readonly="args.readOnly"
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
              :placeholder="args.placeholder"
              class="max-w-424"
              :readonly="args.readOnly"
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
              :placeholder="args.placeholder"
              class="max-w-576"
              :readonly="args.readOnly"
          />
          </div>
        `,
    }),
};

export const LabelLeft: Story = {
    args: {
        value: 'Text',
        disabled: false,
        size: 'large',
        readOnly: false,
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

export const SuccessWithHelper: Story = {
    args: {
        value: 'Text',
        size: 'large',
        helperText: 'Enter your username to reset your password.'
    },
    render: (args) => ({
        components: { InputText, IconCheck },
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
              :size="args.size"
          />
          <small id="label-help" class="flex items-center text-green-800 mt-4">
            <IconCheck/>
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

export const PasswordInput: Story = {
    args: {
        value: 'preloadedPassword',
        disabled: false,
    },
    render: (args) => ({
        components: { Password },
        setup() {
            return { args };
        },
        template: `
          <Password
              id="label"
              v-model="args.value"
              aria-label="password input"
              :disabled="args.disabled"
              :feedback="false"
              :size="args.size"
          />
        `,
    }),
};

export const SuccessPasswordWithHelper: Story = {
    args: {
        value: 'Text',
        size: 'large',
        helperText: 'Enter your username to reset your password.',
    },
    render: (args) => ({
        components: { Password, IconCheck },
        setup() {
            return { args };
        },
        template: `
          <div class="max-w-576">
          <label for="label" class="mb-4" >Label</label>
          <Password
              id="label"
              v-model="args.value"
              aria-describedby="helper-text"
              :size="args.size"
              :feedback="false"
          />
          <small id="label-help" class="text-green-800 flex items-center mt-4">
            <IconCheck/>
            Success message with helper text goes here
          </small>
          </div>
        `,
    }),
};

export const InvalidPasswordWithHelper: Story = {
    args: {
        value: 'Text',
        invalid: true,
        size: 'large',
    },
    render: (args) => ({
        components: { Password, ErrorOutline },
        setup() {
            return { args };
        },
        template: `
          <div class="max-w-576">
          <label for="label" class="mb-4" >Label</label>
          <Password
              id="label"
              v-model="args.value"
              aria-label="text input"
              :invalid="args.invalid"
              :feedback="false"
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
