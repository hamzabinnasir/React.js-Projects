// Material UI Icons
import Web from '@mui/icons-material/Web';
import Code from '@mui/icons-material/Code';
import Build from '@mui/icons-material/Build';
import Movie from '@mui/icons-material/Movie';
import DesignServices from '@mui/icons-material/DesignServices';

// React Icons
import { FaReact } from 'react-icons/fa';

export const row1Data = [
    {
        id: 1,
        icon: <Web className={"serviceIcon"}/>,
        span1: "Responsive Web Design",
        para: "Make mobile-friendly, aesthetically pleasing websites that work effectively across all platforms.",
    },
    {
        id: 2,
        icon: <FaReact className={"serviceIcon"}/>,
        span1: "Interactive User Interfaces",
        para: "With JavaScript and React.js, create logical and captivating user interfaces for a smooth user experience.",
    },
    {
        id: 3,
        icon: <Code className={"serviceIcon"}/>,
        span1: "React JS Development",
        para: "Use a component-based design and React.js to create user interfaces that are quick, dynamic, and scalable.",
    },
];

export const row2Data = [
    {
        id: 1,
        icon: <Build className={"serviceIcon"}/>,
        span1: "Custom Web Development",
        para: "Using contemporary technologies, create custom websites that are suited to your unique requirements.",
    },
    {
        id: 2,
        icon: <Movie className={"serviceIcon"}/>,
        span1: "Animation and Visual Effects",
        para: "Utilizing GSAP, add dynamic animations and effects to improve user experience and engagement.",
    },
    {
        id: 3,
        icon: <DesignServices className={"serviceIcon"}/>,
        span1: "UI/UX Implementation",
        para: "Write modular and maintainable styles with SCSS, enhancing CSS with features like variables and mixins.",
    },
];
