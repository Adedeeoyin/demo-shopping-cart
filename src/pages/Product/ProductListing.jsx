import { useNavigate } from "react-router-dom"
import Product_Layout from "./Layout"
import { IoMdArrowBack } from "react-icons/io"
import { Suspense, useState } from "react"
import { CiImageOn } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "../../redux/actionType";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import image1 from '../../assets/plant1.jpg'
import image2 from '../../assets/plant2.jpg'
import image3 from '../../assets/plant3.jpg'
import image4 from '../../assets/plant4.jpg'
import image5 from '../../assets/plant5.jpg'
import image6 from '../../assets/plant6.jpg'

export default function ProductListing() {
  const [ pick, setPick] = useState(111)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector((state)=> state.cart)


    const handleIncrement = (id)=>{
      dispatch({type: INCREMENT, payload:id})
      setPick(id)
    }

    const plusBtn = (id)=>{
      dispatch({type: INCREMENT, payload:id})
      console.log(cart.filter((item)=>item === pick))
    }

    const minusBtn = (id)=>{
      dispatch({type: DECREMENT, payload:id})
    }

    const products = [
      {name: 'plant-1', id:111, amount: 1000, src: image1},
      {name: 'plant-2', id:222, amount: 2000, src: image2},
      {name: 'plant-3', id:333, amount: 3000, src: image3},
      {name: 'plant-4', id:444, amount: 4000, src: image4},
      {name: 'plant-5', id:555, amount: 5000, src: image5},
      {name: 'plant-6', id:666, amount: 6000, src: image6},
    ]
  return (
    <Product_Layout>
      <div className="p-16 max-sm:p-8 relative">
            <div
            onClick={()=> navigate('/')}
             className="text-xl p-2 border border-choice1 w-max hover:bg-gray-300 cursor-pointer absolute top-2 left-16 max-sm:left-8">
                <IoMdArrowBack/>
            </div>
            
            <div className="flex flex-col gap-6 ">
              <div className="flex gap-10 max-sm:gap-5 justify-center max-sm:flex-col max-sm:justify-center max-md:gap-24 items-center ">
                {products.filter((prod)=> prod.id === pick).map((item)=>{
                  return (
                    <div key={item.name} className="max-sm:mt-8 max-sm:w-full">
                      <div
                      className="flex max-lg:w-[30vw] max-md:w-[35vw] max-sm:w-full cursor-pointer hover:scale-110 flex-col gap-6 w-[25vw] h-54 p-4 bg-choice1 text-white shadow-xl rounded-lg border border-choice1">
                      <Suspense fallback={<div className="w-full h-32 object-cover text-choice4"><CiImageOn/></div>}>
                        <img src={item.src} alt={item.name} className="w-full rounded-lg h-32 object-cover"/>
                      </Suspense>
                      <div className="flex flex-col ">
                        <div>{item.name}</div>
                        <div>#{item.amount}</div>
                      </div>
                    </div>
                    </div>
                  )
                })}

                <div className="flex items-center max-sm:mx-auto gap-4 text-choice2 dark:text-choice4 text-5xl max-md:text-3xl">
                  <CiCircleMinus onClick={()=>minusBtn(pick)} className="cursor-pointer"/>
                  <div className="w-24 p-2 border border-choice2 text-center max-md:w-20">
                    {cart.filter((item)=>item === pick).length}
                  </div>
                  <CiCirclePlus onClick={()=>plusBtn(pick)} className="cursor-pointer"/>
                </div>

              </div>
            

            <div className="w-full relative flex flex-wrap gap-6  items-center overflow-x-scroll ">
              {products.map((prod)=>{
                return(
                  
                  <div
                  onClick={()=>handleIncrement(prod.id)}
                   key={prod.id} className="flex max-lg:w-[20vw] max-md:w-[35vw] max-sm:w-4/5 max-sm:mx-auto cursor-pointer hover:scale-110 flex-col gap-6 w-[15vw] h-54 p-4 bg-choice2 text-choice4 shadow-xl rounded-lg border border-choice2">
                    <Suspense fallback={<div className="w-full h-32 object-cover"><CiImageOn/></div>}>
                      <img src={prod.src} alt={prod.name} className="w-full rounded-lg h-32 object-cover"/>
                    </Suspense>
                    <div className="flex flex-col ">
                      <div>{prod.name}</div>
                      <div>#{prod.amount}</div>
                    </div>
                  </div>
                )
              })}
            </div>
        </div>
            </div>

    </Product_Layout>
  )
}
