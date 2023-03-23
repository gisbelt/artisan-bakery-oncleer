import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    logo: string;
}

export const BannerLogo: FC<Props> = ({ logo }) => {
    return (
        <Link to="/" className='banner_logo'>
            <img src={ logo } alt="" className='logo' data-aos="zoom-in" data-aos-delay="400"/>
        </Link>
    )
}
