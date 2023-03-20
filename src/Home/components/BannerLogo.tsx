import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    logo: string;
}

export const BannerLogo: FC<Props> = ({ logo }) => {
    return (
        <Link to="/" className='banner_logo'>
            <img src={ logo } alt="" className='logo'/>
        </Link>
    )
}
