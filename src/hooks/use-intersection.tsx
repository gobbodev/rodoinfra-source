import { useState, useEffect } from 'react'

export const useIntersection = (element) => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        const configs = {
            rootMargin: '-100px 0px',
            root: null,
            threshold: 0.000001
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            }, configs
        );

        element.current && observer.observe(element.current);

        return () =>  element.current && observer?.unobserve(element.current);
    }, []);

    return isVisible;
};