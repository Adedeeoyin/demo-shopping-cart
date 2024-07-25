import { useNavigate } from "react-router-dom";
import Product_Layout from "./Layout";
import { IoMdArrowBack } from "react-icons/io";

export default function Shopping_cart() {
    const navigate = useNavigate()
  return (
    <Product_Layout>
        <div className="p-16 max-sm:p-8 relative">
            <div
            onClick={()=> navigate(-1)}
             className="text-xl p-2 border border-choice1 w-max hover:bg-gray-300 cursor-pointer absolute top-2 left-16 max-sm:left-8">
                <IoMdArrowBack/>
            </div>
            UpdatedListing
        </div>

    </Product_Layout>
  )
}
