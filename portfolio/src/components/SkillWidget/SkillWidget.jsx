import "./SkillWidget.css";
import React, { useState, useEffect, useCallback } from "react";

export default function SkillWidget({ type, triggerCounter }) {
    let data;
    switch (type) {
        case "html/css":
            data = {
                id: 1,
                headline: 99,
                skillName: "html/css",
            };
            break;
        case "React js":
            data = {
                id: 2,
                headline: 95,
                skillName: "React Js",
            };
            break;
        case "Java Script":
            data = {
                id: 3,
                headline: 95,
                skillName: "Java Script",
            };
            break;
        case "Gsap":
            data = {
                id: 4,
                headline: 96,
                skillName: "Gsap",
            };
            break;
        default:
            break;
    }

    const [counter, setCounter] = useState(0);

    const startCounter = useCallback(() => {
        let start = 0;
        const end = data.headline;
        if (start === end) return;

        const duration = 3000; // Duration of the counter animation in milliseconds
        const incrementTime = Math.abs(Math.floor(duration / end));

        const timer = setInterval(() => {
            start += 1;
            setCounter(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);
    }, [data.headline]);

    useEffect(() => {
        if (triggerCounter) {
            startCounter();
        }
    }, [triggerCounter, startCounter]);

    return (
        <div key={data.id} className="skillsWidget">
            <div className="number">
                <h1>{counter}</h1>
                <span>%</span>
            </div>
            <p className="widgetPara">{data.skillName}</p>
        </div>
    );
}
