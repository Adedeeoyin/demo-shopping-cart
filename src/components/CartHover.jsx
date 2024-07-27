import { MdDelete } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { DECREMENT } from "../redux/actionType"

export default function CartHover() {
    const products = useSelector(state=>state.products)
    const cart = useSelector(state=>state.cart)
    const dispatch = useDispatch()
    const handleDelete = (id)=>{
        dispatch({type: DECREMENT, payload: id})
      }
  return (
    <div className="min-w-[200px] h-[40vh] bg-white shadow rounded-md absolute right-2 top-6 p-3 z-[9999]">
        {
            cart.length == 0 ? <div className=" text-center mt-16">Cart is Empty!</div>
            :<>
                {
                products.filter((prod)=>{
                    return cart.includes(prod.id)
                })
                .map((list)=>{
                  const totalPicked = cart.filter((item)=>item === list.id).length
                  return (
                    <div key={list.src} className="w-full justify-between border-b mb-2 flex gap-2">
                        <div className="text-sm text-nowrap">{list.name}</div>
                        <div className="text-sm">#{list.amount} X {totalPicked}</div>
                        <div
                            onClick={()=>handleDelete(list.id)}
                            className=" cursor-pointer"><MdDelete size={18}/>
                     </div>
                    </div>
                  )})
                }
                </>
        }
        
    </div>
  )
}
