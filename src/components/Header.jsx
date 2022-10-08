import React,{useEffect} from 'react'
import logo from '../asset/images/logo.png'; // Tell webpack this JS file uses this image
import {NavLink} from "react-router-dom";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
export default function Header(props) {  
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)

    gsap.to('.header',{
      boxShadow:'rgba(0,0,0,.5) 0 0 1rem',
      scrollTrigger:{
        trigger:'.header',
        start:'top top-=50',
        end:'top +=100',
        scrub:1
      }
    })
  },[])

  return (
    <header className="header">
        <div className="header__logo--container">
          <img src={logo} alt="Logo Sarracuisine" className='logo'/>
        </div>
        <nav className="navigation  nav--primary">
          <ul className="navigation__list">
            <li className="navigation__item">
              <NavLink className="navigation__link" to="/produits">Nos produits</NavLink>
              <ul className="navigation__sublist">
                <li className="navigation__item">
                  <NavLink className="navigation__link" to="/pepites">Pépites salées</NavLink>
                </li>
                <li className="navigation__item">
                  <NavLink className="navigation__link" to="/douceurs">Douceurs sucrées</NavLink>
                </li>
                <li className="navigation__item">
                  <NavLink className="navigation__link" to="/crepes_cidres">Crèpes et cidres</NavLink>
                </li>
                <li className="navigation__item">
                  <NavLink className="navigation__link" to="/breuvages">Breuvages</NavLink>
                </li>
              </ul>
            </li>
            <li className="navigation__item">
              <NavLink className="navigation__link" to="/comptoires">Nos comptoires</NavLink>
              <ul className="navigation__sublist">
                <li className="navigation__item">
                  <NavLink className="navigation__link" to="/comptoires/paris">Paris</NavLink>
                </li>
                <li className="navigation__item">
                  <NavLink className="navigation__link" to="/comptoires/saint_cere">Saint-Céré</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <nav className="navigation nav--secondary">
          <ul className="navigation__list">
            <li className="navigation__item">
              <NavLink className="navigation__link" to="/contact">Nous contacter</NavLink>
            </li>
            <li className="navigation__item">
              <NavLink className="navigation__link btn btn--primary" to="/login">Se connecter</NavLink>
            </li>
          </ul>
        </nav>
    </header>
  )
}
