import pf_img1 from '../assets/images/portfolio/droplet.jpg';
import pf_img1_set2 from '../assets/images/portfolio/droplet@2x.jpg';

import pf_img2 from '../assets/images/portfolio/lamp.jpg';
import pf_img2_set2 from '../assets/images/portfolio/lamp@2x.jpg';

import pf_img3 from '../assets/images/portfolio/minimalismo.jpg';
import pf_img3_set2 from '../assets/images/portfolio/minimalismo@2x.jpg';

import pf_img4 from '../assets/images/portfolio/shutterbug.jpg';
import pf_img4_set2 from '../assets/images/portfolio/shutterbug@2x.jpg';

import pf_img5 from '../assets/images/portfolio/fuji.jpg';
import pf_img5_set2 from '../assets/images/portfolio/fuji@2x.jpg';

import pf_img6 from '../assets/images/portfolio/skaterboy.jpg';
import pf_img6_set2 from '../assets/images/portfolio/skaterboy@2x.jpg';

import pf_img7 from '../assets/images/portfolio/rucksack.jpg';
import pf_img7_set2 from '../assets/images/portfolio/rucksack@2x.jpg';

import pf_img8 from '../assets/images/portfolio/sanddunes.jpg';
import pf_img8_set2 from '../assets/images/portfolio/sanddunes@2x.jpg';


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
        img: require('../assets/images/portfolio/gallery/g-droplet.jpg').default,
        title: "Droplet",
        link: "https://www.behance.net/",
        description: "Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem. Ratione officiis quae.",
        category: ["Branding","Product Design"],
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
    {
        href: "modal-07",
        mainImgSrc: pf_img7,
        imgSetSrc: [
            pf_img7,
            pf_img7_set2,
        ],
    },
    {
        href: "modal-08",
        mainImgSrc: pf_img8,
        imgSetSrc: [
            pf_img8,
            pf_img8_set2,
        ],
    },
];

export {
    pfItemData,
    pfItemDetaildata,
};