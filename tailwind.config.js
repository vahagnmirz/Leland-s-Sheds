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
                '22.5': '22.5px',
                '25': '25px',
                '30': '30px',
                '32': '32px',
                '35': '35px',
                '40': '40px',
                '50': '50px',
                '54': '54px',
                '60': '60px',
                '62': '62px',
                '70': '70px',
                '80': '80px',
                '90': '90px',
                '100': '100px',
                '110': '110px',
                '120': '120px',
                '130': '130px',
                '135': '135px',
                '270': '270px',
                '400': '400px',
                '850': '850px',
                '1700': '1500px',
                'half': '50%',
                'half_': '-50%',
            },
            screens: {
                'mobile': '320px',
                'mobile_laptop': '420px',
                'laptop': '768px',
                'desktop': '1024px',
                'large_desktop': '1300px',
            },
            height: {
                'fh': '100vh',
                'card-img': '250px',
                '200': '200px',
                '250': '250px',
                '300': '300px',
                '370': '370px',
                '400': '400px',
                '630': '630px',
            },
            width: {
                '700': '700px',
                '670': '670px',
                '400': '400px',
                '500': '500px',
                'card-img': '350px',
                'menu': '300px',
                'can-we-help': '600px',
                'sidebar': '350px',
                'section': 'calc(100% - 400px)',
                'fw': '100vw',
                'contentLeft': '745px',
            },
            minHeight: {
                'fh': '100vh',
                'layout': 'calc(100vh - 186px)',
                '200': '200px',
                '400': '400px',
            },
            maxHeight: {
                'fh': '100vh',
                '200': '200px',
                '370': '370px',
                '400': '400px',
            },
            minWidth: {
                'fw': '100vw',
                '300': '300px',
                '360': '360px',
                '425': '425px',
                '460': '460px',
                '560': '560px',
            },
            maxWidth: {
                'fw': '100vw',
                '190': '190px',
                '350': '350px',
                '400': '400px',
                '450': '450px',
                '500': '500px',
                '550': '550px',
                '600': '600px',
                '700': '700px',
                '800': '800px',
                'half': '50%',
                '45': '45%',
                '40': '40%',
                '30': '30%',
            },
        },
        lineHeight: {
            '4.5': '18px',
            '20': '20px',
            '25': '25px',
        },
        zIndex: {
            '_2': '-2',
            '_1': '-1',
            '1': '1',
            '2': '2',
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
            gray: '#6F6C6C',
            'gray-1': '#3C3C3C',
            'gray-2': '#808080',
            grey: '#505050',
            lightblue: '#D2D2D2',
        },
        boxShadow: {
            menu: '-4px 4px 4px rgba(0, 0, 0, 0.25);',
            card: '4px 4px 4px rgba(0, 0, 0, 0.25);',
            reviewCard: '0px 4px 4px rgba(0, 0, 0, 0.25);',
            header: '0px 2px 4px rgba(0, 0, 0, 0.25);',
        },
        dropShadow: {
            rentImg: 'filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));',
        },
        borderWidth: {
            '1': '1px',
            '2': '2px',
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