import React from 'react'

const Slide = ({num, show, botonText, botonUrl, bg, title}) => {
  return (
    <li className={show ? 'show' : ''} style={{backgroundImage: `url(${bg})`}}>
    <div className="left-desc">
      <figure>
 
        <figcaption>
          <div className="copy-container">
            <p className="desktop-copy">
             {title}
            </p>
            <p className="mobile-copy">
              Save up to 76% on amazing doorbuster deals on PCs and Tech.
              Prices dropping on deals throughout the day! {num}
            </p>
          </div>
        {botonText &&  <div className="btn-container">
            <a
              href={botonUrl}
              className="buy_now"
            >
              {botonText}
            </a>
          </div>}
        </figcaption>
      </figure>
    </div>
  </li>
  )
}

export default Slide