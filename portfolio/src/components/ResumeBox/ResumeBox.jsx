import "./ResumeBox.css"
import React from "react"
// importing Material Ui Icons
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// Using Gsap
export default function ResumeBox({ data , classData }) {
    return (
        <>
            {/* resume Box */}
            {
                data.map((item) =>
                    <div key={item.id} className="resumeBox">
                        <span className="resumeSpan"><CalendarTodayIcon className="resumeIcon" /> {item.tagLine}</span>
                        <h4>{item.headline}</h4>
                        <p className="resumeSimpleP">{item.para}</p>
                        <p className="uni">{item.uniPara}</p>
                    </div>
                )
            }
        </>
    )
}