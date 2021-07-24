import React from 'react';
import Rellax from 'rellax';

import './assets/css/styles.css'
import './assets/css/vendor.css'

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Portofolio from './components/Portofolio';
import SayHello from './components/SayHello';
import Footer from './components/Footer';
import Swiper from 'swiper';

type AppState = {
  show: boolean;
}

class App extends React.Component<any,AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      show: true,
    };
  }
  private preloader(): void {
    const preloader = document.querySelector('#preloader');

    if(!preloader) return;
    window.addEventListener('load',() => {
      document.querySelector('body')?.classList.remove('ss-preload');
      document.querySelector('body')?.classList.add('ss-loaded');
      this.setState({ show: false });
    });    
  }
  private moveHeader(): void {
    const hdr = document.querySelector('.s-header');
    const hero: HTMLElement = document.querySelector<HTMLElement>('#hero')!;
    let triggerHeight: number;

    if(!(hdr && hero)) return;
    triggerHeight = hero.offsetHeight - 170;
    window.addEventListener('scroll', () => {
      let loc = window.scrollY;

      if(loc > triggerHeight) hdr.classList.add('sticky');
      else hdr.classList.remove('sticky');
      if(loc > triggerHeight + 20) hdr.classList.add('offset');
      else hdr.classList.remove('offset');
      if(loc > triggerHeight + 150) hdr.classList.add('scrolling');
      else hdr.classList.remove('scrolling');
      });
  }
  private scrollSpy(): void {
    const sections = document.querySelectorAll('.target-section');

    window.addEventListener('scroll', () => {
      sections.forEach(current => {
        const sectionHeight = (current as HTMLElement).offsetHeight;
        const sectionTop = (current as HTMLElement).offsetTop - 50;
        const sectionId = current.getAttribute('id');
        let scrollY = window.pageYOffset;

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          const parentNode = document.querySelector(`.s-header__nav a[href*=${sectionId}]`)!.parentNode! as HTMLElement;
          parentNode.classList.add('current');
        } else {
          const parentNode = document.querySelector(`.s-header__nav a[href*=${sectionId}]`)!.parentNode! as HTMLElement;
          parentNode.classList.remove('current');
        }
      });
    });
  }
  componentDidMount() {
    // eslint-disable-next-line
    const rellax = new Rellax('.rellax');
    // eslint-disable-next-line
    const mySwiper = new Swiper('.swiper-container', {
      slidesPerView:1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        401: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        801: {
          slidesPerView: 2,
          spaceBetween: 48,
        }
      }
    });

    this.preloader();
    this.moveHeader();
    this.scrollSpy();
  }

  render() {
    return (
      <body id="top" className="ss-preload">
        <div id="preloader" style={{ display: this.state.show ? '' : 'none' }}>
          <div id="loader"></div>
        </div>
        <Header />
        <Hero />
        <About />
        <Resume />
        <Portofolio />
        <SayHello />
        <Footer />
      </body>
    );
  }
}

export default App;
