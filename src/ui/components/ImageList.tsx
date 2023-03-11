
interface Image {
    id: number;
    src: string;
    alt: string;
    class: string;
}
  
interface Props {
    images: Image[];
}
  
export const ImageList = (props: Props) => {
    return (
        <>
          {props.images.map((image) => (
            <img key={image.id} src={image.src} alt={image.alt} className={image.class} />
          ))}
        </>
    );
}
