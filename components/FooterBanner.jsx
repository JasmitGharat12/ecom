import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client'; 

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2,
saleTime, smallText1, midText1, desc1, buttonText1, image1} }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText1}</p>
          <h3>{midText1}</h3>
          <p className="company-desc">{desc1}</p>
          {/* <Link href={`/product/${product}`}>
          </Link> */}
           <button className="button" type="button">{buttonText1}
            </button>
        </div>

        <img
           src={urlFor(image1)}
           className="footer-banner-image"
        />
      </div>
    </div>
  )
}

export default FooterBanner