import React from 'react'
import './Subtotal.css'
import { useStateValue } from '../../StateProvider'
import { getBasketTotal } from '../../reducer';


function Subtotal() {
    const [{ basket }] = useStateValue();

    return (
        <div className='subtotal'>

            <h5>Willkommen bei Amazon! Deine erste Bestellung ist für KOSTENLOSEN Versand qualifiziert. <span>Details</span></h5>
            <div className='subtotal__gift'>
                <h3>Summe ({basket.length} Artikel): {getBasketTotal} €</h3>
                <small>
                    <input type="checkbox" />
                    <span>Bestellung enthält ein Geschenk</span>
                </small>
            </div>
            <button>Zur Kasse gehen</button>
        </div>
    )
}

export default Subtotal