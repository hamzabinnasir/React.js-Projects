import React, { useState , useEffect} from "react";
import "./Skills.css";
import Headline from "../../components/Headline/Headline";
import SkillWidget from "../../components/SkillWidget/SkillWidget";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
    const [htmlCssTriggered, setHtmlCssTriggered] = useState(false);
    const [reactJsTriggered, setReactJsTriggered] = useState(false);
    const [jsTriggered, setJsTriggered] = useState(false);
    const [gsapTriggered, setGsapTriggered] = useState(false);

    useEffect(() => {
        ScrollTrigger.create({
            trigger: "#skillsSection",
            start: "top center",
            onEnter: () => {
                setHtmlCssTriggered(true);
                setReactJsTriggered(true);
                setJsTriggered(true);
                setGsapTriggered(true);
            },
        });
    }, []);

    return (
        <div id="skillsSection">
            <Headline text={"My"} subText={"Skills"} />
            <div className="skillWidgetContainer">
                <SkillWidget type={"html/css"} triggerCounter={htmlCssTriggered} />
                <SkillWidget type={"React js"} triggerCounter={reactJsTriggered} />
                <SkillWidget type={"Java Script"} triggerCounter={jsTriggered} />
                <SkillWidget type={"Gsap"} triggerCounter={gsapTriggered} />
            </div>
        </div>
    );
}
