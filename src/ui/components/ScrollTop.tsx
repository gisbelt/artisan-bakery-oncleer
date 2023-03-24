import React, { useEffect, useState } from 'react'
import '../ScrollTop.css'

export const ScrollTop = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        } else if (scrolled <= 300){
            setVisible(false)
        }
    };
    
    const scrollToTop = () =>{
        window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
            in place of 'smooth' */
        });
    };
    
    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible)
    }, [visible]);

    return (
        <button 
            className='scroll-top'
            onClick={ scrollToTop }
            style={{display: visible ? 'flex' : 'none'}}
        >
            <i className='bi bi-arrow-up-circle-fill' />
        </button>
    )
}

// Por hacer:
// Poner data en tarjetas de tabs children 
// Hacer scroll cuando se especifica una url (chatgpt) 
// Hacer gif y agregar al portafolio 
// Pner repositorio publico 