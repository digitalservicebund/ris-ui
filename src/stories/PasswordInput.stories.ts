import Password from "primevue/password";
import { Meta, StoryObj } from '@storybook/vue3';
import ErrorOutline from '~icons/ic/error-outline';

const meta: Meta<typeof Password> = {
    title: 'Password Text Input',
    component: Password,
    tags: ['autodocs'],
    argTypes: {
        value: { control: 'text', description: 'The value of the input' },
        size: { control: 'select', options: ['large', 'small'], description: 'The HEIGHT of the input' },
        disabled: { control: 'boolean', description: 'Disables the input' },
        readOnly: { control: 'boolean', description: 'Makes the input read-only' },
        label: { control: 'select', options: ['none', 'top', 'left'], description: 'The position of the label' },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 'preloadedPassword',
        disabled: false,
        readOnly: false,
        size: 'large',
    },
    render: (args) => ({
        components: { Password },
        setup() {
            return { args };
        },
        template: `
          
          <Password
              id="label"
              :value="args.value"
              aria-label="password input"
              :disabled="args.disabled"
              :feedback="false"
          />
          
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
        components: { Password },
        setup() {
            return { args };
        },
        template: `
          <div class="max-w-576">
          <label for="label" class="mb-4" >Label</label>
          <Password
              id="label"
              :value="args.value"
              aria-describedby="helper-text"
              :variant="args.success && 'filled'"
              :size="args.size"
              :feedback="false"
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
        components: { Password, ErrorOutline },
        setup() {
            return { args };
        },
        template: `
          <div class="max-w-576">
          <label for="label" class="mb-4" >Label</label>
          <Password
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