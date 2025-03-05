"use client"
import React, { useEffect, useState } from 'react'

export default  function MealPage() {
    const [meal, setMeal] = useState([]);
    const [search, setSearch] = useState("");

    const fetchMeal = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const data = await res.json();
            setMeal(data?.meals || []);
            return data.meals;
        }
        catch (error) {
            console.log("error : ", error);
            return []
        }

    }


    useEffect(() => {
        fetchMeal();

    }, [search])
    return (
        <div>
            <p>MealPage</p>
            <div className=''>
                <input value={search} className='border-2' onChange={(e)=>setSearch(e.target.value)} />
            </div>
            {/* <p>{JSON.stringify(meal)}</p> */}
            <div className='grid grid-cols-5'>
                {
                    meal.map(sigleMeale=> { return (
                        <div className='border-2 p-1 m-1'>
                            <p className='text-2xl font-bold'> {sigleMeale.strMeal}</p>
                            <p className='text-xs'> {sigleMeale.strInstructions}</p>
                        </div>
                    )})
                }
            </div>
        </div>
    )
}
