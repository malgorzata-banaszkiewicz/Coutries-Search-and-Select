import { ApiComponent } from "./apicomponent";


export const ApiFiltered = () => {
    return(
        (filteredResults.map((searchResults) => {
            return(
              <ApiComponent
                className={style.wrapper}
                src={searchResults?.flag}
                country={searchResults?.name}
                capital={searchResults?.capital}
                population={searchResults?.population.toLocaleString()}
                region={searchResults?.region}
                style={apisearchstyle}
              />
            )
        })  
        ) 
    )
} 