import { React, useState, useEffect } from 'react';
import Select from 'react-select';
import './App.css';
import { ApiComponent } from './components/api/apicomponent.jsx';
import { fetchCountries } from './components/api/api.jsx';
import { box } from './components/box/box.module.css';
import { Header } from './components/header/header.jsx';
import { SearchAndFilter } from './components/search&filter/search&filter.jsx';
import { searchandfilter } from './components/search&filter/search&filter.module.css';
import style from './components/api/apicomponent.module.css';
import { Search } from './components/search&filter/search';
import { search } from './components/search&filter/search.module.css';
 
function App() {

  //fetching data
  const [countries, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchData = async () => {
    setIsLoading(true);
    const result = await fetchCountries();
    setCountry(result);
    setIsLoading(false)
  };

  useEffect(()=>
  {
    fetchData(); 
  }, []);


  //making themes 
  const [isdarkMode, setisDarkMode] = useState(false);
  const theme = (e) => {e.preventDefault(), isdarkMode ? setisDarkMode(false) : setisDarkMode(true)};

  const boxheaderstyle = {
    backgroundColor: isdarkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)',
    color: isdarkMode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
  }

  const apisearchstyle = {
    backgroundColor: isdarkMode ? 'hsl(209, 23%, 22%)': 'hsl(0, 0%, 100%)'
  }
  
  const icon = isdarkMode ? '☀️' : '🌛';
  const themetext = isdarkMode ? 'Light Mode' : 'Dark Mode';


  //search and select part
  const [searchCountry, setSearchCountry] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (e) => {
    setSearchCountry(e.target.value);
    if (searchCountry !== '') {
      // making selected choice same as search choice
      setIsSelected(e.target.value);
      const selected = countries.filter((selectedResult) => {
      return Object.values(selectedResult).includes(isSelected)});
      setIsSelectedResult(selected);

      //showing search results
      const searchQuery = countries.filter((searchResults) => { 
        return Object.values(searchResults.name).join('').toLowerCase().includes(searchCountry.toLowerCase())});
        setFilteredResults(searchQuery);
    } else {
      setFilteredResults(countries);
    }
  };

// making table with objects of only country names
let unwrap = ({name}) => ({name});
let picked = countries.map(unwrap);
picked['name'] = picked['value'];

//changing key: name to key: value
const newPicked = picked.map(({
  name: value
}) => ({
  value
}));

function extractValue(arr, prop) {
  let extractedValue = arr.map(item => item[prop]);
  return extractedValue};

const result = extractValue(newPicked, 'value');


//adding new key: value to complete requirements for Select from React
newPicked.forEach(object => {
  object.label = object.value
    }
);

//adding function to Select in order to look for a selected country
const [isSelected, setIsSelected] = useState('');
const [isSelectedResult, setIsSelectedResult] = useState([]);

const handleSelect = (selectedCountry) => {
  
  const selectQuery = selectedCountry.value;
  setIsSelected(selectQuery);
  if (selectedCountry !== '') {

    //making searched choice disappear
    setSearchCountry('pandka mała śpiewa i tańczy');
    const searchQuery = countries.filter((searchResults) => { 
    return Object.values(searchResults).join('').toLowerCase().includes(searchCountry.toLowerCase())});
    setFilteredResults(searchQuery);

    //setting selected choice to be viewed
    const selected = countries.filter((selectedResult) => {
    return Object.values(selectedResult).includes(selectQuery)}) 
    setIsSelectedResult(selected);
      
} else {
  setIsSelectedResult(countries);
}}

  //results of the App visible on the screen
  return(
    <>
      <Header onClick={theme} style={boxheaderstyle} > {icon} {themetext} 
      </Header>
    <>
      <SearchAndFilter action="index.html" method="POST" className={searchandfilter} style={apisearchstyle}>

        <Search type="search" placeholder="🔍 Search for a country..." className={search} onChange={handleSearch}>
        </Search>

        <Select options={newPicked} onChange={handleSelect}>
        </Select>

      </SearchAndFilter>
    
    </>
  
      <div className={box} style={boxheaderstyle} >  
        {  isLoading === true &&
        <span>Data is loading...</span>}
        {searchCountry.length > 1 ? 
          (filteredResults.map((searchResults) => {

            return(

              <ApiComponent
                key={Math.random()}
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
          
          :

          (countries && countries.map((country)=> {
          
          return(
          
              <ApiComponent
                key={Math.random()}
                className={style.wrapper}
                src={country?.flag}
                country={country?.name}
                capital={country?.capital}
                population={country?.population.toLocaleString()}
                region={country?.region}
                style={apisearchstyle}
              />
          
                )
            })
          )} 
          {isSelected.length > 1 ? 
            (isSelectedResult.map((selectedResult) => {
              
              return(

                <ApiComponent
                    key={Math.random()}
                    className={style.wrapper}
                    src={selectedResult?.flag}
                    country={selectedResult?.name}
                    capital={selectedResult?.capital}
                    population={selectedResult?.population.toLocaleString()}
                    region={selectedResult?.region}
                    style={apisearchstyle}
                />
                    )
            })  
            ) 

              :

          (countries && countries.map((country)=> {
              
            return(
              
              <ApiComponent
                key={Math.random()}
                className={style.wrapper}
                src={country?.flag}
                country={country?.name}
                capital={country?.capital}
                population={country?.population.toLocaleString()}
                region={country?.region}
                style={apisearchstyle}
              />
              
                  )
            })
            )
          }

    </div> 
    </>
)
}

export default App
