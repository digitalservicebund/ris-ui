interface InputTextProps {
    value?: string;
    size?: 'small' | 'large';
    placeholder?: string;
    invalid?: boolean;
}

interface InputTextContext {
    disabled: boolean;
}

export default {
    root: ({ props, context }: { props: InputTextProps; context: InputTextContext }) => {
        let sizeStyling = 'h-64 px-24';
        let stateStyling = '';
        let errorStyling = '';

        if (props.size === 'small') {
            sizeStyling = 'h-48 px-16 py-11';
        }

        if (context.disabled) {
            stateStyling = 'bg-white opacity-50 cursor-not-allowed';
        }

        if (props.invalid) {
            stateStyling = 'border-red-800 bg-red-100';
            errorStyling = 'text-gray-500';
        }

        const focusStyling = `focus:border-blue-800 focus:ring-4 focus:ring-blue-800 focus:ring-offset-0 ${props.invalid ? 'focus:border-blue-800 focus:text-black' : ''}`;

        const hoverStyling = !context.disabled ? 'hover:bg-blue-200' : '';

        const hoverFocusStyling = `focus:bg-white ${hoverStyling}`;

        return {
            class: [
                'relative',
                'box-border',
                'border',
                'border-2',
                'border-solid',
                'border-blue-800',
                'outline-none',
                sizeStyling,
                stateStyling,
                focusStyling,
                'w-full',
                errorStyling,
                hoverFocusStyling,
            ],
        };
    },
};