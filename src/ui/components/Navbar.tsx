import { FunctionComponent, useEffect, useRef, useState } from 'react';
import hamburger from "/assets/icons/hamburger.svg";
import x from "/assets/icons/x.svg";
import '../Navbar.css'

interface MenuItem {
    label: string;
    path: string;
    icon: string;
}
  
interface Props {
    items: MenuItem[];
}   

export const Navbar: FunctionComponent<Props> = ({ items }) => {

    const [showMenu, setShowMenu] = useState<boolean>( false )
    const [icon, setIcon] = useState<string | boolean>("bi bi-list")
     //Close menú when click items for mobile mode
     const closeMenu = () => {
        setShowMenu( !showMenu )
        setIcon( !icon )
    }
    //toggle menu for mobile mode
    const handleToggle = () =>{
        setShowMenu( !showMenu )
        setIcon( !icon )
    }  

    const [showNav, setShowNav] = useState<boolean>( false )
    const hoverNav = () => {
       setShowNav(!showNav)
    }

    const [scrolled, setScrolled] = useState<boolean>(false);
    const scrollPosition = useRef<number>(0);

    useEffect(() => {
        const handleScroll = () => {
          const currentPosition = window.pageYOffset;
          setScrolled(currentPosition > scrollPosition.current);
          scrollPosition.current = currentPosition;
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
          window.removeEventListener("scroll", handleScroll);
          window.removeEventListener("mouseover", hoverNav)
        };
    }, []);

    return (
        <div className='header'>
            <button className={`header_button ${scrolled ? 'scrolled' : ''}`} onClick={handleToggle}>
                <span className="header_icon">
                    {
                        icon ? <img src={ hamburger } alt="" /> : <img src={ x } alt="" />
                    }                            
                </span>
            </button>
            <nav 
                className={`nav ${scrolled ? 'scrolled' : ''} ${showMenu ? 'isActive' : ''} ${showNav ? 'nav-hover' : ''}`}
                onMouseEnter={ hoverNav }
                onMouseLeave={ hoverNav }
            >
                {items.map((item, index) => (
                    <a key={index} href={item.path} >
                        <i className={`${item.icon}`}></i>
                        {item.label}
                    </a>
                ))}
            </nav>
        </div>
    )
}
