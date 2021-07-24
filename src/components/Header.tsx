import React from "react";

class Header extends React.Component {
    componentDidMount(){
        const toggleButton = document.querySelector('.s-header__menu-toggle');
        const headerNavWrap = document.querySelector('.s-header__nav-wrap');
        const siteBody = document.querySelector('body')!;

        if(!(toggleButton && headerNavWrap)) return;

        toggleButton.addEventListener('click', (event) => {
            event.preventDefault();
            toggleButton.classList.toggle('is-clicked');
            siteBody.classList.toggle('menu-is-open');
        });
        
        headerNavWrap.querySelectorAll('.s-header__nav a').forEach((link) => {
            link.addEventListener('click', (event) => {
                if(window.matchMedia('(max-width: 800px)').matches) {
                    toggleButton.classList.toggle('is-clicked');
                    siteBody.classList.toggle('menu-is-open');
                }
            });
        });

        window.addEventListener('resize', () => {
            if(window.matchMedia('(min-width: 800px)')) {
                if(siteBody.classList.contains('menu-is-open')) siteBody.classList.remove('menu-is-open');
                if(toggleButton.classList.contains('is-clicked')) toggleButton.classList.remove('is-clicked')
            }
        })
    }
    render() {
        return (
            <header className="s-header">
                <div className="row s-header__nav-wrap">
                    <nav className="s-header__nav">
                        <ul>
                        <li className="current"><a className="smoothscroll" href="#hero">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#portofolio">Works</a></li>
                        <li><a className="smoothscroll" href="#contact">Say Hello</a></li>
                        </ul>
                    </nav>
                </div>
                <a
                    className="s-header__menu-toggle"
                    href="#0"
                    title="Menu"
                >
                    <span className="s-header__menu-icon"></span>
                </a>
            </header>
        )
    }
}

export default Header;