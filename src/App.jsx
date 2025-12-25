import { useState } from "react";
import Nav from "./pages/Nav/Nav"
 import Home from "./pages/home/home"
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    const [isSearchActive, setIsSearchActive] = useState(false);

	const apiCategories = [
        {
            name: "Animals",
            endpoints: "/v1/animals",
            description: "Get scientific facts about animal species",
            icon: <TbPaw size={25} color="#4CAF50" />
        },
        {
            name: "Facts",
            endpoints: "/v1/facts",
            description: "Retrieve random interesting facts",
            icon: <TbBulb size={25} color="#FFC107" />
        },
        {
            name: "Fact of the Day",
            endpoints: "/v1/factoftheday",
            description: "Get the fact of the day",
            icon: <TbCalendarEvent size={25} color="#FF9800" />
        },
        {
            name: "City",
            endpoints: "/v1/city",
            description: "Get statistics for cities around the world",
            icon: <TbBuildingSkyscraper size={25} color="#3F51B5" />
        },
        {
            name: "Country",
            endpoints: "/v1/country",
            description: "Get geographic and demographic country data",
            icon: <TbFlag size={25} color="#2196F3" />
        },
        {
            name: "All Countries",
            endpoints: "/v1/allcountries",
            description: "List all country codes and names",
            icon: <TbFlag size={25} color="#00BCD4" />
        },
        {
            name: "Car Makes",
            endpoints: "/v1/carmakes",
            description: "Get information on car manufacturers",
            icon: <TbCar size={25} color="#9C27B0" />
        },
        {
            name: "Car Models",
            endpoints: "/v1/carmodels",
            description: "Get models for a specific car make",
            icon: <FaCarSide size={25} color="#673AB7" />
        },
        {
            name: "Car Trims",
            endpoints: "/v1/cartrims",
            description: "Get trims for a car make and model",
            icon: <MdDirectionsCar size={25} color="#795548" />
        },
        {
            name: "Car Details",
            endpoints: "/v1/cardetails",
            description: "Get detailed specifications for a specific car",
            icon: <TbCar size={25} color="#607D8B" />
        },
        {
            name: "Stocks / Ticker",
            endpoints: "/v1/ticker",
            description: "Get company profile by stock ticker",
            icon: <RiStockLine size={25} color="#4CAF50" />
        },
        {
            name: "Ticker Search",
            endpoints: "/v1/tickersearch",
            description: "Search tickers by company name",
            icon: <RiStockLine size={25} color="#8BC34A" />
        },
        {
            name: "Airports",
            endpoints: "/v1/airports",
            description: "Get detailed airport information",
            icon: <TbPlane size={25} color="#03A9F4" />
        },
        {
            name: "Airports List",
            endpoints: "/v1/airportslist",
            description: "List airport codes and names",
            icon: <TbPlane size={25} color="#00ACC1" />
        },
        {
            name: "Hospitals",
            endpoints: "/v1/hospitals",
            description: "Get hospital information in the US",
            icon: <TbHospital size={25} color="#E53935" />
        },
        {
            name: "Celebrity",
            endpoints: "/v1/celebrity",
            description: "Search details about celebrities",
            icon: <TbStar size={25} color="#FFD700" />
        },
        {
            name: "Bucket List",
            endpoints: "/v1/bucketlist",
            description: "Get a random bucket list idea",
            icon: <TbChecklist size={25} color="#FF5722" />
        },
        {
            name: "Quotes",
            endpoints: "/v2/quotes",
            description: "Get quotes with advanced filtering",
            icon: <TbQuote size={25} color="#9E9E9E" />
        },
        {
            name: "Random Quotes",
            endpoints: "/v2/randomquotes",
            description: "Get random quotes",
            icon: <TbQuote size={25} color="#607D8B" />
        },
        {
            name: "Quote of the Day",
            endpoints: "/v2/quoteoftheday",
            description: "Get the quote of the day",
            icon: <TbQuote size={25} color="#3F51B5" />
        },
        {
            name: "Exercises",
            endpoints: "/v1/exercises",
            description: "Search exercises by muscle group or type",
            icon: <CiDumbbell size={25} color="#F44336" />
        },
        {
            name: "Jokes",
            endpoints: "/v1/jokes",
            description: "Get random jokes",
            icon: <TbJoker size={25} color="#e42ccbff" />
        }
    ]
	const slicedCategories = apiCategories.slice(0, 10);
  return (
	<Router>
		<Nav setIsSearchActive={setIsSearchActive} />
		<Home 
			slicedCategories={slicedCategories} 
			isSearchActive={isSearchActive} 
			setIsSearchActive={setIsSearchActive} 
		/>
	</Router>
  )
};