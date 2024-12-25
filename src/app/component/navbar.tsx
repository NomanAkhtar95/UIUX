"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-black text-white p-4 md:p-6">
      <div className="flex flex-col justify-center items-center ">
    
        <div className="flex-shrink-0">
          <Image src="/assets/Foodtuck.png" alt="logo" width={109} height={32} />
        </div>

        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          <Image src="/assets/List.png" alt="" width={24} height={24}/>
        </button>

       
        <div className={`hidden md:flex items-center justify-around gap-6`}>
          <ul className="flex gap-5 text-sm md:text-base">
            <li className="hover:text-orange-400"><Link href="/">Home</Link></li>
            <li className="hover:text-orange-400"><Link href="/menu">Menu</Link></li>
            <li className="hover:text-orange-400"><Link href="/About">About</Link></li>
            <li className="hover:text-orange-400"><Link href="/Blog">Blog</Link></li>
            <li className="hover:text-orange-400"><Link href="/Pages">Pages</Link></li>
            <li className="hover:text-orange-400"><Link href="/Shop">Shop</Link></li>
            <li className="hover:text-orange-400"><Link href="/Contact">Contact</Link></li>
          </ul>

        
          <div className="flex items-center gap-3">
            <div className="border-2 border-orange-400 rounded-3xl flex items-center p-2">
              <input
                type="text"
                placeholder="Search..."
                className="bg-black text-white outline-none pl-2 pr-8 w-[150px] md:w-[200px]"
              />
              <Image src="/assets/Group.png" alt="Search" width={24} height={24} />
            </div>
            <Image src="/assets/Handbag.png" alt="Cart" width={24} height={24} />
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
        <ul className="flex flex-col gap-4 text-sm">
          <li className="hover:text-orange-400"><Link href="/">Home</Link></li>
          <li className="hover:text-orange-400"><Link href="/menu">Menu</Link></li>
          <li className="hover:text-orange-400"><Link href="/Blog">Blog</Link></li>
          <li className="hover:text-orange-400"><Link href="/Pages">Pages</Link></li>
          <li className="hover:text-orange-400"><Link href="/About">About</Link></li>
          <li className="hover:text-orange-400"><Link href="/Shop">Shop</Link></li>
          <li className="hover:text-orange-400"><Link href="/Contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}
