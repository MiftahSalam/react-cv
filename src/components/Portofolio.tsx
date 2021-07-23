import React, { ReactElement } from 'react';
import * as basicLightbox from 'basiclightbox';

import { 
    PortoFolioDetailData, 
    PortoFolioItemData,
    pfItemData,
    pfItemDetaildata,
} from '../data/portofolio'

type PFPropType = {
    name?: string;
}
type PFStateType = {
    lightBoxRefId: string;
    toggler: boolean;
}

class Portofolio extends React.Component<PFPropType, PFStateType> {
    private name?: string;

    constructor(props: PFPropType) {
        super(props);
        this.state = {
            lightBoxRefId: "",
            toggler: false,
        };
        this.name = props.name;
        this.pfLinkClicked = this.pfLinkClicked.bind(this);
    }
    private pfLinkClicked(event: React.MouseEvent<HTMLAnchorElement>): void {
        event.preventDefault();

        const id = event.currentTarget.id;
        console.log("Portofolio-pfLinkClicked target id:",id)
        console.log("Portofolio-pfLinkClicked lightBoxRefId:",this.state.lightBoxRefId);
        this.setState({ lightBoxRefId: id });
    }

    private popup(item: PortoFolioDetailData): ReactElement {
        return (
                <div id={item.refId} hidden={item.hidden} key={item.refId}>
                    <div className="modal-popup">
                        <img src={item.img} alt="" />
                        <div className="modal-popup__desc">
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                            <p style={{ marginBottom: 10 }}><strong>Keyword</strong></p>
                            <ul>
                                {item && item.category?.map((cat) => (
                                    <li>{cat}</li>
                                ))}
                            </ul>
                        </div>
                        <a href={item.link} className="modal-popup__details">Project Link</a>
                    </div>
                </div>
        )
    }
    componentDidMount(){
        const fpLink = document.querySelectorAll('.folio-item a');
        const modals: basicLightbox.BasicLightBox[] = [];
        // let modalboxElAll = document.querySelectorAll('#modal-01');
        // console.log("Fortopolio-componentDidMount modalboxElAll",modalboxElAll);

        fpLink.forEach(link => {
            let modalbox = link.getAttribute('href') || '';
            let modalboxEl = document.querySelector(modalbox) || '';
            let instance = basicLightbox.create(
                    modalboxEl,
                    {
                        onShow: instance => {
                            console.log("Fortopolio-componentDidMount modal onShow");
                            document.addEventListener('keydown',function(e) {
                                console.log("Fortopolio-componentDidMount modal onShow e.keyCode",e.keyCode);
                                e = e || window.event;
                                if(e.keyCode === 40) instance.close();
                            });
                            return true;
                        }   
                    }
            )
            // console.log("Fortopolio-componentDidMount modalboxEl",modalboxEl);
            console.log("Fortopolio-componentDidMount modal id:",modalbox);
            modals.push(instance);
        })

        fpLink.forEach((link, index) => {
            link.addEventListener('click', e => {
                e.preventDefault();
                console.log("Fortopolio-componentDidMount modal :",modals[index]);
                modals[index].show();
            })
        })
    }
    render() {
        return (
            <section id="#portofolio" className="s-portfolio target-section">
                <div className="row s-portfolio__header">                {/* <div id="modal-01" hidden>
                    <div className="modal-popup">
                        <img src={pfItemDetaildata[0].img} alt="" />
                        <div className="modal-popup__desc">
                            <h5>Tes</h5>
                            <p>sfgdfgdfg</p>
                            <ul className="modal-popup__cat">
                                <li>cat</li>
                            </ul>
                        </div>
                        <a href="#modul" className="modal-popup__details">Project Link</a>
                    </div>
                </div> */}

                    <div className="column large-12">
                        <h3>A Few Of My Latest Creation</h3>
                    </div>
                </div>
                <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
                    {pfItemData.map((item: PortoFolioItemData) => (
                        <div className="column folio-item">
                            <a 
                                href={`#${item.href}`} 
                                className="folio-item__thumb"
                                id={`link-${item.href}`} 
                                key={item.href}
                            >
                                <img 
                                    src={item.mainImgSrc}
                                    srcSet={`${item.imgSetSrc[0]} 1x, ${item.imgSetSrc[1]} 2x`}
                                    alt=""
                                />
                            </a>
                        </div>
                    ))}
                </div>
                {pfItemDetaildata.map(item => this.popup(item))}
            </section>
        )
    }
}

export default Portofolio;