export default {
    root: ({props, context, instance}) => ({
        class: [
            'inline-flex',
            'items-center',
            'justify-center',
            'font-bold',
            'text-center',
            'max-w-full',
            'leading-24',
            'rounded-none',
            'box-border',
            'border',
            "border-2",
            !context.disabled && 'focus:outline-none focus:ring-4 focus:ring-offset-4',

            // Default size settings
            !props.size && 'py-8 px-16 text-base min-h-48',

            // Icon position adjustments for Large size
            instance.hasIcon && props.size === 'large' && props.label ? (
                props.iconPos === 'left' ? 'pl-20 pr-24 gap-8' :
                    props.iconPos === 'right' ? 'pl-24 pr-20 gap-8' : ''
            ) : '',

            // Icon position adjustments for Small size
            instance.hasIcon && (!props.size || props.size === 'small') && props.label ? (
                props.iconPos === 'left' ? 'pl-12 pr-16 gap-4' :
                    props.iconPos === 'right' ? 'pl-16 pr-12 gap-4' : ''
            ) : '',

            // Adjustments for when there is an icon but no label
            instance.hasIcon && !props.label ? 'p-0 gap-0' : '',

            // Size adjustments
            props.size === 'large' ? (
                props.label ? 'py-20 px-24 text-[1.125rem] min-h-64' : 'w-64 h-64'
            ) : (
                props.label ? 'py-8 px-16 text-base min-h-48' : 'w-48 h-48'
            ),

            // Primary severity styles
            props.severity === 'primary' && `
                bg-blue-800 border-transparent text-white
                ${context.disabled ? 'bg-gray-400 cursor-not-allowed text-gray-600' : 'hover:bg-blue-700'}
                active:bg-blue-500 active:text-blue-800
                focus:outline-none focus:ring-blue-800 focus:ring-4 focus:ring-offset-4
            `,

            // Secondary severity styles
            props.severity === 'secondary' && `
                bg-white text-blue-800 border-solid border-blue-800
                ${context.disabled ? 'bg-white cursor-not-allowed text-blue-800 text-opacity-50 border-blue-800 border-opacity-50' : 'hover:bg-gray-200 active:bg-white active:text-blue-800 active:border-transparent'}
                focus:outline-none focus:ring-blue-800 focus:ring-4 focus:ring-offset-2 focus:bg-gray-200
            `,

            // Ghost severity styles
            props.severity === 'ghost' && `
                bg-transparent text-blue-800 border-transparent
                ${context.disabled ? 'cursor-not-allowed text-gray-800 text-opacity-50' : 'hover:bg-white hover:border-gray-500 hover:border-2 hover:border-solid active:bg-white active:border-transparent'}
                focus:outline-none focus:ring-blue-800 focus:ring-4 focus:ring-offset-4 focus:bg-white focus:border-gray-500 focus:border-2 focus:border-solid
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