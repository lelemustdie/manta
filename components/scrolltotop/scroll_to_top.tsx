"use client"

import ArrowUp from "@/assets/icons/arrow_up";
import {useEffect, useState} from "react";

const ScrollToTop = () => {
    const [isInView, setIsInView] = useState(false);

    const handleScroll = () => {
        const filters = document.getElementById('video');
        if (filters && window.scrollY > filters?.offsetTop) {
            setIsInView(true);
        } else {
            setIsInView(false);
        }
    };

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button
            className="fixed bottom-0 right-0 p-5 m-10 bg-manta-ms-black rounded-2xl"
            style={{
                display: isInView ? 'block' : 'none',
            }}
            onClick={handleClick}
        >
            <ArrowUp />
        </button>
    );
};

export default ScrollToTop;