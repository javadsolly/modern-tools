import React, {useState} from 'react'
import css from './Products.module.css'
import tik from '../../assets/tik.jpg'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import {ProductsData} from '../../data/products'

const Products = () => {

    const [parent] = useAutoAnimate()


    const [MenuProducts, setMenuProducts] = useState(ProductsData)

    const filter = (type) => {
        setMenuProducts(ProductsData.filter((product)=>product.type === type))
    }


  return (
    <div className= {css.container}>
        <img src= {tik} alt="" />
        <h1>Our Featured Products</h1>

        <div className={css.products}>
        <ul className={css.menu}>
                <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
                <li onClick={()=>filter("skin care")}>Skin Care</li>
                <li onClick={()=>filter("conditioner")}>Conditioners</li>
                <li onClick={()=>filter("foundation")}>Foundations</li>
            </ul>

            <div className={css.list} ref={parent}>
                {
                    MenuProducts.map((product, i) => (
                        <div className={css.product}>
                            <div className='left-s'>
                                <div className={css.name}>
                                    <span>{product.name}</span>
                                    <span>{product.detail}</span>
                                </div>
                                <span>{product.price}$</span>
                                <div>Show Now</div>
                            </div>
                            <img src={product.img} alt=""  />
                        </div>

                     ) )
                }

            </div>


        </div>



    </div>
  )
}

export default Products