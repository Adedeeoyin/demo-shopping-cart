import { useNavigate } from "react-router-dom"
import bgImage from '../assets/house-plant.jpg'

export default function Home() {
    const navigate = useNavigate()

    const handleNavigate = ()=>{
        navigate('/product-list')
    }

  return (
    <div style={{backgroundImage: `url(${bgImage})`}} className={`w-screen min-h-screen bg-cover bg-no-repeat `}>
        <div className="backdrop-blur-md w-full min-h-screen p-16 max-sm:p-8">
            <div className="flex flex-col justify-center text-center w-max font-semibold font-mono text-choice1 shadow p-2 border-t border-gray-200 hover:scale-105">
                Kingdom <span className="font-rob text-green-600">Plantae</span>
                </div>

                <div className=" mt-36 w-full max-w-[75rem] mx-auto text-center text-choice2 font-semibold text-2xl backdrop-blur-sm">
                Welcome to Kingdom Plantae, your go-to destination for discovering and sharing the best home plants. Whether you're a seasoned green thumb or just starting your indoor gardening journey, our curated listings and expert tips will help you find the perfect plants to brighten your space. Explore our diverse selection, learn how to care for your new green friends, and join a community of plant enthusiasts dedicated to bringing the beauty of nature into every home. Let's grow together!
                </div>

                <div className="w-full h-1/2 pb-10 flex flex-col">
                    <button
                    onClick={handleNavigate}
                     className="w-40 text-center text-sm border border-choice1 text-choice4 bg-choice1 text-nowrap mt-48 p-2 mx-auto place-self-end rounded-lg hover:bg-[#7474202d] hover:text-choice1 font-bold ">
                        GET STARTED
                    </button>
                </div>
        </div>
    </div>
  )
}
