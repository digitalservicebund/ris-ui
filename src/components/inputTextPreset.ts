// InputTextPreset.ts
interface InputTextProps {
    value?: string;
    size?: 'small' | 'large';
    placeholder?: string;
    invalid?: boolean;
}

interface InputTextContext {
    disabled: boolean;
}

interface InputTextAttrs {
    readonly: boolean;
}

interface InputTextParent {
    $name: string;
}

export default {
    root: ({ props, context, attrs, parent }: { props: InputTextProps; context: InputTextContext; attrs: InputTextAttrs, parent:InputTextParent }) => {
        let sizeStyling = 'h-64 px-24';
        let stateStyling = '';
        let errorStyling = '';
        let readOnlyStyling = '';
        const isReadOnly = attrs.readonly;

        if (isReadOnly) {
            readOnlyStyling = 'bg-blue-300 border-transparent cursor-not-allowed text-gray-600';
        }

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

        const isPartOfInputGroup = parent.instance.$name === 'InputGroup';

        const focusStyling = !isReadOnly && !isPartOfInputGroup ? `focus:border-blue-800 focus:ring-4 focus:ring-blue-800 focus:ring-offset-0 ${props.invalid ? 'focus:border-blue-800 focus:text-black' : ''}` : '';

        const hoverStyling = !context.disabled && !isReadOnly && !isPartOfInputGroup ? 'hover:bg-blue-200' : '';

        const hoverFocusStyling = !isReadOnly && !isPartOfInputGroup ? `focus:bg-white ${hoverStyling}` : '';

        const parentStyling = isPartOfInputGroup ? 'border-none' : '';

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
                parentStyling,
                readOnlyStyling
            ],
        };
    },
};