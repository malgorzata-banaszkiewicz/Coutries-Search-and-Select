import { Flag } from '../flag/flag.jsx';
import { CountryName } from '../countryname/countryname.jsx';
import { Population } from '../population/population.jsx';
import { Region } from '../region/region.jsx';
import { Capital } from '../capital/capital.jsx';
import { countrytitles } from '../countryname/countryname.module.css';
import { text } from '../api/text.module.css';
import { apidata } from '../api/apidata.module.css';
import { titleplusapi } from './titleplusapi.module.css';


export const ApiComponent = ({ country, capital, population, region, src, className, style, children}) => {
    
    return(
        <div className={className} style={style}>
            {children}

            <figure>
                <Flag src={src} alt={`Flag of a country: ${country}`}></Flag>
            </figure>
            
            <div className={text}>
                <CountryName country={country} className={countrytitles}></CountryName>
                <div className={titleplusapi}>

                    Population:
                    <Population population={population} className={apidata}>
                    </Population>
                </div>
                <div className={titleplusapi}>

                    Region: 
                    <Region region={region} className={apidata}>
                    </Region>
                </div>
                <div className={titleplusapi}>

                    Capital:
                    <Capital capital={capital} className={apidata}>
                    </Capital>
                </div>
            </div>
        </div>
        
        
    )
}
