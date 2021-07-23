import React from "react";

class Footer extends React.Component {
    private pxShow: number = 900;

    constructor(props: any) {
        super(props);
        this.onScroll = this.onScroll.bind(this);
    }
    private onScroll(): void {
        const goTopButton = document.querySelector(".ss-go-top");

        if(!goTopButton) return;
        if(window.scrollY >= this.pxShow) {
            if(!goTopButton.classList.contains('link-is-visible')) {
                goTopButton.classList.add('link-is-visible')
            } 
        }
        else {
            goTopButton.classList.remove('link-is-visible')
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }
    render(){
        return (
            <footer className="s-footer">
                <div className="row">
                    <div className="column large-4 medium-6 w-1000-stack s-footer__social-block">
                        <ul className="s-footer__social">
                            <li>
                                <a href="https://www.upwork.com/freelancers/~01c37a376d20b2792b" target="_blank" rel="noreferrer">
                                    <i>
                                        Up
                                    </i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/MiftahSalam" target="_blank" rel="noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/in/miftah-salam-36aa5b25" target="_blank" rel="noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://fb.com/miftah.salam.9" target="_blank" rel="noreferrer">
                                    <i className="fab fa-facebook-square"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="column large-7 medium-6 w-1000-stack ss-copyright">
                        <span>© Copyright 2021</span>
                        <span>Design by <a href="https://www.styleshout.com/">StyleShout</a></span>
                    </div>
                </div>
                <div className="ss-go-top">
                    <a className="smoothscroll" title="Back to Top" href="#top">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z" /></svg>
                    </a>
                </div>
            </footer>
        )
    }
}

export default Footer;