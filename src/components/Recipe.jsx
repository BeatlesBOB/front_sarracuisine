
import React from 'react'
import egg from '../asset/images/oeuf.png'
import flour from '../asset/images/farine.png'
import table from '../asset/images/table.webp'
import { useEffect } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'

export default function Recipy() {

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        // ScrollTrigger.create({
        //     pin:".recipe__item--1",
        //     start:"top center",
        //     end:"+=300px",
        //     markers:true
        // })
    })

  return (
    <section className="recipe">
        <div className="recipe__container">
            <div className="recipe__images">
                <div className="recipe__item recipe__item--1">
                     <img src={flour} alt="Farine" />
                </div>
                <div className="recipe__item recipe__item--2">
                    <img src={egg} alt="Oeufs" />
                </div>
                <div className="recipe__item recipe__item--3">
                    <img src={table} alt="table" className='recipe__mask' />
                </div>
            </div>
            <div className="recipe__text">
                <h2 className="heading--secondary recipe__heading">Nos recettes</h2>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quam repudiandae dolor voluptatem possimus aliquid. Totam tempora tempore facilis, ea consectetur cupiditate assumenda doloremque libero. Molestiae impedit adipisci suscipit consequatur!
                    Deserunt explicabo illum, nostrum quas nihil voluptatum ipsum vel a molestias temporibus atque, officiis voluptas soluta, ullam nesciunt aspernatur! Consequuntur dolorem perspiciatis nisi nostrum dolor! Assumenda omnis doloribus voluptate cum.
                    Rem quis autem aliquid at officia, dignissimos nemo necessitatibus dolor distinctio quibusdam odio, numquam aperiam laboriosam, ducimus laudantium quidem perspiciatis recusandae quasi commodi tenetur deleniti a iste est. Esse, dicta.
                </p>
            </div>
        </div>
    </section>
  )
}
