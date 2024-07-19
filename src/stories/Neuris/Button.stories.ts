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
        icon: { control: 'text' },
        iconPos: { control: 'select', options: ['left', 'right', 'none'] },
        state: { control: 'select', options: ['default', 'hover', 'pressed', 'focus', 'disabled'] },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Primary Button',
        size: 'large',
        icon: 'pi pi-check',
        iconPos: 'left',
        state: 'default',
    },
    render: (args) => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: `
          <Button :label="args.label"
          />
        `,
    }),
};