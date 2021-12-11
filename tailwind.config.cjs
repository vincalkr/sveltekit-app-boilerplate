function withOpacity (variableName) {
	return ({ opacityValue }) => {
			if (opacityValue) {
					return `rgba(var(${variableName}), ${opacityValue})`;
			}
			return `rgb(var(${variableName}))`;
	};
}

module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,ts,svelte,svx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				lg: '1124px',
				xl: '1124px',
				'2xl': '1124px'
			}
		},
		extend: {
			backgroundColor: {
				primary: {
					light: 'var(--color-primary)',
					DEFAULT: 'var(--color-primary)',
					dark: 'var(--color-primary-dark)',
				},
				'button-muted': withOpacity('--color-button-muted')
			},
			textColor: {
				primary: 'var(--color-text-primary)'
			}
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography')
	]
};
