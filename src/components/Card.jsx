import React from 'react'
import graine from '../asset/images/graines_torr.png'
import CartIcon from './icons/CartIcon'

export default function Card() {
  return (
    <div className="card">
        <div className="card__header">
            <img src={graine} alt="Grain torréfié" />
        </div>
        <div className="card__body">
            <h4 className="heading--quaternary card__txt">Graines torréfiées</h4>
            <button className="btn btn--round btn--primary">
                <CartIcon />
            </button>
        </div>
    </div>
  )
}
