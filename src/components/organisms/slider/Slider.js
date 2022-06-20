import React, { useEffect, useState } from "react";
import Slide from "../../molecules/slide/Slide";
import Container from "./style";
import { SliderUno } from "../../../assets";

const Slider = () => {
  const [sliderCounter, setSliderCounter] = useState(1);

  useEffect(() => {
    let interval = setInterval(() => {
      if (sliderCounter < slids.length) {
        setSliderCounter((sliderCounter) => sliderCounter + 1);
      } else {
        setSliderCounter(1);
      }
    }, 6000);
    return () => clearInterval(interval);
  });

  const slids = [
    {
      bg: SliderUno,
      title: "!únete a nuestro equipo! nos vemos en la cancha",
      link: "",
      botonText: "Postulá aquí",
      botonUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfb56zbIvuryesCU4q7xHTgc2VB6oSigFvKfyo7mau5kqlLIg/viewform",
    }/* ,
    {
      text: "slider 2",
      bg: SliderDos,
      title:
        "¡VEN A MEJORAR TU RENDIMIENTO PARA OBTENER UNA BECA DEPORTIVA EN LAS MEJORES UNIVERSIDADES DE USA, CHILE, O PORQUÉ NO, LLEGAR A SER UN DEPORTISTA PROFESIONAL!",
      link: "",
      botonText: "Postulá aquí",
      botonUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfb56zbIvuryesCU4q7xHTgc2VB6oSigFvKfyo7mau5kqlLIg/viewform",
    } */
  ];
  return (
    <Container>
      <div className="slider container">
        <ul className="slider_container" id="slider-container">

          {slids.map((slid, i) => (
            <Slide
              key={i}
              show={sliderCounter === i + 1 && true}
              bg={slid.bg}
              title={slid.title}
              link={slid.link}
              botonText={slid.botonText}
              botonUrl={slid.botonUrl}
            ></Slide>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Slider;

/* 

let d = document,
    slider = {
        el: document.querySelector('.slider'),
        slider: null,
        bulletContainer: null,
        inicial: 2,
        autoPlay: true,
        autoSlider: false,
        autoPlaySecond: 6000,
        startX: 0,
        isDown: false,
        dif: 0,
        sliders: [{
            logo: 'https://static.lenovo.com/na/small-business/homepage/main-hero/lenovo-PRO-logo-white.png',
            title: false,
            copy: 'LenovoPRO is business shopping, simplified. Save up to an extra 5% off Think PCs & servers, and get FREE expedited delivery. Call a Small Business Specialist at 866-426-0911.',
            copyMobile: 'Unlock an extra 5% off Think & dedicated business support.',
            link: '/business/smbpro/?IPromoID=LEN971467',
            linkCopy: 'Learn More',
            linkinternal: 'internal',
            imgDesktop: 'https://via.placeholder.com/1920X538/FFD55A/393250',
            imgMobile: '//static.lenovo.com/na/small-business/homepage/main-hero/lenovo-smb-lenovo-pro-homepage-banner-mobile-new.jpg',
            secondLink: false,
            secondLinkcopy: false,
            secondInternal: false,
        }, {
            logo: false,
            title: 'Need Tech Advice? Ask Us!',
            copy: "Call our Small Business Specialists at 866-426-0911",
            copyMobile: 'Call our Small Business Specialists at 866-426-0911',
            link: '/sales/?IPromoID=LEN550144',
            linkCopy: "Learn More",
            linkinternal: 'internal',
            imgDesktop: 'https://via.placeholder.com/1920X538/FFD55A/393250',
            imgMobile: '//static.lenovo.com/na/small-business/homepage/main-hero/lenovo-smb-callcenter-homepage-banner-mobile.jpg',
            secondLink: false,
            secondLinkcopy: false,
            secondInternal: false,
        }],
        createSlideContainer: function(){
            
           this.el.innerHTML = '<ul class="slider_container" id="slider-container" > </ul> <div class="controls"> <ul id="bulletContainer"></ul> </div>';
           this.bulletContainer = document.getElementById('bulletContainer');
           this.slider = document.querySelector('.slider_container');
        },
        changeSlider: function (position, logo, title, copy, copyMobile, linkCopy, link, linkinternal, imgDesktop, imgMobile, secondLink, secondLinkcopy, secondInternal) {
            if (typeof this.sliders[position] === 'undefined') {
                console.log('%cErros: Slider N° ' + number + ' does not existe please, change it', 'color:white; background:red;padding:6px');

            } else {
                position = position - 1
                this.sliders[position].logo = logo
                this.sliders[position].title = title
                this.sliders[position].copy = copy
                this.sliders[position].copyMobile = copyMobile
                this.sliders[position].link = link
                this.sliders[position].linkCopy = linkCopy
                this.sliders[position].linkinternal = linkinternal
                this.sliders[position].imgDesktop = imgDesktop
                this.sliders[position].imgMobile = imgMobile;
                this.sliders[position].secondLink = secondLink;
                this.sliders[position].secondLinkcopy = secondLinkcopy;
                this.sliders[position].secondInternal = secondInternal;
            }
        },
        addSlider: function (position, logo, title, copy, copyMobile, linkCopy, link, linkinternal, imgDesktop, imgMobile, secondLink, secondLinkcopy, secondInternal) {
            let newSlide = {
                logo: logo || false,
                title: title || false,
                copy: copy || false,
                copyMobile: copyMobile || false,
                link: link || '#',
                linkCopy: linkCopy || false,
                linkinternal: linkinternal || true,
                imgDesktop: imgDesktop || 'https://via.placeholder.com/1920x530',
                imgMobile: imgMobile || false,
                secondLink: secondLink || false,
                secondLinkcopy: secondLinkcopy || false,
                secondInternal: secondInternal || false,
            };
            this.sliders.splice(position - 1, 0, newSlide);
            console.log('%c Slider N°' + position + ' has been added ✔', 'color:#FFD55A; background:#393250;padding:6px 12px')
        },
        isColor: function (value) {
            if (value.indexOf('//') > -1) {
                return "url('" + value + "') center center no-repeat"
            } else {
                return value
            }
        },
        secondButton: function (link, text) {
            if (link !== false && text !== false) {
                return '<a href="' + link + '" class="buy_now">' + text + '</a>'
            } else {
                return ''
            }
        },
        appendSlide: function () {
            let that = this;

            for (let i = 0; i < that.sliders.length; i++) {

                const element = that.sliders[i];
                let li = document.createElement('li')
                i == 0 ? li.classList.add('show') : '';

                li.style.background = '' + that.isColor(element.imgDesktop) + '';

                li.innerHTML = '<a href="' + element.link + '" class="mobile-link" target="_blank"></a> <div class="left-desc"> <figure> <div class="logo"> <img src="' + element.logo + '" alt=""></div><figcaption> <div class="copy-container"><a href="' + element.link + '"> <h3>' + element.title + '</h3> </a> <p class="desktop-copy">' + element.copy + '</p><p class="mobile-copy">' + element.copyMobile + '</p></div><div class="btn-container"><a href="' + element.link + '" class="buy_now">' + element.linkCopy + '</a>' + that.secondButton(element.secondLink, element.secondLinkcopy) + '</div></figcaption> </figure> </div>';
                this.slider.append(li)
            }
        },
        addBullets: function () {
            let sliders = this.sliders;
            for (let i = 0; i < sliders.length; i++) {

                let li = document.createElement('li')
                i == 0 ? li.classList.add('show') :
                    li.classList.add('bullet')
                li.setAttribute('data-number', i + 1)
                this.bulletContainer.append(li)
            }
            this.slideSlider()
        },
        activeSlider: function () {
            var show = document.querySelectorAll('.show');
            for (let index = 0; index < show.length; index++) {
                const element = show[index];
                element.classList.remove('show')
            }
            d.querySelector('.slider_container li:nth-child(' + this.inicial + ')').classList.add('show')
            d.querySelector('.controls ul li:nth-child(' + this.inicial + ')').classList.add('show');
            var change = (-100 + this.inicial * 100)
            this.inicial === this.sliders.length ? this.inicial = 1 : this.inicial++;
            this.slider.style.transform = 'translateX(-' + change + '%)'
        },
        slideSlider: function () {
            var that = this
            var bullets = this.bulletContainer.querySelectorAll('li');

            for (let i = 0; i < bullets.length; i++) {
                const element = bullets[i];
                element.addEventListener('click', function () {
                    that.inicial = parseInt(this.getAttribute('data-number'));
                    that.activeSlider();
                    that.clear()
                    that.automSlider()
                })

            }
        },
        slideOver: function () {
            var that = this
            that.slider.addEventListener('mouseenter', function () {
                that.clear();
                that.slideLeave()
            })

        },
        slideLeave: function () {
            var that = this
            that.slider.addEventListener('mouseleave', function () {

                that.clear()
                that.automSlider()
            })
        },

        slideStart: function () {
            var that = this
            that.slider.addEventListener('mousedown', function (e) {
                that.clear()
                that.isDown = true;
                that.startX = e.clientX;
                that.slider.style.left = '0px';
            })

        },
        slideMove: function () {
            var that = this;

            this.slider.addEventListener('mousemove', function (e) {

                if (that.isDown) {
                    that.dif = that.startX - e.clientX;
                    that.slider.style.left = '' + -1 * that.dif + 'px';
                }

            })
        },
        slideEnd: function () {
            var that = this
            this.slider.addEventListener('mouseup', function () {
                that.isDown = false;
                that.slider.style.left = '' + 0 + 'px';

                if (that.dif < 0) {

                    if (that.inicial > 2) {
                        that.inicial = that.inicial - 2
                    } else if (that.inicial === 1) {
                        that.inicial = that.sliders.length - 1
                    } else if (that.inicial === 2) {
                        that.inicial = that.sliders.length
                    }
                }

                that.activeSlider();
                that.automSlider()
            })
        },

        automSlider: function () {
            var that = this;
            if (that.autoPlay === true) {
              
                that.autoSlider = setInterval(() => {
                    that.activeSlider()
                }, that.autoPlaySecond);

            } else {
                that.clear()
            }
        },
        clear: function () {
            clearInterval(this.autoSlider)
        },
        init: function () {
            this.createSlideContainer();
            this.appendSlide()
            this.addBullets();
            this.automSlider();
            this.slideStart()
            this.slideEnd()
            this.slideMove();
            console.log('%c Slider Ready ✔', 'color:#393250; background:#FFD55A;padding:6px 12px')
        }
    }

window.onload = function () {
    slider.autoPlay = false
    slider.autoPlaySecond = 4000;
    slider.init();
};




slider.addSlider(1, "//static.lenovo.com/na/homepage/heros/main-banner/lenovo-bfij-2021-homepage-banner-logo.png", "Unbelievable Deals", "Save up to 76% on amazing doorbuster deals on PCs and Tech. Prices dropping on deals throughout the day! Plus earn 2x MyLenovo Rewards. Join and save more to Shop like a PRO.", "Save up to 76% on amazing doorbuster deals on PCs and Tech. Prices dropping on deals throughout the day!", "Shop Now", "/d/deals/doorbusters?IPromoID=LEN215330", "internal", "https://via.placeholder.com/1920X538/FFD55A/393250", "blue", false, false, "internal")

slider.addSlider(3, "//static.lenovo.com/na/homepage/heros/main-banner/lenovo-bfij-2021-homepage-banner-logo.png", "Unbelievable Deals", "Save up to 76% on amazing doorbuster deals on PCs and Tech. Prices dropping on deals throughout the day! Plus earn 2x MyLenovo Rewards. Join and save more to Shop like a PRO.", "Save up to 76% on amazing doorbuster deals on PCs and Tech. Prices dropping on deals throughout the day!", "Shop Now", "/d/deals/doorbusters?IPromoID=LEN215330", "internal", "https://via.placeholder.com/1920X538/393250/FFD55A", "blue", 'www.google.com.ar', 'Learn More', "internal") */
