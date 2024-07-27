import { useNavigate } from "react-router-dom";
import Product_Layout from "./Layout";
import { IoMdArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect, useRef, useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { GrFormNext } from "react-icons/gr";
import { MdArrowBackIos } from "react-icons/md";
import {motion } from 'framer-motion'
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { CLEAR_CART, DECREMENT } from "../../redux/actionType";
import CheckoutMesssage from "../../components/CheckoutMesssage";

export default function Shopping_cart() {
    const [ move, setMove] = useState(0)
    const [ checked, setChecked ] = useState(false)

    const [ stopRight, setStopRight] = useState(false)
    const [ stopLeft, setStopLeft] = useState(false)
    const firstSlide = useRef()
    const lastSlide = useRef()
    const navigate = useNavigate()
    const cart = useSelector((store)=> store.cart)
    const products = useSelector((store)=> store.products)
    const dispatch = useDispatch()

    const handleDelete = (id)=>{
      dispatch({type: DECREMENT, payload: id})
    }

    const clearCart = ()=>{
      setChecked(true)
      dispatch({ type: CLEAR_CART})
    }

    useEffect(() => {
      const observer1 = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setStopRight(true);
        }else{
          setStopRight(false);
        }
      }, { threshold: 1.0 });

      const observer2 = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setStopLeft(true);
        }else{
          setStopLeft(false);
        }
      }, { threshold: 1.0 });
  
      observer1.observe(lastSlide.current);
      observer2.observe(firstSlide.current);
  
      return () => {
        observer1.disconnect();
        observer2.disconnect();
      };
    }, [stopRight, stopLeft]);

    const handleScrollRight = ()=>{
      if(!stopRight)setMove(prev=> prev - 150);
    }
    const handleScrollLeft = ()=>{
      if(stopLeft)return
      setMove(prev=> prev + 150)
    }

  return (
    <Product_Layout>
        <div className="p-16 pt-20 w-full max-sm:p-8 relative">
            <div
            onClick={()=> navigate(-1)}
             className="text-xl p-2 border border-choice1 w-max hover:bg-gray-300 cursor-pointer absolute top-6 left-16 max-sm:left-8">
                <IoMdArrowBack/>
            </div>
            
            <div className="flex flex-col w-full h-[80vh] gap-2 relative overflow-x-auto">
              {cart.length == 0  &&
                <div className="flex flex-col items-center ">
                  <div className="font-semibold text-3xl mx-auto">Cart is Empty</div>
                  <MdOutlineShoppingCart size={80}/>
                </div> }
                  
                  
              {
                cart.length > 0 && 
                <>
                  <div
                  onClick={handleScrollRight}
                  className="fixed top-64 right-10 text-3xl border cursor-pointer z-[9999] border-choice2 rounded-full p-2 bg-choice2 text-choice4"><GrFormNext/></div>
                  <div
                  onClick={handleScrollLeft}
                  className="fixed top-64 left-10 text-3xl border cursor-pointer z-[9999] border-choice2 rounded-full p-2 bg-choice2 text-choice4"><MdArrowBackIos/></div>
                </>
              }

              <motion.div
              initial = {{x: 0}}
              animate = {{x: move}}
               className="flex relative min-w-[120vw] gap-6">
                <div className="absolute top-2 left-0 bg-transparent" ref={firstSlide}>&nbsp;</div>
                {
                  products.filter((prod)=>{
                      return cart.includes(prod.id)
                  })
                  .map((list)=>{
                    
                    return (
                      <div key={list.src} className="flex flex-col gap-4" >
                        <div
                        className={`max-w-[300px] w-[300px] max-sm:mt-10 h-[40vh] flex cursor-pointer hover:scale-105 flex-col gap-6 p-4 bg-choice1 text-white shadow-xl rounded-lg border border-choice1`}>
                        <Suspense fallback={<div className="w-full h-32 object-cover text-choice4"><CiImageOn/></div>}>
                          <img src={list.src} alt={list.name} className="w-full rounded-lg h-32 object-cover"/>
                        </Suspense>
                        <div className="flex flex-col ">
                          <div>{list.name}</div>
                          <div>#{list.amount}</div>
                        </div>
                      </div>
                      <div className=" items-center flex justify-center font-semibold">
                        X <span>{cart.filter((item)=>item === list.id).length}</span>
                      <div
                      onClick={()=>handleDelete(list.id)}
                       className="ml-4 cursor-pointer"><MdDelete size={20}/></div>
                      </div>
                      </div>
                    )
                  })
                }
                <div ref={lastSlide}>&nbsp;</div>
              </motion.div>
                <div className="mx-auto mt-8">
                  {cart.length > 0 && <div className="font-semibold">Cart Summary</div>}
                    {
                  products.filter((prod)=>{
                      return cart.includes(prod.id)
                  })
                  .map((list,i)=>{
                    const totalEachPicked = cart.filter((item)=>item === list.id).length
                    const totalEach = list.amount * totalEachPicked
                    console.log()
                    return(
                      <div key={i}>
                        <div className="flex gap-6">
                          {list.name}
                          <span>-</span>
                           <div>#{list.amount} X {totalEachPicked} =</div>
                          <div>{totalEach}</div>
                        </div>
                        <div>
                          {}
                        </div>
                      </div>
                    )
                  })
                    
                }
                  <div className="mt-4">
                    {checked && <CheckoutMesssage checked={checked} setChecked={setChecked}/>}
                   { cart.length > 0 && <button
                    onClick={clearCart}
                     className="w-28 p-2 border-choice2 border text-choice4 bg-choice2 rounded-lg">Checkout</button>}
                  </div>
                </div>
            </div>
        </div>

    </Product_Layout>
  )
}
