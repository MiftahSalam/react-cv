import pf_img1 from '../assets/images/portfolio/GSR.png';
import pf_img1_set2 from '../assets/images/portfolio/GSR.png';
// import pf_img1_set2 from '../assets/images/portfolio/droplet@2x.jpg';

import pf_img2 from '../assets/images/portfolio/RTI.png';
import pf_img2_set2 from '../assets/images/portfolio/RTI.png';

import pf_img3 from '../assets/images/portfolio/RTI1.png';
import pf_img3_set2 from '../assets/images/portfolio/RTI1.png';

import pf_img4 from '../assets/images/portfolio/SBS2.png';
import pf_img4_set2 from '../assets/images/portfolio/SBS2.png';

import pf_img5 from '../assets/images/portfolio/CariRumah1.jpeg';
import pf_img5_set2 from '../assets/images/portfolio/CariRumah1.jpeg';

import pf_img6 from '../assets/images/portfolio/SBS2.png';
import pf_img6_set2 from '../assets/images/portfolio/SBS2.png';

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
        GSR is a object detection system developed based on radar principle method. 
        It has capability to detect object with almost 10 Km distance and resolution less than 5m.
        The compact package design allow user/operator to mobilize easly and operate with limmited space`,
        category: ["Radar","Desktop","C++","Qt","Visualization","DSP"],
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
        mainImgSrc: pf_img2,
        imgSetSrc: [
            pf_img2,
            pf_img2_set2,
        ],
    },
    {
        href: "modal-03",
        mainImgSrc: pf_img3,
        imgSetSrc: [
            pf_img3,
            pf_img3_set2,
        ],
    },
    {
        href: "modal-04",
        mainImgSrc: pf_img4,
        imgSetSrc: [
            pf_img4,
            pf_img4_set2,
        ],
    },
    {
        href: "modal-05",
        mainImgSrc: pf_img5,
        imgSetSrc: [
            pf_img5,
            pf_img5_set2,
        ],
    },
    {
        href: "modal-06",
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