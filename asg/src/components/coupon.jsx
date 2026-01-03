"use client";

import { Check, Copy, Files } from "lucide-react";
import { useState } from "react";

const Coupon = ({ coupon }) => {
    const [open, setOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const copyHandler = async () => {
        try {
            await navigator.clipboard.writeText(coupon?.name);
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 3000);
        } catch (err) {
            console.error("Copy failed");
        }
    }
    return (
        <div className="w-full flex ">
            <div className="w-16 bg-[#C16B3E] relative flex items-center justify-center ">
                <span className="-rotate-90 transform text-3xl font-bold tracking-wide text-white whitespace-nowrap">
                    {coupon?.type === 'cash' ? `₹${coupon?.disc}` : `Flat ${coupon.disc}%`}
                </span>
            </div>

            <div className="flex-1 bg-[#FDF9F7] border-l-2 border-dashed border-[#96471d]">
                <div className="px-4 py-5">
                    <div className="pb-3 flex justify-between">
                        <h1 className="font-bold text-[#4B4E4B] tracking-wide uppercase">{coupon?.name}</h1>
                        <button onClick={copyHandler} disabled={copied} className={`cursor-pointer flex items-center gap-2 font-semibold transition ${copied ? "text-green-600" : "text-[#874B2C] hover:opacity-80"}`}>
                            {copied ? <Check size={18} /> : <Files size={18} />}
                            {copied ? "Copied" : "Copy"}
                        </button>
                    </div>
                    <p className=" text-[#7D817D] leading-4.5 text-sm border-b border-[#E5E6E5] pb-2.5">{coupon?.desc}</p>
                    <div onClick={() => setOpen((prev) => !prev)} className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"} space-y-3 text-[12px] text-[#4B4E4B]`}>
                        <p className="font-medium text-[13px]">Terms and Conditions applied:</p>
                        <p>Minimum booking amount should be ₹10,000 to avail the ₹1500 discount. Offer valid for a limited time.</p>
                        <p>Minimum booking amount should be ₹10,000 to avail the ₹1500 discount. Offer valid for a limited time.</p>
                    </div>
                    <p onClick={() => setOpen((prev) => !prev)} className="text-[#7D817D] cursor-pointer text-sm font-semibold pt-2.5">{open ? "Read less" : "Read more"}</p>
                </div>
            </div>
        </div>
    )
}

export default Coupon;