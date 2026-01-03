"use client";

import Image from "next/image";
import { useState } from "react";

const GiftCard = ({ card }) => {
    const [open,setOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const collectHandler = async () => {
        try {
            await navigator.clipboard.writeText(card?.name);
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
            <div style={{backgroundColor : card?.color}} className={`w-16 relative flex items-center justify-center `}>
                <span className="-rotate-90 transform text-3xl font-bold tracking-wide text-white whitespace-nowrap">
                    {card?.type === 'cash' ? `₹${card?.disc}`  : `Flat ${card.disc}%`}
                </span>
            </div>

            <div style={{borderColor : card?.color}} className="flex-1 bg-[#FEF9F8] border-l-2 border-dashed">
                <div className="px-4 py-5">
                    <div className="pb-3 flex justify-between">
                        <div className="flex items-center gap-2">
                            <Image className="object-contain" src={card?.logo} alt="name" />
                            <h1 className="font-bold text-[#4B4E4B] tracking-wide uppercase">{card?.name}</h1>
                        </div>
                        {!card?.bank && <button onClick={collectHandler} disabled={copied} className={`cursor-pointer flex items-center gap-2 font-semibold transition ${copied ? "text-green-600" : "text-[#874B2C] hover:opacity-80"}`}>
                            {copied ? "Colected" : "Collect"}
                        </button>}
                    </div>
                    <p className=" text-[#7D817D] leading-4.5 text-sm border-b border-[#E5E6E5] pb-2.5">{card?.desc}</p>
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

export default GiftCard;