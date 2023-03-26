import React, { FunctionComponent, useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";

interface Props {
    lineContent: string;
    className: string;
}

export const Title: FunctionComponent<Props> = ({ lineContent, className }) => {

    let line1 = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        if (line1.current) {
          gsap.from([line1.current], 0.8, {
            delay: 0.1,
            ease: "power3.out",
            y: 0,
            stagger: {
              amount: 0.15
            }
          });
        }
    }, [line1]);

    return (
        <h1 ref={line1} className={ className } data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="400">
            {lineContent}
        </h1>
    )
}
