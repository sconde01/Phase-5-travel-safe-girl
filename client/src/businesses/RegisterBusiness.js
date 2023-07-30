import React from 'react'
import {
 
  Typography
  } from "@material-tailwind/react";  



const RegisterBusiness = () => {


  return (
    <div>
   <div className="h-170 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mb-3 flex items-center justify-between" >

    <div className= "mb-3 flex items-center justify-center" id="mc_embed_shell" >
   
      <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
      <style type="text/css">
        {`
          #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
          /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
          We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
          `}
      </style>
      <div id="mc_embed_signup">
        <form action="https://gmail.us14.list-manage.com/subscribe/post?u=61ea26413be672d745045109c&amp;id=240f116c84&amp;f_id=00119ee0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
          <div id="mc_embed_signup_scroll">
            <h2>List Your Business</h2>
            <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
              <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required="" defaultValue="" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">Business Name </label>
              <input type="text" name="FNAME" className=" text" id="mce-FNAME" defaultValue="" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-LNAME">Your Name </label>
              <input type="text" name="LNAME" className=" text" id="mce-LNAME" defaultValue="" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-PHONE">Business website /social media </label>
              <input type="text" name="PHONE" className="REQ_CSS" id="mce-PHONE" defaultValue="" />
              <span id="mce-PHONE-HELPERTEXT" className="helper_text">
                Where can we find your business?
              </span>
            </div>
            <div id="mce-responses" className="clear foot">
              <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
              <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
            </div>
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
              <input type="text" name="b_61ea26413be672d745045109c_240f116c84" tabIndex="-1" defaultValue="" />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" defaultValue="Subscribe" />
                <p className="brandingLogo" style={{ margin: '0px auto' }}>
                  <a href="http://eepurl.com/iwH01o" title="Mailchimp - email marketing made easy and fun">
                    <img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" alt="referral badge" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>


    </div>
    </div>
  )
}

export default RegisterBusiness