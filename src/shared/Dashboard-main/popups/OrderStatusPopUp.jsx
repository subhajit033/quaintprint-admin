import PopupHeader from "./components/popup-header"
import CustomerDetails from "./components/customer-details"
import { Share2 } from "lucide-react"
import { X } from 'lucide-react';

const OrderStatusPopUp = ({isOpen, onClickHandler}) => {
  return (
    <div className={`w-[40rem] h-[40rem] overflow-auto ${isOpen ? 'block': 'hidden'} border border-gray-500 rounded-xl p-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white shadow-2xl`}>
        <div onClick={onClickHandler} className="absolute top-2 right-4 cursor-pointer  border border-black rounded-md">
          <X />
        </div>
        <PopupHeader />
        <div className="my-4 flex items-center gap-6">
            <img className="w-80 h-80 rounded-2xl object-cover" src="https://s3-alpha-sig.figma.com/img/cd4f/fe48/4959c85e418cc00a9e1d040ad8aa3da4?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iPV23dRe0rUlME2jvqqFPOCKHCM~FRgaYPEUnYzLfEqB23WhaZbCM4Eg8PfOD9UHTH-TJ2siUWbhc4P2g93grxJ1KYRnIt6EP1c9-pcHi4Sqqp72mZHO1NvIrGwJO1jIFBchx6WxGgtlIxsNtvTWKjBnNAgycV27KWRoKLiCpCP23KDf32nlz-HAphSpLzExO29GkhZwy3WP-hUFBjVFnCz2DGGc5RcR3IYdYecMCbWHU6v0DMR2PQf5mxC-AHQPWvUVFqVGOGfeTK7z62PQqmEqL1ONHJKrq7GaK0e7cVjMzZkr0LjE0TSoIUgPEDnu1TUNslvhJfakPbFAvJVqXg__" alt="image" />
            <div className="flex-1">
                <p className="text-blue-600 underline cursor-pointer">loremipsum.pdf</p>
                <div className="">
                    <p className="text-sm text-gray-400 my-2">Addon notes</p>
                    <p className="w-80 h-32 border border-gray-400 rounded-xl p-4 text-sm text-gray-400 tracking-tighter">
                    “Lorem ipsum dolor sit amet consectetur. Dui id leo viverra vivamus ipsum amet. Nisl luctus imperdiet cursus vulputate duis vulputate a tortor. Massa augue faucibus ac quisque in aliquet. Elementum mauris quis quam feugiat.”
                    </p>
                </div>
            </div>
        </div>
        <CustomerDetails />
        <div className="space-y-3 pb-4">
          <div className="flex items-center gap-10">
            <p>Print Type: Acrylic</p>
            <p>Required Print Size:  12inch x 18inch</p>
          </div>
          <p>Payment Id: #1235456789</p>
          <p>Custom Gifting Note:</p>          
        </div>
        <div className="flex justify-end">
          <button className="px-4 py-2 rounded-full bg-gray-200 border border-gray-400 flex items-center gap-2"><Share2/> Details</button>
        </div>
    </div>
  )
}

export default OrderStatusPopUp