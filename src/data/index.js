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
        id: 1,
        category: "Front-end",
        items: [
            {
                id: 1,
                name: "HTML5",
                icon: <AiFillHtml5 />
            },
            {
                id: 2,
                name: "CSS3",
                icon: <FaCss3 />
            },
            {
                id: 3,
                name: "Tailwind",
                icon: <BiLogoTailwindCss />
            },
            {
                id: 4,
                name: "JavaScript",
                icon: <BiLogoJavascript />
            },
            {
                id: 5,
                name: "ReactJS",
                icon: <BiLogoReact />
            },
        ]
    },
    {
        id: 2,
        category: "Back-end",
        items: [
            {
                id: 6,
                name: "PHP",
                icon: <FaPhp />
            },
            {
                id: 7,
                name: "NodeJS",
                icon: <BiLogoNodejs />
            },
            {
                id: 8,
                name: "MySQL",
                icon: <SiMysql />
            },
            {
                id: 9,
                name: "MongoDB",
                icon: <BiLogoMongodb />
            },
        ]
    }
]

export const projects = [
    {
        id: 1,
        title: "Project one",
        image: ProjectPlaceholder,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam similique vitae nemo rem commodi quaerat neque enim quasi reiciendis earum non distinctio, debitis est aliquam.",
    },
    {
        id: 2,
        title: "Project two",
        image: ProjectPlaceholder,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam similique vitae nemo rem commodi quaerat neque enim quasi reiciendis earum non distinctio, debitis est aliquam.",
    },
    {
        id: 3,
        title: "Project three",
        image: ProjectPlaceholder,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam similique vitae nemo rem commodi quaerat neque enim quasi reiciendis earum non distinctio, debitis est aliquam.",
    },
    {
        id: 4,
        title: "Project Four",
        image: ProjectPlaceholder,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam similique vitae nemo rem commodi quaerat neque enim quasi reiciendis earum non distinctio, debitis est aliquam.",
    },
]
