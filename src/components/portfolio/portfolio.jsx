import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList";
import { useState, useEffect} from "react";
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
  } from "../../data";
  
export default function Portfolio() {

    const [selected, setSelected] =  useState("featured")
    const [data, setData] = useState([]);

    const list=[
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "django",
            title: "Django App",
        },
        {
            id: "articles",
            title: "Articles",
        },
        {
            id: "books",
            title: "Books",
        },
        {
            id: "sports",
            title: "Sports",
        },

    ];
        
    useEffect(() => {
        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "django":
                setData(webPortfolio);
                break;
            case "articles":
                setData(mobilePortfolio);
                break;
            case "books":
                setData(designPortfolio);
                break;
            case "sports":
                setData(contentPortfolio);
                break;
                
        }

    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
               {list.map((item)=>(
               <PortfolioList title={item.title} 
               active={selected===item.id} 
               setSelected={setSelected}
               id = {item.id}
               />
               ))}
            </ul>

            <div className="container">
                {data.map(d=>(

                <div className="item">
                    <img src={d.img}
                    alt=""/>
                    <h3>{d.title}</h3>
                </div>
               
                ))}
                
            </div>
        </div>
    )
}
