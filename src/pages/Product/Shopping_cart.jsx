import { useNavigate } from "react-router-dom";
import Product_Layout from "./Layout";
import { IoMdArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { Suspense } from "react";
import { CiImageOn } from "react-icons/ci";

export default function Shopping_cart() {
    const navigate = useNavigate()
    const cart = useSelector((store)=> store.cart)
    const products = useSelector((store)=> store.products)

  return (
    <Product_Layout>
        <div className="p-16 w-full max-sm:p-8 relative">
            <div
            onClick={()=> navigate(-1)}
             className="text-xl p-2 border border-choice1 w-max hover:bg-gray-300 cursor-pointer absolute top-2 left-16 max-sm:left-8">
                <IoMdArrowBack/>
            </div>
            
            <div style={{overflowX: 'scroll'}} className="flex w-full h-[60vh] flex-wrap gap-2 relative border overflow-scroll">
              {
                products.filter((prod)=>{
                    return cart.includes(prod.id)
                })
                .map((list, i)=>{
                  return (
                    
                      <div
                      key={list.src}
                      className={`xl:max-w-[20vw] w-[25vw] max-md:w-96 max-sm:mt-10 h-[40vh] flex max-sm:w-full cursor-pointer hover:scale-105 flex-col gap-6 p-4 bg-choice1 text-white shadow-xl rounded-lg border border-choice1`}>
                      <Suspense fallback={<div className="w-full h-32 object-cover text-choice4"><CiImageOn/></div>}>
                        <img src={list.src} alt={list.name} className="w-full rounded-lg h-32 object-cover"/>
                      </Suspense>
                      <div className="flex flex-col ">
                        <div>{list.name}</div>
                        <div>#{list.amount}</div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
        </div>

    </Product_Layout>
  )
}
