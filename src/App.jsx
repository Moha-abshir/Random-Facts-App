import Category from "./pages/Category/category";   
 import Home from "./pages/home/home";
 import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
 import {
    TbPaw,
    TbBulb,
    TbCalendarEvent,
    TbBuildingSkyscraper,
    TbFlag,
    TbCar,
    TbPlane,
    TbHospital,
    TbStar,
    TbChecklist,
    TbQuote
} from "react-icons/tb";
import { CiDumbbell } from "react-icons/ci";
import { FaCarSide } from "react-icons/fa";
import { MdDirectionsCar } from "react-icons/md";
import { RiStockLine } from "react-icons/ri";
import { TbJoker } from "react-icons/tb";
 export default function App() {
    
	const apiCategories = [
        {
            name: "Animals",
            endpoints: "/v1/animals",
            description: "Get scientific facts about animal species",
            icon: <TbPaw size={25} color="#4CAF50" />,
            keywords: ["facts", "science", "species", "wildlife", "biology"]
        },
        {
            name: "Facts",
            endpoints: "/v1/facts",
            description: "Retrieve random interesting facts",
            icon: <TbBulb size={25} color="#FFC107" />,
            keywords: ["random", "interesting", "trivia", "knowledge", "information"]
        },
        {
            name: "Fact of the Day",
            endpoints: "/v1/factoftheday",
            description: "Get the fact of the day",
            icon: <TbCalendarEvent size={25} color="#FF9800" />,
            keywords: ["daily", "today", "knowledge", "learning", "information"]
        },
        {
            name: "City",
            endpoints: "/v1/city",
            description: "Get statistics for cities around the world",
            icon: <TbBuildingSkyscraper size={25} color="#3F51B5" />,
            keywords: ["statistics", "population", "demographics", "urban", "geography"]
        },
        {
            name: "Country",
            endpoints: "/v1/country",
            description: "Get geographic and demographic country data",
            icon: <TbFlag size={25} color="#2196F3" />,
            keywords: ["geography", "demographics", "nation", "world", "data"]
        },
        {
            name: "All Countries",
            endpoints: "/v1/allcountries",
            description: "List all country codes and names",
            icon: <TbFlag size={25} color="#00BCD4" />,
            keywords: ["codes", "names", "world", "nations", "list"]
        },
        {
            name: "Car Makes",
            endpoints: "/v1/carmakes",
            description: "Get information on car manufacturers",
            icon: <TbCar size={25} color="#9C27B0" />,
            keywords: ["manufacturers", "brands", "automotive", "vehicles", "industry"]
        },
        {
            name: "Car Models",
            endpoints: "/v1/carmodels",
            description: "Get models for a specific car make",
            icon: <FaCarSide size={25} color="#673AB7" />,
            keywords: ["models", "make", "automotive", "vehicles", "types"]
        },
        {
            name: "Car Trims",
            endpoints: "/v1/cartrims",
            description: "Get trims for a car make and model",
            icon: <MdDirectionsCar size={25} color="#795548" />,
            keywords: ["trims", "options", "versions", "automotive", "specifications"]
        },
        {
            name: "Car Details",
            endpoints: "/v1/cardetails",
            description: "Get detailed specifications for a specific car",
            icon: <TbCar size={25} color="#607D8B" />,
            keywords: ["specifications", "details", "automotive", "technical", "performance"]
        },
        {
            name: "Stocks / Ticker",
            endpoints: "/v1/ticker",
            description: "Get company profile by stock ticker",
            icon: <RiStockLine size={25} color="#4CAF50" />,
            keywords: ["company", "profile", "finance", "investment", "market"]
        },
        {
            name: "Ticker Search",
            endpoints: "/v1/tickersearch",
            description: "Search tickers by company name",
            icon: <RiStockLine size={25} color="#8BC34A" />,
            keywords: ["search", "company", "finance", "investment", "market"]
        },
        {
            name: "Airports",
            endpoints: "/v1/airports",
            description: "Get detailed airport information",
            icon: <TbPlane size={25} color="#03A9F4" />,
            keywords: ["information", "details", "aviation", "travel", "location"]
        },
        {
            name: "Airports List",
            endpoints: "/v1/airportslist",
            description: "List airport codes and names",
            icon: <TbPlane size={25} color="#00ACC1" />,
            keywords: ["codes", "names", "aviation", "travel", "directory"]
        },
        {
            name: "Hospitals",
            endpoints: "/v1/hospitals",
            description: "Get hospital information in the US",
            icon: <TbHospital size={25} color="#E53935" />,
            keywords: ["information", "healthcare", "medical", "directory", "location"]
        },
        {
            name: "Celebrity",
            endpoints: "/v1/celebrity",
            description: "Search details about celebrities",
            icon: <TbStar size={25} color="#FFD700" />,
            keywords: ["details", "famous", "people", "entertainment", "biography"]
        },
        {
            name: "Bucket List",
            endpoints: "/v1/bucketlist",
            description: "Get a random bucket list idea",
            icon: <TbChecklist size={25} color="#FF5722" />,
            keywords: ["random", "idea", "goals", "inspiration", "achievements"]
        },
        {
            name: "Quotes",
            endpoints: "/v2/quotes",
            description: "Get quotes with advanced filtering",
            icon: <TbQuote size={25} color="#9E9E9E" />,
            keywords: ["advanced", "filtering", "sayings", "wisdom", "inspiration"]
        },
        {
            name: "Random Quotes",
            endpoints: "/v2/randomquotes",
            description: "Get random quotes",
            icon: <TbQuote size={25} color="#607D8B" />,
            keywords: ["random", "sayings", "wisdom", "inspiration", "motivation"]
        },
        {
            name: "Quote of the Day",
            endpoints: "/v2/quoteoftheday",
            description: "Get the quote of the day",
            icon: <TbQuote size={25} color="#3F51B5" />,
            keywords: ["daily", "today", "saying", "wisdom", "inspiration"]
        },
        {
            name: "Exercises",
            endpoints: "/v1/exercises",
            description: "Search exercises by muscle group or type",
            icon: <CiDumbbell size={25} color="#F44336" />,
            keywords: ["search", "fitness", "workout", "health", "training"]
        },
        {
            name: "Jokes",
            endpoints: "/v1/jokes",
            description: "Get random jokes",
            icon: <TbJoker size={25} color="#e42ccbff" />,
            keywords: ["random", "humor", "funny", "comedy", "entertainment"]
        }
    ]
	const slicedCategories = apiCategories.slice(0, 10);
  return (   
    <Router>
        <Routes>
            <Route index element={<Home slicedCategories={slicedCategories} />}/>
            <Route path="/category" element={<Category apiCategories={apiCategories}/>}/>
        </Routes>
    </Router>
  )
};