import { Link } from 'react-router-dom';
import { useState } from 'react';
import './home.css'
import { IoIosSearch } from "react-icons/io";
import Nav from "../Nav/Nav";
export default function Home({slicedCategories}) {
    const [isSearchActive, setIsSearchActive] = useState(false);
    
    return (
        <>
        <Nav isSearchActive={isSearchActive} setIsSearchActive={setIsSearchActive}/>
            <div className="hero">
                <h1>Explore Knowledge <span className="specifier">Through APIs</span></h1>
                <p className="hero-description">
                    Access thousands of data points instantly. Search specific topics or browse categories below
                </p>  
            </div>
            <div className={`search-section ${isSearchActive ? 'search-active' : ''}`}>
                <IoIosSearch size={25}/>
                <input 
                    type="text" 
                    placeholder="Search Facts, Quotes, Animals..." 
                    onFocus={() => setIsSearchActive(false)} 
                />
            </div>
            <div className="categories">
               <div className="cat-header">
                 <h3>Popular Categories</h3>
                 <p><Link to="/category">View All</Link></p>
               </div>
               <div className="cat-grid">
                    {
                        slicedCategories.map((category) => (
                            <div className="card" key={category.name}>
                                <div>{category.icon}</div>
                                <p className='title'>{category.name}</p>
                                <p>{category.description}</p>
                            </div>
                        ))
                    }
               </div>
            </div>
        </>
    )
}