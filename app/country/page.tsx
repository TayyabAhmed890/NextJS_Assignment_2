import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";

const Countries = () => {
  return (
    <div>
        <Navbar/>
        <div className="h-max w-[100vw] bg-black pb-6 font-semibold">
            <h1 className="text-4xl text-center text-white py-8">Country List</h1>
            <ul className=" list-none flex justify-center flex-col items-center gap-4 text-white text-center"> 
                <li className="text-lg py-2 bg-green-700 rounded-lg w-[330px] duration-100 hover:ease-linear hover:scale-110 hover:bg-green-500 ">
                  <Link className="p-36 py-1" href={"/country/Japan"}> Japan </Link></li>

                <li className="text-lg py-2 bg-green-700 rounded-lg w-[330px] duration-100 hover:ease-linear hover:scale-110 hover:bg-green-500">
                <Link className="p-36 py-1"  href={"/country/Bhutan"}>Bhutan</Link></li>

                <li className="text-lg py-2 bg-green-700 rounded-lg w-[330px] duration-100 hover:ease-linear hover:scale-110 hover:bg-green-500">
                <Link className="p-28 py-1"  href={"/country/Bangladesh"}>Bangladesh</Link></li>

                <li className="text-lg py-1 bg-green-700 rounded-lg w-[330px] duration-100 hover:ease-linear hover:scale-110 hover:bg-green-500">
                <Link className="p-32 py-1 flex justify-center items-center"  href={"/country/India"}>India</Link></li>
                <li className="text-lg py-1 bg-green-700 rounded-lg w-[330px] duration-100 hover:ease-linear hover:scale-110 hover:bg-green-500">
                <Link className="p-32 py-1 flex justify-center items-center"  href={"/country/Pakistan"}>Pakistan</Link></li>
            </ul>
            
        </div>
        </div>
  );
};

export default Countries;
