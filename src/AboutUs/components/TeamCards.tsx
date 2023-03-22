import { FC } from "react";

interface SocialMedia {
    title: string;
    href: string;
    icon: string;
}

interface Team {
    img: string;
    alt?: string;
    name: string;
    description: string;
    socialMedia: SocialMedia[];
}

interface Props {
    items: Team[];
}

export const TeamCards: FC<Props> = ({ items }) => {
    return (
        <>
            {
                items.map((item, index) => (
                    <div className="card" key={ index }>
                        <div className="card_image">
                            <img src={ item.img } alt={ item.alt } />
                        </div>
                        <div className="card_info">
                            <h3>{ item.name }</h3>
                            <p>{ item.description }</p>
                            <ul className="card_info_socials" >
                            {
                                item.socialMedia.map((social, index) => (
                                    <li key={ index }>
                                        <a href={ social.href } title={ social.title } >
                                            <i className={`bi bi-${social.icon}`}></i>
                                        </a>
                                    </li>
                                ))
                            }
                            </ul>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
