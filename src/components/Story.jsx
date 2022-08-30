import React,{useEffect} from 'react'
import Story_1 from '../asset/images/story_1.webp'
import Story_2 from '../asset/images/story_2.png'
import Story_3 from '../asset/images/story_3.jpeg'
import {NavLink} from "react-router-dom";
import gsap from 'gsap';

export default function Story() {

    useEffect(()=>{
        const imgArray = gsap.utils.toArray(".story__item")
        imgArray.forEach((el)=>{
            gsap.to(el, {
                scrollTrigger: {
                    trigger: '.story',
                    start: "top bottom", // when the top of the trigger hits the top of the viewport
                    end: "bottom center", // end after scrolling 500px beyond the start
                    scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar,
                    stagger:10
                },
                y:0
            });
        })

        
    })

  return (
    <section className="story">
        <div className="container story__container">
            <div className="story__text">
                <h2 className="heading--secondary story__heading">Mon histoire</h2>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quam repudiandae dolor voluptatem possimus aliquid. Totam tempora tempore facilis, ea consectetur cupiditate assumenda doloremque libero. Molestiae impedit adipisci suscipit consequatur!
                    Deserunt explicabo illum, nostrum quas nihil voluptatum ipsum vel a molestias temporibus atque, officiis voluptas soluta, ullam nesciunt aspernatur! Consequuntur dolorem perspiciatis nisi nostrum dolor! Assumenda omnis doloribus voluptate cum.
                    Rem quis autem aliquid at officia, dignissimos nemo necessitatibus dolor distinctio quibusdam odio, numquam aperiam laboriosam, ducimus laudantium quidem perspiciatis recusandae quasi commodi tenetur deleniti a iste est. Esse, dicta.
                </p>
                <NavLink className="btn btn--primary" to="/produits">Nos produits</NavLink>
            </div>
            <div className="story__images">
                <div className="story__item story__item--1">
                    <img src={Story_1} alt="Story 1" />
                </div>
                <div className="story__item story__item--2">
                    <img src={Story_2} alt="Story 2" />
                </div>
                <div className="story__item story__item--3">
                    <img src={Story_3} alt="Story 3" />
                </div>
            </div>
        </div>
    </section>
  )
}
