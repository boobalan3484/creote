import React, { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css'; // Import CSS for Splide

const list_items =
    [
        { brands: 'cecode-brand-1.png' },
        { brands: 'cecode-brand-2.png' },
        { brands: 'cecode-brand-3.png' },
        { brands: 'cecode-brand-4.png' },
        { brands: 'cecode-brand-5.png' },
    ]

const AutoScrollCarousel = () => {
    const splideRef = useRef(null);

    useEffect(() => {
        if (splideRef.current) {
            const splide = new Splide(splideRef.current, {
                type: 'loop',
                drag: 'free',
                focus: 'center',
                pagination: false,
                arrows: false,
                autoScroll: {
                    speed: 0.5, // Adjust the scroll speed
                },
                perPage: 5, // Default for xl and larger screens
                breakpoints: {
                    1200: { // lg breakpoint
                        perPage: 4,
                    },
                    992: { // md breakpoint
                        perPage: 3,
                    },
                    768: { // sm breakpoint
                        perPage: 2,
                    },
                    // 576: { // xs breakpoint
                    //     perPage: 1,
                    // },
                },
            });

            splide.mount({ AutoScroll }); // Mount with AutoScroll extension
        }
    }, []);

    return (
        <div className="splide my-3" ref={splideRef}>
            <div className="splide__track">
                <ul className="splide__list">
                    {list_items.map((item, idx) => (
                        <li className="splide__slide" key={idx}>
                            <img src={`/images/client/${item.brands}`} alt="brands" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AutoScrollCarousel;
