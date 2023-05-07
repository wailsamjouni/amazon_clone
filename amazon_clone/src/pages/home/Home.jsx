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
            <div className="home_product">
                <Product
                    id='1'
                    title='Bluetooth Kopfhörer, Kopfhörer Kabellos Bluetooth 5.3 Sport In Ear'
                    image='https://m.media-amazon.com/images/I/71-TQ1oSm+L._AC_SY300_SX300_.jpg'
                    price={23.99}
                    rating={4}
                />
                <Product
                    id='2'
                    title='Logitech M185 Kabellose Maus, 2,4 GHz mit USB-Nano-Empfänger'
                    image='https://m.media-amazon.com/images/I/61d0uTjKbkL._AC_SY450_.jpg'
                    price={92.59}
                    rating={5}
                />
            </div>
            <div className="home_product">
                <Product
                    id='3'
                    title='SanDisk Ultra Android microSDXC UHS-I Speicherkarte 256 GB + Adapter'
                    image='https://m.media-amazon.com/images/I/51G0OYpkCYL._AC_SX450_.jpg'
                    price={18.59}
                    rating={3}
                />
                <Product
                    id='4'
                    title='INIU USB C Kabel, 100W 2m PD 5A Schnellladekabel Ladekabel USB C auf USB C Kabel'
                    image='https://m.media-amazon.com/images/I/71I7ec4EFlL._AC_SY606_.jpg'
                    price={7.59}
                    rating={4}
                />
                <Product
                    id='5'
                    title='EasyAcc Hülle für Samsung Galaxy Tab A8 2022/2021 SM-X200/X205/X207'
                    image='https://m.media-amazon.com/images/I/81PZUtXex5L._AC_SX425_.jpg'
                    price={12.08}
                    rating={5}
                />
            </div>
            <div className="home_product">
                <Product
                    id='6'
                    title='La Rustichella Carpaccio Aus Schwarzem Trüffel, 90g'
                    image='https://m.media-amazon.com/images/I/71OupG10aKL._SX425_.jpg'
                    price={30.50}
                    rating={4}
                />
                <Product
                    id='7'
                    title='Antica Torroneria Piemontese Tartufi Dolci weiße Stracciatella Trüffelpralinen aus Italien'
                    image='https://m.media-amazon.com/images/I/81Q0bIfroAL._SY445_.jpg'
                    price={13.23}
                    rating={3}
                />
            </div>
            <div className="home_product">
                <Product
                    id='8'
                    title='INNOCN Gaming Monitor 40 Zoll, Ultrawide UWQHD 3440 x 1440P IPS, 144Hz Bildschirm'
                    image='https://m.media-amazon.com/images/I/81+FDuOItRL._AC_SY450_.jpg'
                    price={639}
                    rating={5}
                />

            </div>

        </div>
    )
}

export default Home