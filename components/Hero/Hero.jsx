import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {motion} from 'framer-motion'



const Hero = () => {

    const transition = {duration: 4, type: 'spring'}
  return (
    <div className={css.container}>
        {/*left side*/}
        <div className={css.h_sides}>
            <span>skin protection cream</span>

            <div className={css.text2}>
                <span>Trendy Collection</span>
                <span>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced</span>
            </div>
            
        </div>

        {/*midle side hero image*/}
        <div className={css.wrapper}>

            {/* blue circle */}
            <motion.div
            initial={{bottom: "2rem"}}
            whileInView={{bottom: '0rem'}}
            className={css.blueCircle}
            transition={transition}
            ></motion.div>

             {/*hero image*/}
            <motion.img
            transition={transition}
            initial={{bottom:"-2rem"}}
            whileInView={{bottom : "0rem"}}
            
            src={HeroImg} alt="" width={600}/>
            
           

        </div>

        {/*right side */}
        <div className={css.hsides}>
            <div className={css.traffic}>
                <span>1.2m</span>
                <span>Monthly Views</span>
            </div>

            <div className={css.customers}>
                <span>100k</span>
                <span>Happy Customers</span>


            </div>
        </div>

    </div>
  )
}

export default Hero