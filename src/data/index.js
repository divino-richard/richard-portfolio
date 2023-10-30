import {AiFillHtml5} from 'react-icons/ai';
import {FaCss3, FaPhp} from 'react-icons/fa';
import {
    BiLogoJavascript, 
    BiLogoReact, 
    BiLogoTailwindCss, 
    BiLogoNodejs,
    BiLogoMongodb
} from 'react-icons/bi';
import {SiMysql} from 'react-icons/si';
import ProjectPlaceholder from '../images/production.png';

export const skills = [
    {
        category: "Front-end",
        items: [
            {
                name: "HTML5",
                icon: <AiFillHtml5 />
            },
            {
                name: "CSS3",
                icon: <FaCss3 />
            },
            {
                name: "Tailwind",
                icon: <BiLogoTailwindCss />
            },
            {
                name: "JavaScript",
                icon: <BiLogoJavascript />
            },
            {
                name: "ReactJS",
                icon: <BiLogoReact />
            },
        ]
    },
    {
        category: "Back-end",
        items: [
            {
                name: "PHP",
                icon: <FaPhp />
            },
            {
                name: "NodeJS",
                icon: <BiLogoNodejs />
            },
            {
                name: "MySQL",
                icon: <SiMysql />
            },
            {
                name: "MongoDB",
                icon: <BiLogoMongodb />
            },
        ]
    }
]

export const projects = [
    {
        title: "Project one",
        image: ProjectPlaceholder,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam similique vitae nemo rem commodi quaerat neque enim quasi reiciendis earum non distinctio, debitis est aliquam.",
    },
    {
        title: "Project two",
        image: ProjectPlaceholder,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam similique vitae nemo rem commodi quaerat neque enim quasi reiciendis earum non distinctio, debitis est aliquam.",
    },
    {
        title: "Project three",
        image: ProjectPlaceholder,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam similique vitae nemo rem commodi quaerat neque enim quasi reiciendis earum non distinctio, debitis est aliquam.",
    },
    {
        title: "Project Four",
        image: ProjectPlaceholder,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam similique vitae nemo rem commodi quaerat neque enim quasi reiciendis earum non distinctio, debitis est aliquam.",
    },
]
