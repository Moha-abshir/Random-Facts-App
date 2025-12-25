import { Link } from 'react-router-dom';
import './home.css'
import { IoIosSearch } from "react-icons/io";
export default function Home() {
    const apiCategories = [
        {
            name: "Animals",
            endPoint: "/v1/animals",
            description: "Get Information and facts and facts about animals",
        },
        {
            name: "Facts",
            endpoints: "/v1/facts",
            description: "Retrieve random interesting facts",
        },
        {
            name: "Quotes",
            endpoints: "/v1/quotes",
            description: "Get inspirational and famous quotes",
        }, 
        {
            name: "Exercises",
            endpoints: "/v1/exercises",
            description: "Search exercises by muscle or equipment",
        },
        {
            name: "Nutrition",
            endpoints: "/v1/nutrition",
            description: "Get nutritional data for foods",
        },
        {
            name: "Dictionary",
            endpoints: "/v1/dictionary",
            description: "Search definitions and meanings",
        },
        {
            name: "Jokes",
            endpoints: "/v1/jokes",
            description: "Get random jokes",
        },
        {
            name: "Trivia",
            endpoints: "/v1/trivia",
            description: "Answer trivia questions by category",
        },
        {
            name: "Countries",
            endpoints: "/v1/country",
            description: "Get detailed country information",
        }
    ]
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
            
               </div>
            </div>
        </>
    )
}