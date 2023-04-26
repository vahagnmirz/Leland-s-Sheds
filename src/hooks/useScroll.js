import { useEffect, useState } from 'react';

export default function useScroll() {
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const scroll = window.scrollY;
        if (scroll > 0) setScrollTop(scroll);
    });

    return {
        scrollTop
    }
}