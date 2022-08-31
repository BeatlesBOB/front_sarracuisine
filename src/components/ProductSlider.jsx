import React, { useEffect } from 'react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Card from './Card'

export default function ProductSlider() {

    
    useEffect(()=>{
        const cat = gsap.utils.toArray('.product__slider__cat')
        const heading = gsap.utils.toArray('.product__slider__item')
        const card = gsap.utils.toArray('.card')

        ScrollTrigger.create({
            trigger:'.product__slider',
            pin:'.product__slider__mask',
            start:'top-=185 top',
            end:`bottom top+=185`,
        });

        cat.forEach((element,index)=>{
            ScrollTrigger.create({
                trigger:element,
                start:`top top+=185`,
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
            
            // ScrollTrigger.create({
            //     trigger:element,
            //     pin:true,
            //     start:'top+=185 top',
            //     end:`+=10%`,
            //     // pinSpacing:'margin',
            //     anticipatePin:1,
            // })

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

        card.forEach((element,index)=>{
        
            const transi_TL = gsap.timeline({
                scrollTrigger:{
                    trigger:element,
                    start:`top top`,
                    end:`+=10%`,
                    scrub:1,
                },
            })
            transi_TL.to(element,{
                autoAlpha:0,
            })
    
        });
        
    },[])
  
    return (
        <>
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
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="product__slider__cat">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="product__slider__cat">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="product__slider__cat">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
        <h1 className="heading--primary">
            TEST
        </h1>
        </>
    )
}
