import { useEffect } from "react"

export default function CheckoutMesssage({setChecked}) {

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setChecked(false)
        }, 2000)

        return ()=>clearTimeout(timer)
    },[])
  return (
    <div className="fixed top-96 left-1/2 -translate-x-1/2 -translate-y-1/2 text-semi-bold text-3xl text-choice2">
        Coming Soon!
    </div>
  )
}
