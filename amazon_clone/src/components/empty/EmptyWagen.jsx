import React from 'react'
import './EmptyWagen.css'
import EmptyBasket from '../../assets/empty.svg'

function EmptyWagen() {
    return (
        <div className="empty">
            <div className='empty__all'>
                <img
                    className='empty__basket'
                    src={EmptyBasket}
                    alt=""
                />
                <div className="empty__info">
                    <h2>Ihr Amazon-Einkaufswagen ist leer</h2>
                    <a>Aktuelle Angebote einkaufen</a>
                    <div className="empty__buttons">
                        <button className='empty__button'>Melde dich bei deinem Konto an</button>
                        <button className='empty__button empty__button--regestrieren'>Jetzt regestrieren</button>
                    </div>
                </div>

            </div>
            <div className="empty__div"></div>
            <p>Preise und Verfügbarkeiten der bei Amazon.de angebotenen Artikel können sich jederzeit ändern. Die Preise der Artikel in deinem Einkaufswagen entsprechen den auf der Website angezeigten Preisen.

                Möchtest du einen Aktions- oder Geschenkgutschein einlösen? Auf deinem Weg zur Kasse kannst du deinen Einlösungscode eingeben.
            </p>
        </div>
    )
}

export default EmptyWagen

