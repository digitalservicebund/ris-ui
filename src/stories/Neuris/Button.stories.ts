import Button from 'primevue/button';
import { Meta, StoryObj } from '@storybook/vue3';
import 'primeicons/primeicons.css';

const meta: Meta<typeof Button> = {
    title: 'Form/Button/Primary Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        size: { control: 'select', options: ['small', 'large'] },
        icon: { control: 'select', options: [null, 'pi pi-check', 'pi pi-times', 'pi pi-exclamation-triangle'] },
        iconPos: { control: 'select', options: ['left', 'right'] },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Button',
        size: 'small',
        severity: 'primary',
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
              :icon="args.icon"
              :iconPos="args.iconPos"
          />
          </div>
        `,
    }),
};

export const Secondary: Story = {
    args: {
        label: 'Button',
        size: 'small',
        severity: 'secondary',
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
              :icon="args.icon"
              :iconPos="args.iconPos"
          />
          </div>
        `,
    }),
};

export const Ghost: Story = {
    args: {
        label: 'Button',
        size: 'small',
        severity: 'ghost',
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
              :icon="args.icon"
              :iconPos="args.iconPos"
          />
          </div>
        `,
    }),
};