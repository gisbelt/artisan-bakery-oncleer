import { useRef } from "react";
import { gsap } from "gsap";
import useIsTouchDevice from "../hooks/useIsTouchDevice";

interface Events extends Event {
    currentTarget: HTMLElement
    pageX: number
    pageY: number
}

export const Test = () => {

    const image1 = "/assets/img/macarons1.jpg";
    const image2 = "/assets/img/macarons3.webp";
    const refImage1 = useRef<HTMLDivElement>(null);
    const refImage2 = useRef<HTMLDivElement>(null);
    const isMouseEnterClass = 'is-mouse-enter';
    const isTouch = useIsTouchDevice()
    let currentRef: HTMLElement | null = null;

    const changeCurrentRef = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        const dataId = e.currentTarget.dataset.id;
        currentRef = refImage1.current;
        if (dataId === "2") currentRef = refImage2.current;
    }

    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        changeCurrentRef(e);
        if(currentRef) currentRef.classList.add(isMouseEnterClass);
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        changeCurrentRef(e);
        if(currentRef) currentRef.classList.remove(isMouseEnterClass);
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        changeCurrentRef(e);
        if(currentRef) {
            currentRef.classList.add(isMouseEnterClass);
            parallaxNode(e, currentRef, -100);
        }
    }

    const parallaxNode = (e: React.MouseEvent<HTMLAnchorElement>, target: HTMLElement, movement: number): void => {
        let nodeBunds = e.currentTarget.getBoundingClientRect();
        let relX = e.pageX - nodeBunds.left;
        let relY = e.pageY - nodeBunds.top;
        gsap.to(target, {
            duration: 1,
            x: (relX - nodeBunds.width / 2) / nodeBunds.width * movement,
            y: (relY - nodeBunds.height / 2) / nodeBunds.height * movement,
        });
    }


    const mouseEvents = isTouch
        ? null
        : {
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            onMouseMove: handleMouseMove
        };


    return (
        <>
            <div 
                className="contenedor"
            >
                <a href="" data-id={'2'} onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave } onMouseMove={ handleMouseMove } >Pon tu mouse aquí</a>
            </div>

            <div>
                <div ref={refImage1} className="contenedor_img">
                    <img src={image1} alt="" />
                </div>
                <div ref={refImage2} className="contenedor_img">
                    <img src={image2} alt="" />
                </div>
            </div>
        </>
      
    )
}
