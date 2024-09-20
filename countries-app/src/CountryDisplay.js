const CountryDisplay = (props) => {
    const { info } = props;
    if(info === null)
        return 
    
    console.log(Object.values(info.languages))

    return <div>
        <h1>{info.name.common}</h1>
        <p>Capital: {info.capital}</p>
        <p>Area: {info.area}</p>
        <p>languages: </p>
        <ul>{Object.values(info.languages).map(lang => {
            return <li>{lang}</li>
        })}
        </ul>
        
        <img className="flag" src={info.flags.png}></img>
    </div>
}



export default CountryDisplay;