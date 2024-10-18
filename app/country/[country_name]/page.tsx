import React from 'react'
import { countryDataTypes } from '@/types/types'
import CountryDetailCard from '@/app/components/CountryProps/Card';

const countryNames = ({params}:{params:{country_name:string}}) => {
    const countrydata : countryDataTypes[]=[
        {
            Name:"Japan",
            Capital:"Tokyo",
            Population:2233454,
        },
        {
            Name:"Bhutan",
            Capital:"Thimphu",
            Population:7863454,
        },
        {
            Name:"Bangladesh",
            Capital:"Dhaka",
            Population:1323454,
        },
        {
            Name:"India",
            Capital:"Dehli",
            Population:7803454,
        },
        {
            Name:"Pakistan",
            Capital:"Islamabad",
            Population:34345689,
        },
    ];

    const country = countrydata.find((c)=>c.Name.toLowerCase() === params.country_name.toLowerCase());
    if(!country){
        return <h1 className='text-center text-3xl font-semibold my-10'>Country Not Found!</h1>

    }
  return (
    <div>

        <CountryDetailCard
        Name={country.Name}
        Capital={country.Capital}
        Population={country.Population}
      />
        
    </div>
  )
}

export default countryNames