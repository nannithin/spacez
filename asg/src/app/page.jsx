"use client";

import Image from "next/image";
import logo from "../../public/logo.png"
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Coupon from "@/components/coupon";
import GiftCard from "@/components/giftcard";
import myntra from '../../public/image1.png'
import hammer from '../../public/image.png'
import hdfc from '../../public/hdfc.png'
import BottomNav from "@/components/bottomnav";
import GiftForNonAuth from "@/components/giftfornotauth";
import PaymentNotAuth from "@/components/paymentnotauth";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";



const coupons = [
  {
    name: "longstay",
    desc: "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
    disc: "1,500",
    type: "cash"
  },
  {
    name: "earlybird",
    desc: "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
    disc: "3,000",
    type: "cash"
  },
  {
    name: "rushdeal",
    desc: "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
    disc: "10",
    type: "percentage"
  }
]

const giftCards = [
  {
    name: "myntra",
    desc: "Get this gift voucher on booking above ₹2000",
    disc: "1,500",
    color: "#D41C9B",
    logo: myntra,
    type: "cash",
    bank: false,
  },
  {
    name: "earlybird",
    desc: "Get this gift voucher on booking above ₹2000",
    disc: "1,000",
    color: "#000000",
    logo: hammer,
    type: "cash",
    bank: false
  },

]

const pymentOff = [
  {
    name: "hdfc bank",
    desc: "Get 10% off on booking above ₹1500",
    disc: "12",
    color: "#3168CF",
    logo: hdfc,
    type: "percentage",
    bank: true
  },


]

export default function Home() {

  const [isLogin, setIsLogin] = useState(false);
  const couponsRef = useRef(null);
  const giftcardsRef = useRef(null);
  const paymentsRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className="pb-16  ">
        <nav className="h-16 border-b border-[#E5E6E5] flex items-center justify-between px-4 md:px-8">
          <div className="">
            <Image
              src={logo}
              alt="logo"
              className="h-8 w-auto object-contain"
              priority
            />
          </div>
          <Menu onClick={() => toast.success("there are no other screens on the design to navigate")} className="text-[#C16B3E]" />
        </nav>
        <div className="max-w-5xl mx-auto px-4 pb-5">
          <div className="w-full flex flex-col gap-3 py-4">
            <h1 className="font-semibold mb-0.5 text-[18px]">Offers</h1>
            <p className="text-muted-foreground text-sm">{!isLogin ? "Sign in to unlock exclusive additional rewards" : "Book directly with us to get exclusive benefits"}</p>
            {!isLogin && <Button onClick={() => setIsLogin((prev) => !prev)}>Sign in</Button>}
          </div>
          <div>
            <ul className="list-none flex justify-between text-xs text-[#7D817D] border-b border-[#E5E6E5]"> 
              <li onClick={() => scrollTo(couponsRef)} className="p-1.5 border-b border-black font-semibold text-black select-none">Coupons</li> 
              <li onClick={() => scrollTo(giftcardsRef)} className="p-1.5 select-none">Giftcards</li> 
              <li onClick={() => scrollTo(paymentsRef)} className="p-1.5 select-none">Payment Offers</li> </ul>


          </div>
          <section ref={couponsRef} id="coupons">
            <h1 className="font-semibold text-[15px] text-[#4B4E4B] py-4">Sitewide coupons:</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3 md:gap-5">
              {
                coupons.map((item) => (
                  <Coupon key={item.name} coupon={item} />
                ))
              }
            </div>
          </section>
          <section ref={giftcardsRef} id="giftcards" className="pt-3">
            <div className=" py-4">
              <h1 className="font-semibold text-[15px] text-[#4B4E4B]">Bonus gift cards:</h1>
              {isLogin && <p className="text-[#7D7D7D] text-[14px] py-0.5 font-medium">Collect multiple of these</p>}
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3 md:gap-5">
              {
                isLogin ? giftCards.map((item) => (
                  <GiftCard key={item.name} card={item} />
                )) : <GiftForNonAuth setIsLogin={setIsLogin} />
              }
            </div>
          </section>
          <section ref={paymentsRef} id="payments" className="pt-3">
            <div className=" py-4">
              <h1 className="font-semibold text-[15px] text-[#4B4E4B]">Payment offers:</h1>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3 md:gap-5">
              {
                isLogin ? pymentOff.map((item) => (
                  <GiftCard key={item.name} card={item} />
                )) : <PaymentNotAuth setIsLogin={setIsLogin} />
              }
            </div>
          </section>
        </div>
      </div>
      <BottomNav />
    </>
  );
}
