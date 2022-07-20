import pf_img1 from '../assets/images/portfolio/GSR.png';
import pf_img1_set2 from '../assets/images/portfolio/GSR.png';
// import pf_img1_set2 from '../assets/images/portfolio/droplet@2x.jpg';

// import pf_img2 from '../assets/images/portfolio/RTI.png';
// import pf_img2_set2 from '../assets/images/portfolio/RTI.png';

import pf_img3 from '../assets/images/portfolio/RTI1.png';
import pf_img3_set2 from '../assets/images/portfolio/RTI1.png';

import pf_img4 from '../assets/images/portfolio/SBS2.png';
import pf_img4_set2 from '../assets/images/portfolio/SBS2.png';

import pf_img5 from '../assets/images/portfolio/CariRumah1.jpeg';
import pf_img5_set2 from '../assets/images/portfolio/CariRumah1.jpeg';

import pf_img6 from '../assets/images/portfolio/aangular-gin-blog.png';
import pf_img6_set2 from '../assets/images/portfolio/aangular-gin-blog1.png';

// import pf_img6 from '../assets/images/portfolio/SBS2.png';
// import pf_img6_set2 from '../assets/images/portfolio/SBS2.png';

export type PortoFolioDetailData = {
    refId: string;
    hidden: boolean;
    img: string;
    title: string;
    link: string;
    description?: string;
    category?: string[];
}

export type PortoFolioItemData = {
    href: string;
    mainImgSrc: string;
    imgSetSrc: string[];
}

const pfItemDetaildata: PortoFolioDetailData[] = [
    {
        refId: "modal-01",
        hidden: false,
        img: pf_img1,
        title: "Ground Survellance Radar (GSR)",
        link: "#",
        description: `This is a research project that funded by Indonesian Research Departement. 
        GSR is a object detection system developed based on frequency modulation radar principle method. 
        It has capability to detect object with almost 10 Km distance and resolution less than 5m.
        The compact package design allow user/operator to mobilize easly and operate with limmited space`,
        category: ["Radar","Desktop","C++","Qt","Visualization","DSP"],
    },
    {
        refId: "modal-02",
        hidden: false,
        img: pf_img3,
        title: "Air Surveillance Radar (ASR)",
        link: "#",
        description: `This is a long time project for Indonesian Army, Air Defense Artilllery Division. 
        ASR is a airplane object detection system developed based on pulse radar principle method. 
        It has capability to detect object with almost 60 Km distance. 
        This system also equipped with IFF system to identify foe or friend object. 
        For environment awareness, this system equipped with weather system, GPS, Gyro, and GMap.`,
        category: ["Radar","Desktop","C++","Qt","Visualization","Sensor", "Map"],
    },
    {
        refId: "modal-03",
        hidden: false,
        img: pf_img4,
        title: "Dual Frequency Single Beam Echosounder Display",
        link: "#",
        description: `This is a project for private company on sea survey field.  
        This software connect to main echosounder sensor as data source for under water environment detection,
        Eqquipped with sufficient features required by surveyors.`,
        category: ["Echosounder","Desktop","C++","Qt","Visualization","Sensor"],
    },
    {
        refId: "modal-04",
        hidden: false,
        img: pf_img5,
        title: "CariRumah Apps",
        link: "#",
        description: `This is a my personal project for learning backend and mobile app development.
        Main purpose of this app is to search available property based on user preference such as location,
        price, property type, etc. For backend, I use python Django framework to serve API 
        and python Selenium Webdriver to collect/scrape data from another property site.
        For mobile developement, I use React Native. This project not finished yet and need more improvement.`,
        category: ["Mobile Apps","API Backend","Python","Django","Selenium","React Native"],
    },
    {
        refId: "modal-05",
        hidden: false,
        img: pf_img6,
        title: "Angular-Gin Blog Apps",
        link: "https://angular-gin-blog.netlify.app/home",
        description: `This is a my personal project in learning Angular and Golang Gin app development, 
        a small and simple API blog developed to comply API spec from the RealWorld (https://github.com/gothinkster/realworld).
        Feature includes: CRUD, Authentication (JWT), Routing, Pagination, Input Validation, Testing.`,
        category: ["API Backend","Angular","Go-Gin"],
    },
];

const pfItemData: PortoFolioItemData[] = [
    {
        href: "modal-01",
        mainImgSrc: pf_img1,
        imgSetSrc: [
            pf_img1,
            pf_img1_set2,
        ],
    },
    {
        href: "modal-02",
        mainImgSrc: pf_img3,
        imgSetSrc: [
            pf_img3,
            pf_img3_set2,
        ],
    },
    {
        href: "modal-03",
        mainImgSrc: pf_img4,
        imgSetSrc: [
            pf_img4,
            pf_img4_set2,
        ],
    },
    {
        href: "modal-04",
        mainImgSrc: pf_img5,
        imgSetSrc: [
            pf_img5,
            pf_img5_set2,
        ],
    },
    {
        href: "modal-05",
        mainImgSrc: pf_img6,
        imgSetSrc: [
            pf_img6,
            pf_img6_set2,
        ],
    },
];

export {
    pfItemData,
    pfItemDetaildata,
};
