import "./Featured.css"
import React, { useEffect, useState } from "react"
import Headline from "../../components/Headline/Headline"
// importing Components and Datas
import List from "../../components/List/List"
import { listData } from "../../components/List/listData"
import { allData, packagingData, mockUpData, typographyData, photographyData } from "./data"
// Importing Gsap

export default function Fearured() {
    const [active, setActive] = useState("all");
    const [data, setData] = useState([]);

    useEffect(() => {
        switch (active) {
            case "all":
                setData(allData);
                break;
            case "packagingData":
                setData(packagingData);
                break;
            case "mockupData":
                setData(mockUpData);
                break;
            case "typographyData":
                setData(typographyData);
                break;
            case "photoGraphyData":
                setData(photographyData);
                break;
            default:
                break;
        }
    }, [active]);

    return (
        <>
            <div id="featuredSection">
                <Headline text={"Featured"} subText={"Portfolio"} />
                <ul className="featuredListContainer">
                    {
                        listData.map((listItem) =>
                            <List key={listItem.id} listData={listItem} id={listItem.dataId} active={active} setActive={setActive} />
                        )
                    }
                </ul>

                {/* featuredContainer */}
                <div className="featuredContainer">
                    {/* Featured Box */}
                    {
                        data.map((element) =>
                            <div key={element.id} className="featuredBox">
                                <img className="featuredImg" src={element.img} alt="no img" />
                                <h4>{element.headline}</h4>
                                <p className="featuredPara">{element.subHeadline}</p>

                                {/* FeaturedBoxOverlay */}
                                <div className="featureBoxOverlay"></div>
                            </div>
                        )
                    }

                </div>
                <div className="overlay">
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                </div>
            </div>
        </>
    )
}