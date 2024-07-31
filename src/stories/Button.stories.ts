import Button from 'primevue/button';
import { Meta, StoryObj } from '@storybook/vue3';
import 'primeicons/primeicons.css';
import IconCheck from '~icons/ic/baseline-check';


const meta: Meta<typeof Button> = {
    title: 'Buttons',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        size: { control: 'select', options: ['small', 'large'] },
        disabled: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Button',
        size: 'small',
        severity: 'primary',
        disabled: false,
    },
    render: (args) => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: `
          <div class="mt-10">
          <Button
              :label="args.label"
              :size="args.size"
              :severity="args.severity"
              :disabled="args.disabled"
          />
          </div>
        `,
    }),
};

export const PrimaryIconLeft: Story = {
    args: {
        label: 'Button',
        size: 'small',
        severity: 'primary',
        disabled: false,
    },
    render: (args) => ({
        components: { Button, IconCheck },
        setup() {
            return { args };
        },
        template: `
          <div class="mt-10">
          <Button
              :label="args.label"
              :size="args.size"
              :severity="args.severity"
              :disabled="args.disabled"
              iconPos="left"
          >
            <template #icon>
              <IconCheck />
            </template>
          </Button>
          </div>
        `,
    }),
};

export const PrimaryIconRight: Story = {
    args: {
        label: 'Button',
        size: 'small',
        severity: 'primary',
        disabled: false,
    },
    render: (args) => ({
        components: { Button, IconCheck },
        setup() {
            return { args };
        },
        template: `
          <div class="mt-10">
          <Button
              :label="args.label"
              :size="args.size"
              :severity="args.severity"
              :disabled="args.disabled"
              iconPos="right"
          >
            <template #icon>
              <IconCheck />
            </template>
          </Button>
          </div>
        `,
    }),
};

export const Secondary: Story = {
    args: {
        label: 'Button',
        size: 'small',
        severity: 'secondary',
        disabled: false,
    },
    render: (args) => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: `
          <div class="mt-10">
          <Button
              :label="args.label"
              :size="args.size"
              :severity="args.severity"
              :disabled="args.disabled"
          />
          </div>
        `,
    }),
};

export const SecondaryIconLeft: Story = {
    args: {
        label: 'Button',
        size: 'small',
        severity: 'secondary',
        disabled: false,
    },
    render: (args) => ({
        components: { Button, IconCheck },
        setup() {
            return { args };
        },
        template: `
          <div class="mt-10">
          <Button
              :label="args.label"
              :size="args.size"
              :severity="args.severity"
              iconPos="left"
              :disabled="args.disabled"
          >
          <template #icon>
            <IconCheck />
          </template>
          </Button>
          </div>
        `,
    }),
};

export const SecondaryIconRight: Story = {
    args: {
        label: 'Button',
        size: 'small',
        severity: 'secondary',
        disabled: false,
    },
    render: (args) => ({
        components: { Button, IconCheck },
        setup() {
            return { args };
        },
        template: `
          <div class="mt-10">
          <Button
              :label="args.label"
              :size="args.size"
              :severity="args.severity"
              iconPos="right"
              :disabled="args.disabled"
          >
          <template #icon>
            <IconCheck />
          </template>
          </Button>
          </div>
        `,
    }),
};

export const Ghost: Story = {
    args: {
        label: 'Button',
        size: 'small',
        severity: 'ghost',
        disabled: false,
    },
    render: (args) => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: `
          <div class="mt-10">
          <Button
              :label="args.label"
              :size="args.size"
              :severity="args.severity"
              :disabled="args.disabled"
          />
          </div>
        `,
    }),
};

export const GhostIconLeft: Story = {
    args: {
        label: 'Button',
        size: 'small',
        severity: 'ghost',
        disabled: false,
    },
    render: (args) => ({
        components: { Button, IconCheck },
        setup() {
            return { args };
        },
        template: `
          <div class="mt-10">
          <Button
              :label="args.label"
              :size="args.size"
              :severity="args.severity"
              iconPos="left"
              :disabled="args.disabled"
          >
            <template #icon>
              <IconCheck />
            </template>
          </Button>
          </div>
        `,
    }),
};

export const GhostIconRight: Story = {
    args: {
        label: 'Button',
        size: 'small',
        severity: 'ghost',
        disabled: false,
    },
    render: (args) => ({
        components: { Button, IconCheck },
        setup() {
            return { args };
        },
        template: `
          <div class="mt-10">
          <Button
              :label="args.label"
              :size="args.size"
              :severity="args.severity"
              iconPos="right"
              :disabled="args.disabled"
          >
            <template #icon>
              <IconCheck />
            </template>
          </Button>
          </div>
        `,
    }),
};

