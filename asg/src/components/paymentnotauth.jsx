import Image from 'next/image';
import scan from '../../public/Group 1597884796.png'
import { Button } from './ui/button';
import { ChevronsRight } from 'lucide-react';

const PaymentNotAuth = ({setIsLogin}) => {
    return (
       <div className='w-full space-y-4 '>
         <div className="p-4 bg-[#FDF9F7] flex justify-between items-center">
            <div>
                <p className="text-[#4B4E4B] text-sm pb-2">Save more on your bookings</p>
                <h1 className="text-xl font-bold text-[#874B2C] leading-5">upto 15% Off <br /><span className='text-sm'>on select payment methods</span></h1>
            </div>
            <div className='object-contain'>
                <Image src={scan} alt='cards' />
            </div>
        </div>
         <Button onClick={() => setIsLogin((prev) => !prev)} className={"w-full"}>Unlock offers <ChevronsRight/></Button>
       </div>
    )
}

export default PaymentNotAuth;