module.exports = {
	content: ['./src/**/*.{html,js,ts,svelte,svx}'],
	darkMode: 'class',
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
				brand: {
					light: '',
					DEFAULT: 'var(--color-brand)',
					dark: ''
				},
				primary: {
					light: '',
					DEFAULT: 'var(--color-primary)',
					dark: ''
				},
				secondary: {
					light: '',
					DEFAULT: 'var(--color-secondary)',
					dark: ''
				},
				info: {
					light: '',
					DEFAULT: 'var(--color-info)',
					dark: ''
				},
				warning: {
					light: '',
					DEFAULT: 'var(--color-warning)',
					dark: ''
				},
				success: {
					light: '',
					DEFAULT: 'var(--color-success)',
					dark: ''
				},
				error: {
					light: '',
					DEFAULT: 'var(--color-error)',
					dark: ''
				}
				// 'button-muted': withOpacity('--color-button-muted')
			},
			textColor: {
				brand: {
					light: '',
					DEFAULT: 'var(--color-brand)',
					dark: ''
				},
				primary: {
					light: '',
					DEFAULT: 'var(--color-primary)',
					dark: ''
				},
				secondary: {
					light: '',
					DEFAULT: 'var(--color-secondary)',
					dark: ''
				},
				accent: {
					light: '',
					DEFAULT: 'var(--color-accent)',
					dark: ''
				},
				info: {
					light: '',
					DEFAULT: 'var(--color-info)',
					dark: ''
				},
				success: {
					light: '',
					DEFAULT: 'var(--color-success)',
					dark: ''
				},
				warning: {
					light: '',
					DEFAULT: 'var(--color-warning)',
					dark: ''
				},
				error: {
					light: '',
					DEFAULT: 'var(--color-error)',
					dark: ''
				}
			}
		}
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
