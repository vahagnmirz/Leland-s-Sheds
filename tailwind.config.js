/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                '1': '1px',
                '2': '2px',
                '3': '3px',
                '4': '4px',
                '5': '5px',
                '6': '6px',
                '7': '7px',
                '8': '8px',
                '9': '9px',
                '10': '10px',
                '_10': '-10px',
                '11': '11px',
                '12': '12px',
                '13': '13px',
                '14': '14px',
                '15': '15px',
                '20': '20px',
                '25': '25px',
                '30': '30px',
                '35': '35px',
                '40': '40px',
                '50': '50px',
                '60': '60px',
                '70': '70px',
                '80': '80px',
                '90': '90px',
                '100': '100px',
                '110': '110px',
                '120': '120px',
                'half': '50%',
                'half_': '-50%',
            },
            height: {
                'fh': '100vh',
            },
            screens: {
                'mobile': '320px',
                'mobile_laptop': '420px',
                'laptop': '668px',
                'desktop': '10240px',
            },
            width: {
                'menu': '300px',
                'can-we-help': '600px',
                'sidebar': '350px',
                'section': 'calc(100% - 400px)',
                'fw': '100vw',
            },
            minHeight: {
                'fh': '100vh',
            },
            minWidth: {
                'fw': '100vw',
            },
            maxWidth: {
                'fw': '100vw',
                '400': '400px',
                '450': '450px',
                '500': '500px',
                'half': '50%',
                '40': '40%',
                '30': '30%',
            },
        },
        colors: {
            white: '#fff',
            black: '#181A1F',
            red: '#E72125',
            menuClose: '#716D6D',
            footer: '#1E1E1E',
            sidebarList: '#716D6D',
            tooltip: '#D9D9D9',
            description: '#444444',
            grey: '#505050',
            lightblue: '#D2D2D2',
        },
        boxShadow: {
            menu: '-4px 4px 4px rgba(0, 0, 0, 0.25);',
            card: '4px 4px 4px rgba(0, 0, 0, 0.25);',
            reviewCard: '0px 4px 4px rgba(0, 0, 0, 0.25);',
        },
        borderWidth: {
            '1': '1px'
        },
        borderRadius: {
            '4': '4px',
            '8': '8px',
            '34': '34px',
            '50': '50px',
        },
        borderColor: {
            'login-input': '#D8DDE9',
            'divider': '#EBEEF5',
            'card': '#C5C5C5',
        },
        fontFamily: {
            volte: 'Volte'
        }
    },
    plugins: [],
}