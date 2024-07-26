import { useNavigate } from "react-router-dom";
import Product_Layout from "./Layout";
import { IoMdArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { Suspense, useRef } from "react";
import { CiImageOn } from "react-icons/ci";
import { GrFormNext } from "react-icons/gr";
import { MdArrowBackIos } from "react-icons/md";

export default function Shopping_cart() {
    const slider = useRef()
    const lastSlide = useRef()
    const navigate = useNavigate()
    const cart = useSelector((store)=> store.cart)
    const products = useSelector((store)=> store.products)

    const handleScrollRight = ()=>{
      // const width = slider.current.scrollWidth - slider.current.clientWidth
      // slider.current.scrollIntoView({ behavior: 'smooth'})
      slider.current.scrollIntoView(false)
    }
    const handleScrollLeft = ()=>{
      // const width = slider.current.scrollWidth - slider.current.clientWidth
      // slider.current.scrollIntoView(true)
      // slider.current.scrollIntoView({ left:0, behavior: 'smooth'})
    }

  return (
    <Product_Layout>
        <div className="p-16 pt-20 w-full max-sm:p-8 relative">
            <div
            onClick={()=> navigate(-1)}
             className="text-xl p-2 border border-choice1 w-max hover:bg-gray-300 cursor-pointer absolute top-6 left-16 max-sm:left-8">
                <IoMdArrowBack/>
            </div>
            
            <div className="flex w-full h-[60vh] gap-2 relative overflow-x-auto">
              <div
              onClick={handleScrollRight}
               className="fixed top-64 right-10 text-3xl border cursor-pointer z-[9999] border-choice2 rounded-full p-2 bg-choice2 text-choice4"><GrFormNext/></div>
              <div
              onClick={handleScrollLeft}
               className="fixed top-64 left-10 text-3xl border cursor-pointer z-[9999] border-choice2 rounded-full p-2 bg-choice2 text-choice4"><MdArrowBackIos/></div>
              <div ref={slider} className="flex relative min-w-[120vw] gap-6">
                {
                  products.filter((prod)=>{
                      return cart.includes(prod.id)
                  })
                  .map((list,i)=>{
                    return (
                      <div key={list.src} className="flex flex-col gap-4" ref={lastSlide} >
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
                      <div className="mx-auto font-semibold">
                        X <span>{cart.filter((item)=>item === list.id).length}</span>
                      </div>
                      </div>
                    )
                  })
                }

              </div>
            </div>
        </div>

    </Product_Layout>
  )
}
