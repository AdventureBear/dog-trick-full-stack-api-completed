'use client'
import React, {useState} from 'react';
import Trick from "./Trick";

type trickType = {
    title: string,
    category: string,
    description: string
}


export default function Navigation({allTricks}: {allTricks: trickType[]}) {
    const [filteredTricks, setFilteredTricks] = useState(allTricks);
    const allCategories = allTricks.map(trick => trick.category)
// @ts-ignore
    const uniqueCategoriesSet:Set = ['All', ...new Set(allCategories)]
    const uniqueCategories:string[] = Array.from(uniqueCategoriesSet)

    console.log(uniqueCategories)
    const handleClick= (category: string) => {
        if (category === "All") {
            setFilteredTricks(allTricks)
        } else {
            const newTricks = filteredTricks.filter(trick => trick.category === category)
            setFilteredTricks(newTricks)
        }
    }

        // console.log(typeof (uniqueCategories), uniqueCategories)
        return (
            <>
            <div className='main-nav'>
                <h1>Find Your Next Trick</h1>
                <p>The Ultimate Collection of Dog Tricks!</p>

                <div className='category-nav'>
                    {/*<button onClick={()=> handleClick(null)}>All Tricks</button>*/}
                    {uniqueCategories.map((category) => {
                        return (
                            <button
                                onClick={
                                    () => {
                                        handleClick(category)
                                    }
                                }
                                key={category}
                                className='badge'
                            >{category}</button>
                        )
                    })}
                </div>
            </div>
        <div className='content'>
          <div className='cards-container'>
            {filteredTricks.map((trick)=> {
                console.log("Mapping tricks")
            return (
                 <Trick
                        key = {trick.title}
                        title={trick.title}
                      description={trick.description}
                      category={trick.category}
                  />
              )

            })}
          </div>
    </div>
    </>
        );

}


