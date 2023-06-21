import React from 'react'
import Logo from '../../assets/logo.png.jpg'
import {
    PhoneIcon,
    LoginIcon,
    UserIcon,
    LinkIcon,
  } from '@heroicons/react/outline';
  import css from './Footer.module.css'
  

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>E-Commerce</span>
        </div>
        
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact us</span>
            <span className={css.pngLine}>

              
              <span className={css.span}>

              <PhoneIcon className={css.icon} />
              <span className={css.span}>333-256-452</span>
              </span>


            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>

              <LoginIcon className={css.icon} />
              <span className={css.span}>Sign in</span>

            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>

              <UserIcon className={css.icon} />
              <span className={css.span}>About us</span>

            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>

              <LinkIcon className={css.icon} />
              <span className={css.span}>Privacy & Terms</span>

            </span>
          </div>
        </div>

      </div>
      <br />
      <p className={css.copy}>CopyRight@ 2021, Tech2 etc - HTML CSS Ecommerce Template</p>

    </div>
  )
}

export default Footer