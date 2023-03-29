import { Heading } from '../heading/heading.jsx';
import { ColorTheme } from '../colortheme/colortheme.jsx';
import { heading } from '../heading/heading.module.css';
import { colortheme } from '../colortheme/colortheme.module.css';
import { header } from '../header/header.module.css';


export const Header = ({ className, onClick, style, children }) => {

    return(
        
        <header className={header} style={style}>

            <Heading className={heading}> 
                Where in the world?
            </Heading>

            <ColorTheme className={colortheme} onClick={onClick}>
                {children}
            </ColorTheme>

        </header>
    )
}



