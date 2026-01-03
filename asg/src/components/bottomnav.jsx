import { Search, Tag, Calendar, Heart, User, CircleUserRound } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#E5E6E5] md:hidden">
      <ul className="flex justify-around items-center h-16">
        
        <li onClick={() => toast.success("there are no other screens on the design to navigate")} className="flex flex-col items-center text-[#7D817D] text-xs">
          <Search size={20} />
          <span>Explore</span>
        </li>

        <li className="flex flex-col items-center text-[#C16B3E] text-xs font-medium">
          <Tag size={20} />
          <span>Offers</span>
        </li>

        <li onClick={() => toast.success("there are no other screens on the design to navigate")} className="flex flex-col items-center text-[#7D817D] text-xs">
          <Calendar size={20} />
          <span>Bookings</span>
        </li>

        <li onClick={() => toast.success("there are no other screens on the design to navigate")} className="flex flex-col items-center text-[#7D817D] text-xs">
          <Heart size={20} />
          <span>Wishlist</span>
        </li>

        <li onClick={() => toast.success("there are no other screens on the design to navigate")} className="flex flex-col items-center text-[#7D817D] text-xs">
          <CircleUserRound size={20} />
          <span>Profile</span>
        </li>

      </ul>
    </nav>
  );
}
