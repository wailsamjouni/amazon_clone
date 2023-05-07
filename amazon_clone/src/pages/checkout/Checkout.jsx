import React from 'react'
import './Checkout.css'
import { useStateValue } from '../../StateProvider'
import EmptyBasket from '../../assets/empty.svg'
import AddPocket from '../../assets/puls.jpg'
import EmptyWagen from '../../components/empty/EmptyWagen'
import CheckoutProduct from '../../components/checkoutproduct/CheckoutProduct'

function Checkout() {

    const [{ basket }, dispatch] = useStateValue();
    console.log(basket)

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
        })
    }

    return (
        <div className='checkout'>
            <div className="checkout__top">
                <button
                    className='checkout__buttontop'
                >Mehr erfahren</button>
                <h5>Amazon-Konto aufladen <span>und für Wunscheinkäufe sparen.</span></h5>
                <img
                    className='checkout__imagetop'
                    src={AddPocket}
                    alt="" />
            </div>


            {
                basket?.length === 0 ? (<EmptyWagen />)
                    : (
                        <div className='checkout__products'>
                            <h2 className='checkout__title'>Einkaufswagen</h2>
                            {
                                basket?.map(item => {
                                    const { id, title, image, price, rating } = item;
                                    return <CheckoutProduct
                                        key={id}
                                        id={id}
                                        title={title}
                                        image={image}
                                        price={price}
                                        rating={rating}
                                    />
                                })
                            }
                        </div>
                    )
            }
        </div>
    )
}

export default Checkout