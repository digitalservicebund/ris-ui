interface InputTextProps {
    value?: string;
    size?: 'small' | 'large';
    placeholder?: string;
    readOnly?: boolean;
    error?: boolean;
    variant?: 'filled';
    invalid?: boolean;

}

interface InputTextContext {
    disabled: boolean;
    readOnly: boolean;
}

export default {
    root: ({ props, context }: { props: InputTextProps; context: InputTextContext }) => {

        let sizeStyling = 'h-64 px-24';
        let stateStyling = '';
        let errorStyling = '';
        let successStyling = '';

        if (props.size === 'small') {
            sizeStyling = 'h-48 px-16 py-11';
        }

        if (context.disabled) {
            stateStyling = 'bg-white opacity-50 cursor-not-allowed';
        } else if (props.readOnly) {
            stateStyling = 'bg-blue-200 border-transparent cursor-not-allowed';
        } else if (props.variant === 'filled') {
            successStyling = 'border-green-800 text-gray-500';
        } else if (props.invalid) {
            stateStyling = 'border-red-800 bg-red-100';
            errorStyling = 'text-gray-500';
        }

        const focusStyling = 'focus:ring-2 focus:ring-blue-800 focus:ring-offset-0';

        const hoverStyling = !context.disabled ? 'hover:bg-blue-200' : '';
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
                successStyling,
                'w-full',
                !context.disabled && hoverStyling,
                errorStyling,
            ],
        };
    },
};