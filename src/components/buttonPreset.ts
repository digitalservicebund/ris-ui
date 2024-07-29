export default {
    root: ({props, context, instance}) => ({
        class: [
            'inline-flex',
            'items-center',
            'justify-center',
            'font-bold',
            'leading-[1.375]',
            'text-center',
            'max-w-full',
            'rounded-none',
            'box-border',

            // Icon position adjustments
            instance.hasIcon && props.iconPos === 'left' && props.label ? 'pl-20 pr-24 gap-8' : '',
            instance.hasIcon && props.iconPos === 'right' && props.label ? 'pl-24 pr-20 gap-8' : '',
            instance.hasIcon && !props.label ? 'p-0 gap-0' : '',

            // Size adjustments
            props.label && props.size === 'large' ? 'py-[1.21875rem] px-24 text-[1.125rem] leading-[1.3888] min-h-64' : '',
            !props.label && props.size === 'large' ? 'w-64 h-64' : '', // Large button without label
            !props.label && props.size !== 'large' ? 'w-48 h-48' : '', // Small button without label
            props.label && props.size !== 'large' ? 'py-[0.5625rem] px-16 text-base min-h-48' : '', // Regular size with label

            props.severity === 'primary' && `
                bg-blue-800 border border-2 border-transparent
                ${context.disabled ? 'bg-gray-400 cursor-not-allowed text-gray-600' : ''}
                ${!context.disabled ? 'hover:bg-blue-700 text-white' : ''}
                active:bg-blue-500 active:text-blue-800
                focus:outline-none focus:ring-blue-800 focus:ring-4 focus:ring-offset-4
            `,

            // Secondary severity styles
            props.severity === 'secondary' && `
                bg-white text-blue-800 border border-2 border-solid border-blue-800
                ${!context.disabled && !context.active ? 'hover:bg-gray-200' : ''}
                active:bg-white active:text-blue-800 active:border-transparent
                focus:outline-none focus:ring-blue-800 focus:ring-4 focus:ring-offset-2 focus:bg-gray-200
                 ${context.disabled ? 'bg-white cursor-not-allowed text-blue-800 text-opacity-50 border-blue-800 border-opacity-50' : ''}
            `,

            // Base ghost styles
            props.severity === 'ghost' && `
                bg-transparent text-blue-800 border-2 border-transparent
                ${!context.disabled && !context.active ? 'hover:bg-white hover:border-gray-500 hover:border-2 hover:border-solid' : ''}
                active:bg-white active:border-transparent
                focus:outline-none focus:ring-blue-800 focus:ring-4 focus:ring-offset-4 focus:bg-white focus:border-gray-500 focus:border-2 focus:border-solid
               ${context.disabled ? 'cursor-not-allowed text-gray-800 text-opacity-50' : ''}
            `,

        ]
    }),
    label: ({ props }) => ({
        class: [
            {'underline': props.severity === 'ghost'},
            { 'sr-only': !props.label }
        ]
    }),
    icon: ({ props }) => ({
        class: [
            'text-base leading-4',
            'mx-0',
            {
                'mr-2': props.iconPos == 'left' && props.label != null,
                'ml-2 order-1': props.iconPos == 'right' && props.label != null,
                'no-underline': props.severity === 'ghost',
                'mx-0': !props.label
            }
        ]
    }),
}