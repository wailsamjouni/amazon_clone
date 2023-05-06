import React from 'react'
import './Home.css'
import Banner from '../../assets/banner1.jpg'
import Product from '../../components/product/Product'


function Home() {
    return (
        <div className='home'>
            <img
                className='home__image'
                src={Banner}
                alt=""
            />
            <Product
                id='1'
                title='Bluetooth Kopfhörer, Kopfhörer Kabellos Bluetooth 5.3 Sport In Ear'
                image='https://m.media-amazon.com/images/I/71-TQ1oSm+L._AC_SY300_SX300_.jpg'
                price={23.99}
                rating={4}
            />
        </div>
    )
}

export default Home