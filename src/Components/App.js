import React from "react";


function GetCountrie(){
    let countries = [
        {countryCode:234112,countryName:"Israel",capital:"Jerusalem"},
        {countryCode:234113,countryName:"France",capital:"Paris"},
        {countryCode:234114,countryName:"USA",capital:"Woshington"}
    ];
    return countries;
}


function Countries(){
    const countries = GetCountrie();
    return(
        <ul>
            {
                countries.map((c) => 
                    <li>
                        {`[${c.countryCode}] - ${c.countryName} (${c.capital})`}
                    </li>
                )
            }
        </ul>
    );
}

export default Countries;