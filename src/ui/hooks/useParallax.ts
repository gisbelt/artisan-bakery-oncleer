import { useEffect, useState } from "react";
import * as basicScroll from 'basicscroll'

const useParallax = () => {
    useEffect(() => {
        const parallaxSections = document.querySelectorAll(".js-parallax-section");

        parallaxSections.forEach((parallaxSection) => {
        const from = parallaxSection.getAttribute("data-from") || "0px";
        const to = parallaxSection.getAttribute("data-to") || "100px";

        const instance = basicScroll.create({
            elem: parallaxSection,
            from: "top-middle",
            to: "bottom-middle",
            direct: true,
            props: {
            "--ty": {
                from,
                to,
            },
            },
        });

        instance.start();
        });
    }, []);

    const [debugMode, setDebugMode] = useState(false);
    const toggleDebugMode = () => {
        setDebugMode((prev) => !prev);
        document.body.classList.toggle("is-debug");
    };

    // return {
    //     toggleDebugMode,
    //     debugMode
    // }
};

export default useParallax;
