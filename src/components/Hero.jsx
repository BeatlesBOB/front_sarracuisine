import React,{useEffect} from 'react'
import {
  NavLink,
} from "react-router-dom";
import gsap from 'gsap';

export default function Hero(props) {

  useEffect(()=>{
    gsap.to('.heading--primary',{
      y:0,
      opacity:1,
      duration:.5,
    })
  })
  return (
    <section className="hero">
      <div className="hero__left">
        <div className="animate animate--container">
          <h1 className="heading--primary animate--txt">
            Sarracuisine
          </h1>
        </div>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos vero repellat reiciendis itaque, corrupti perferendis. In, consequuntur. Saepe magni possimus aut repudiandae dolorem quos placeat eos, reiciendis suscipit consectetur ab?
        </p>
        <NavLink className="btn btn--primary" to="/produits">Nos produits</NavLink>
      </div>
      <div className="hero__right">
          <nav className="hero__navigation">
            <div className="hero__item hero__item--crepes">
              <div className="item__content">
                  <h3 className="heading--tertiary heading--tertiary--white item__heading">Crèpes</h3>
                  <p className="item__paragraph paragraph paragraph--white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque suscipit aliquid molestias minima dignissimos repellat fugit velit voluptas.
                  </p>
              </div>
            </div>
            <div className="hero__item hero__item--cidres">
              <div className="item__content">
                  <h3 className="heading--tertiary heading--tertiary--white item__heading">Cidres</h3>
                  <p className="item__paragraph paragraph paragraph--white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque suscipit aliquid molestias minima dignissimos repellat fugit velit voluptas.
                  </p>
              </div>
            </div>
            <div className="hero__item hero__item--bocaux">
              <div className="item__content">
                  <h3 className="heading--tertiary heading--tertiary--white item__heading">Bocaux</h3>
                  <p className="item__paragraph paragraph paragraph--white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque suscipit aliquid molestias minima dignissimos repellat fugit velit voluptas.
                  </p>
              </div>
            </div>
          </nav>
      </div>
    </section>
  )
}
