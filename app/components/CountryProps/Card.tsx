import Link from 'next/link'
import React from 'react'

type Props1 = {
    Name: string,
    Capital: string
    Population: number,
}

const CountryDetailCard = ({Name,Capital,Population}: Props1) => {
  return (
    <div className=" bg-green-500 shadow-black px-14 font-bold text-white">
      <div className="text-6xl text-black py-2 "> {Name}</div>
      <div className="text-4xl py-3 my-2"> <strong className='text-black'>Capital</strong>  : {Capital}</div>
      <div className="text-4xl py-3"><strong className='text-black'>Population</strong> : {Population}</div>

      <button className="bg-green-900 ml-2 mt-5 mb-5 text-lg px-6 py-2 rounded-full duration-100 text-white hover:ease-linear hover:scale-110 ">
        <Link href={"/country"}> Back</Link>{" "}
      </button>
    </div>
  )
}

export default CountryDetailCard