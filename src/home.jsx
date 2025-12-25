import { Link } from 'react-router-dom';
import './home.css'
import { IoIosSearch } from "react-icons/io";
export default function Home({slicedCategories}) {
    
    return (
        <>
            <div className="hero">
                <h1>Explore Knowledge <span className="specifier">Through APIs</span></h1>
                <p className="hero-description">
                    Access thousands of data points instantly. Search specific topics or browse categories below
                </p>  
            </div>
            <div className="search-section ">
                <IoIosSearch size={25}/>
                <input type="text" placeholder="Search Facts, Quotes, Animals..." />
            </div>
            <div className="categories">
               <div className="cat-header">
                 <h3>Popular Categories</h3>
                 <p><Link to="/">View All</Link></p>
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