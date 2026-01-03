import Image from 'next/image';
import cards from '../../public/Group 1597884795.png'
import { Button } from './ui/button';
import { ChevronsRight } from 'lucide-react';

const GiftForNonAuth = ({setIsLogin}) => {
    return (
        <div className='relative w-full space-y-4 '>
            <div className="p-4 bg-[#FDF9F7]">
                <p className="font-semibold text-[#874B2C] text-sm">Assured vouchers up to</p>
                <h1 className="text-xl font-bold text-[#874B2C]">₹1000 <span>✨</span></h1>
                <p className="text-[#4B4E4B] text-sm">of trending brands</p>
                <div className='absolute right-2 -top-2'>
                    <Image src={cards} alt='cards' />
                </div>
            </div>
            <Button onClick={() => setIsLogin((prev) => !prev)} className={"w-full"}>Claim gift cards <ChevronsRight/></Button>
        </div>
    )
}

export default GiftForNonAuth;