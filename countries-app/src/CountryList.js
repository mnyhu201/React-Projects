import './App.css';

const CountryList = (props) => {
    const { currCountry, setCurrCountry, countries} = props; 
    if(countries === null || currCountry !== null){
        return 
    } 
    if(countries.length > 10){
        return <div>Too many matches, please specify further</div>
    } 

    return countries.map(ctr => 
        <div key={ctr}>
            {ctr}
            <ShowInfoButton 
                setCurrCountry={setCurrCountry}
                country={ctr}/>
        </div>
    )
}

const ShowInfoButton = (props) => {
    const { setCurrCountry, country } = props; 

    const onShowInfo = () => {
        setCurrCountry(country);
    }

    return <button onClick={onShowInfo}>show</button>
}


export default CountryList;
        
   
    

