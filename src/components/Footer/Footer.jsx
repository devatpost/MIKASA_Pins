import React from 'react'
import './footer.css'
import footerLogo from '../../assets/P_Logo.svg'
import clock from '../../assets/clock.svg'
import flight from '../../assets/flight-takeoff.svg'
import loading from '../../assets/loading.svg'

const Footer = () => {
  return (
        <div className="footer">
          <div className="footerBox">
             <div className="footerInner">
              <div className="outFlex">
                <div className="imgFlex">
                  <img src={footerLogo}/>
                </div>
                <div>
                  <span className="footerText">developed by</span>
                </div>
              </div>
              <div className="sameFlex">
                <img src={clock} className="clock"/>
                <div className="flexCol">
                  <div className="upperText">
                    Lead Time
                  </div>
                  <div className="lowerText">
                    5-6 Weeks
                  </div>
                </div>
              </div>
              <div className="sameFlex">
                <img src={flight} className=""/>
                <div className="flexCol">
                  <div className="upperText">
                    Delivery Included
                  </div>
                  <div className="lowerText">
                    globe
                  </div>
                </div>
              </div>
              <div className="sameFlex">
                <img src={loading} className="clock"/>
                <div className="flexCol">
                  <div className="upperText">
                    Click & Configure
                  </div>
                  <div className="lowerText">
                    custom design
                  </div>
                </div>
              </div>
             </div>
          </div>
          <div className="bottomInfo">
            © 2022 POST 105 Technologies | All Rights Reserved.
        </div>
        </div>
  )
}

export default Footer
