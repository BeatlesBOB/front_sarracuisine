import React, { useEffect } from 'react'
import graine from '../asset/images/graines_torr.png'
import CartIcon from '../components/icons/Cart'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function ProductSlider() {

    
    useEffect(()=>{
        const item = gsap.utils.toArray('.product__slider__cat')
        const heading = gsap.utils.toArray('.product__slider__item')
        ScrollTrigger.create({
            trigger:'.product__slider',
            pin:'.product__slider__mask',
            start:'top top',
            end:'bottom top',
        });

        item.forEach((element,index)=>{
            ScrollTrigger.create({
                trigger:element,
                start:'top top-=150',
                end:'+=10',
                onEnter: () => {
                    gsap.to('.product__slider__list',{
                        yPercent: -100/heading.length*index,
                        duration:.2
                    })
                },
                onEnterBack: () => {
                    gsap.to('.product__slider__list',{
                        yPercent: -100/heading.length*(index-(index===0?0:1)),
                        duration:.2
                    })
                },
            });
            
            const item_TL = gsap.timeline({
                scrollTrigger:{
                    trigger:element,
                    start:'top bottom',
                    end:'bottom top+=50%',
                    scrub:1,
                },
            })
            
        
            item_TL.fromTo(element.children,
                {
                    x:"15vw",
                    autoAlpha:0
                },
                {
                    x:0,
                    ease: "power4.out",
                    autoAlpha:1,
                    stagger: 0.1
                }
        
            )    
        });
        
    },[])
  
    return (
        <section className="product__slider">
            <div className="product__slider--left">
                <div className="product__slider__mask" >
                    <ul className="product__slider__list">
                        <li className="product__slider__item" >
                            <h3 className="heading--secondary">
                                Pépites salés
                            </h3>
                        </li>
                        <li className="product__slider__item" >
                            <h3 className="heading--secondary">
                                Douceurs sucrées
                            </h3>
                        </li>
                        <li className="product__slider__item" >
                            <h3 className="heading--secondary">
                                Crêpes & cidres
                            </h3>
                        </li>
                        <li className="product__slider__item" >
                            <h3 className="heading--secondary">
                                Breuvages
                            </h3>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="product__slider--right">
                <div className="product__slider__cat">
                    <div className="card">
                        <div className="card__header">
                            <img src={graine} alt="Grain torréfié" />
                        </div>
                        <div className="card__body">
                            <h4 className="heading--quaternary card__txt">
                                Graines torréfiées
                            </h4>
                            <button className="btn btn--round btn--primary">
                                <CartIcon />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__header">
                            <img src={graine} alt="Grain torréfié" />
                        </div>
                        <div className="card__body">
                            <h4 className="heading--quaternary card__txt">
                                Graines torréfiées
                            </h4>
                            <button className="btn btn--round btn--primary">
                                <CartIcon />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__header">
                            <img src={graine} alt="Grain torréfié" />
                        </div>
                        <div className="card__body">
                            <h4 className="heading--quaternary card__txt">
                                Graines torréfiées
                            </h4>
                            <button className="btn btn--round btn--primary">
                                <CartIcon />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__header">
                            <img src={graine} alt="Grain torréfié" />
                        </div>
                        <div className="card__body">
                            <h4 className="heading--quaternary card__txt">
                                Graines torréfiées
                            </h4>
                            <button className="btn btn--round btn--primary">
                                <CartIcon />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__header">
                            <img src={graine} alt="Grain torréfié" />
                        </div>
                        <div className="card__body">
                            <h4 className="heading--quaternary card__txt">
                                Graines torréfiées
                            </h4>
                            <button className="btn btn--round btn--primary">
                                <CartIcon />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__header">
                            <img src={graine} alt="Grain torréfié" />
                        </div>
                        <div className="card__body">
                            <h4 className="heading--quaternary card__txt">
                                Graines torréfiées
                            </h4>
                            <button className="btn btn--round btn--primary">
                                <CartIcon />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="product__slider__cat">
                    <div className="card">
                        <div className="card__header">
                            <img src={graine} alt="Grain torréfié" />
                        </div>
                        <div className="card__body">
                            <h4 className="heading--quaternary card__txt">
                                Graines torréfiées
                            </h4>
                            <button className="btn btn--round btn--primary">
                                <CartIcon />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__header">
                            <img src={graine} alt="Grain torréfié" />
                        </div>
                        <div className="card__body">
                            <h4 className="heading--quaternary card__txt">
                                Graines torréfiées
                            </h4>
                            <button className="btn btn--round btn--primary">
                                <CartIcon />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__header">
                            <img src={graine} alt="Grain torréfié" />
                        </div>
                        <div className="card__body">
                            <h4 className="heading--quaternary card__txt">
                                Graines torréfiées
                            </h4>
                            <button className="btn btn--round btn--primary">
                                <CartIcon />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__header">
                            <img src={graine} alt="Grain torréfié" />
                        </div>
                        <div className="card__body">
                            <h4 className="heading--quaternary card__txt">
                                Graines torréfiées
                            </h4>
                            <button className="btn btn--round btn--primary">
                                <CartIcon />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__header">
                            <img src={graine} alt="Grain torréfié" />
                        </div>
                        <div className="card__body">
                            <h4 className="heading--quaternary card__txt">
                                Graines torréfiées
                            </h4>
                            <button className="btn btn--round btn--primary">
                                <CartIcon />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__header">
                            <img src={graine} alt="Grain torréfié" />
                        </div>
                        <div className="card__body">
                            <h4 className="heading--quaternary card__txt">
                                Graines torréfiées
                            </h4>
                            <button className="btn btn--round btn--primary">
                                <CartIcon />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="product__slider__cat">
                    <div className="card">
                        <div className="card__header">
                            <img src={graine} alt="Grain torréfié" />
                        </div>
                        <div className="card__body">
                            <h4 className="heading--quaternary card__txt">
                                Graines torréfiées
                            </h4>
                            <button className="btn btn--round btn--primary">
                                <CartIcon />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__header">
                            <img src={graine} alt="Grain torréfié" />
                        </div>
                        <div className="card__body">
                            <h4 className="heading--quaternary card__txt">
                                Graines torréfiées
                            </h4>
                            <button className="btn btn--round btn--primary">
                                <CartIcon />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__header">
                            <img src={graine} alt="Grain torréfié" />
                        </div>
                        <div className="card__body">
                            <h4 className="heading--quaternary card__txt">
                                Graines torréfiées
                            </h4>
                            <button className="btn btn--round btn--primary">
                                <CartIcon />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__header">
                            <img src={graine} alt="Grain torréfié" />
                        </div>
                        <div className="card__body">
                            <h4 className="heading--quaternary card__txt">
                                Graines torréfiées
                            </h4>
                            <button className="btn btn--round btn--primary">
                                <CartIcon />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__header">
                            <img src={graine} alt="Grain torréfié" />
                        </div>
                        <div className="card__body">
                            <h4 className="heading--quaternary card__txt">
                                Graines torréfiées
                            </h4>
                            <button className="btn btn--round btn--primary">
                                <CartIcon />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__header">
                            <img src={graine} alt="Grain torréfié" />
                        </div>
                        <div className="card__body">
                            <h4 className="heading--quaternary card__txt">
                                Graines torréfiées
                            </h4>
                            <button className="btn btn--round btn--primary">
                                <CartIcon />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="product__slider__cat">
                    <div className="card">
                        <div className="card__header">
                            <img src={graine} alt="Grain torréfié" />
                        </div>
                        <div className="card__body">
                            <h4 className="heading--quaternary card__txt">
                                Graines torréfiées
                            </h4>
                            <button className="btn btn--round btn--primary">
                                <CartIcon />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__header">
                            <img src={graine} alt="Grain torréfié" />
                        </div>
                        <div className="card__body">
                            <h4 className="heading--quaternary card__txt">
                                Graines torréfiées
                            </h4>
                            <button className="btn btn--round btn--primary">
                                <CartIcon />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__header">
                            <img src={graine} alt="Grain torréfié" />
                        </div>
                        <div className="card__body">
                            <h4 className="heading--quaternary card__txt">
                                Graines torréfiées
                            </h4>
                            <button className="btn btn--round btn--primary">
                                <CartIcon />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__header">
                            <img src={graine} alt="Grain torréfié" />
                        </div>
                        <div className="card__body">
                            <h4 className="heading--quaternary card__txt">
                                Graines torréfiées
                            </h4>
                            <button className="btn btn--round btn--primary">
                                <CartIcon />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__header">
                            <img src={graine} alt="Grain torréfié" />
                        </div>
                        <div className="card__body">
                            <h4 className="heading--quaternary card__txt">
                                Graines torréfiées
                            </h4>
                            <button className="btn btn--round btn--primary">
                                <CartIcon />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__header">
                            <img src={graine} alt="Grain torréfié" />
                        </div>
                        <div className="card__body">
                            <h4 className="heading--quaternary card__txt">
                                Graines torréfiées
                            </h4>
                            <button className="btn btn--round btn--primary">
                                <CartIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
