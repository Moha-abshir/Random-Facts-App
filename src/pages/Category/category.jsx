import './category.css'
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdSearch } from "react-icons/md";
export default function Category({apiCategories}) {
    return (
        <>
           <div className="top-bar">
                <Link to="/"><MdOutlineKeyboardArrowLeft size={25}/></Link>
                <h3>All Categories</h3>
           </div>
           <div className="search-category">
            <MdSearch size={25}/>
            <input type="text" placeholder="Search Category"/>
           </div>
           <div className="category-list">
            {apiCategories.map((category) => (
                <Link to={`/category/${category.name}`}>
                <div className="category" key={category.name}>
                    <div>{category.icon}</div>
                    <p className='title'>{category.name}</p>
                    <p>{category.description}</p>
                </div>
                </Link>
            ))}
           </div>
        </>
    )
}