import { MutableRefObject, useEffect, useRef } from 'react';

interface useIngfniteScrollOptions{
    callback:()=> void;
    triggerRef:MutableRefObject<HTMLElement>
    wrapperRef:MutableRefObject<HTMLElement>
}

export function useInfiniteScroll({ callback, triggerRef, wrapperRef }:useIngfniteScrollOptions) {
    useEffect(() => {
        const options = {
            root: wrapperRef.current,
            rootMargin: '0px',
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(() => {

        }, options);

        observer.observe(triggerRef.current);

        return () => {
            if (observer) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerRef.current);
            }
        };
    }, [triggerRef, wrapperRef]);
}
