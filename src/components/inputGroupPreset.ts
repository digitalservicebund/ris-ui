export default {
    root: () => {
        return {
            class: [
                'relative',
                'flex',
                'items-center',
                'border',
                'border-2',
                'border-solid',
                'border-blue-800',
                'w-full',
                'bg-white',
                'transition-colors',
                'duration-200',
                'ease-in-out',
                'hover:bg-blue-200',
                'focus-within:border-blue-800',
                'focus-within:ring-4',
                'focus-within:ring-blue-800',
                'focus-within:ring-offset-0'
            ],
        };
    },
};