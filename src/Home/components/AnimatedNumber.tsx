import CountUp from 'react-countup';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
    number: number;
}

export const AnimatedNumber = (props: Props) => {

    const [inViewRef, inView] = useInView({ threshold: 0.5 });
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (inView) {
          setAnimate(true);
        }
    }, [inView]);

    return (
        <span ref={inViewRef} className="count">
            <CountUp end={props.number} duration={2.5} start={animate ? 1 : undefined} />
        </span>
    )
}
