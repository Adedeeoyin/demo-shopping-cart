import { Link, useLocation } from "react-router-dom"
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { useState } from "react";
import CartHover from "../../components/CartHover";

export default function Product_Layout({children}) {
  const [ hover, setHover] = useState(false)
    const navbar = [{name:'Product Listing', path:'/product-list'}, {name:'Shopping Cart', path:'/shopping-cart'}]
    const state = useSelector((state)=> state.cart)

    const location = useLocation()

    const handleMouseOver = ()=>{
      setHover(true)
    }
    const handleMouseLeave = ()=>{
      setHover(false)
    }

  return (
    <>
    <div className="w-full bg-choice2 text-choice3 font-semibold p-16 py-10 max-sm:py-10 max-sm:p-8 flex items-center gap-5 justify-between fixed top-0 z-[999]">
      <div className="w-full flex [416px]:text-black items-center gap-5">
          {
              navbar.map((nav)=>{
                return  <Link to={nav.path} key={nav.name} className={location.pathname == nav.path? 'relative content after:w-full after:absolute after:h-full after:border-b-4 border-choice4 after:-bottom-2 after:left-0':null}>{nav.name}</Link>

              })
          }
      </div>

        <div
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
         className="text-2xl relative w-max cursor-pointer">
          <MdOutlineShoppingCart/>
          <div className="w-full h-full absolute -top-5 -right-4">{state.length}</div>
          {hover && <CartHover/>}
        </div>

    </div>
    <div className="w-screen mt-24">
      {children}
    </div>
    </>
  )
}
