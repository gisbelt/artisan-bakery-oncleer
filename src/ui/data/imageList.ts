import shape03 from '/assets/img/shape-03.svg'
import shape09 from '/assets/img/shape-09.svg'
import shape10 from '/assets/img/shape-10.svg'
import shape11 from '/assets/img/shape-11.svg'

import blondie from '/assets/img/blondie.webp'
import tortaOreo from '/assets/img/torta-oreo.webp'
import tortaChocolate from '/assets/img/torta-chocolate.webp'
import cakes from '/assets/img/cakes.webp'
import premio from '/assets/img/premio.webp'
import macarons2 from '/assets/img/macarons2.webp'
import panJamon from '/assets/img/pan-de-jamon.webp'
import cheesecakess from '/assets/img/cheesecakess.webp'
import bocado1 from '/assets/img/bocado1.webp'

import bocado3 from '/assets/img/bocado3.jfif'
import bocado4 from '/assets/img/bocado4.jfif'
import cajaBocados from '/assets/img/caja-bocados.jfif'
import cajaMacarons from '/assets/img/caja-macarons.jfif'
import macarons3 from '/assets/img/macarons3.webp'
import tortaPeque from '/assets/img/caja-torta-peque.jfif'
import tortaMajar from '/assets/img/torta-manjar.webp'

interface Image {
    id: number;
    src: string;
    alt: string;
    class: string;
}

export const shapesImageList = [
    { id: 1, src: shape03, alt: '', class: 'shape03' },
    { id: 2, src: shape09, alt: '', class: 'shape09' },
    { id: 3, src: shape10, alt: '', class: 'shape10' },
    { id: 4, src: shape11, alt: '', class: 'shape11' },
];

export const gridImageList = [
    { id: 1, src: bocado3, alt: '', class: '' },
    { id: 2, src: bocado4, alt: '', class: '' },
    { id: 3, src: tortaChocolate, alt: '', class: '' },
    { id: 4, src: cajaBocados, alt: '', class: '' },
    { id: 5, src: cajaMacarons, alt: '', class: '' },
    { id: 6, src: macarons3, alt: '', class: '' },
    { id: 7, src: panJamon, alt: '', class: '' },
    { id: 8, src: tortaPeque, alt: '', class: '' },
    { id: 9, src: tortaMajar, alt: '', class: '' },
];

export const cakesParallaxImageList: Image[] = [
    { id: 1, src: "/assets/img/torta6.jfif", alt: "Image 1", class: '' },
    { id: 2, src: "/assets/img/torta-chocolate2.jfif", alt: "Image 2", class: '' },
    { id: 3, src: "/assets/img/torta4.jfif", alt: "Image 3", class: '' },
    { id: 4, src: "/assets/img/torta3.jfif", alt: "Image 4", class: '' },
    { id: 5, src: "/assets/img/bocado-grande.jfif", alt: "Image 5", class: '' },
    { id: 6, src: "/assets/img/caja-macarons.jfif", alt: "Image 6", class: '' },
    { id: 7, src: "/assets/img/torta2.jfif", alt: "Image 7", class: '' },
    { id: 8, src: "/assets/img/torta1.jfif", alt: "Image 8", class: '' },
    { id: 9, src: "/assets/img/caja-bocados.jfif", alt: "Image 9", class: '' },
    { id: 10, src: "/assets/img/bocado4.jfif", alt: "Image 10", class: '' },
    { id: 11, src: "/assets/img/cheesecakess.webp", alt: "Image 11", class: '' },
    { id: 11, src: "/assets/img/macarons1.jpg", alt: "Image 12", class: '' },
];