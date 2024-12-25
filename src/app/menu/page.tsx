"use client"

import Image from "next/image";
import Navbar from "../component/navbar";

export default function Menu() {
  return (
    <div className="bg-black text-white h-screen w-full">
      <Navbar />
      <div className="bg-black">
        {/* Title and Image */}
        <div className="flex justify-center">
          <Image src={'/assets/Choose.png'} alt="Choose Menu" width={142} height={40} />
        </div>
        <div className="flex justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-center">
            <span className="text-orange-400">Fr</span>om Our Menu
          </h1>
        </div>
        
        {/* Menu Categories */}
        <div className="w-full sm:w-[1056px] mx-auto my-6">
          <ul className="flex justify-around sm:justify-around gap-2 sm:gap-1 text-sm sm:text-base">
            <li className="text-orange-400">Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
            <li>Dessert</li>
            <li>Drink</li>
            <li>Snack</li>
            <li>Soup</li>
          </ul>
        </div>
        
        {/* Menu Items */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-center sm:items-start my-6">
          {/* Left-side image */}
          <div className="flex justify-center sm:w-[50%]">
            <Image src={'/assets/menu2.png'} alt="Menu Image" width={515} height={406} className="object-cover" />
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:w-[50%]">
            {/* Menu Item 1 */}
            <div className="flex gap-4 sm:gap-6 rounded-lg shadow-lg p-4">
              <div>
                <Image src={'/assets/1.1.png'} alt="Lettuce Leaf" width={80} height={79} />
              </div>
              <div>
                <h1 className="text-xl">Lettuce Leaf</h1>
                <p className="text-sm text-gray-500">Lacus nisi, et ac dapibus velit in consequat.</p>
                <h2 className="text-orange-400 text-lg">12.5$</h2>
              </div>
            </div>

            {/* Menu Item 2 */}
            <div className="flex gap-4 sm:gap-6 rounded-lg shadow-lg p-4">
              <div>
                <Image src={'/assets/1.1.png'} alt="Fresh Breakfast" width={80} height={79} />
              </div>
              <div>
                <h1 className="text-xl">Fresh Breakfast</h1>
                <p className="text-sm text-gray-500">Lacus nisi, et ac dapibus velit in consequat.</p>
                <h2 className="text-orange-400 text-lg">14.5$</h2>
              </div>
            </div>

            {/* Menu Item 3 */}
            <div className="flex gap-4 sm:gap-6 rounded-lg shadow-lg p-4">
              <div>
                <Image src={'/assets/1.3.png'} alt="Mild Butter" width={80} height={79} />
              </div>
              <div>
                <h1 className="text-xl">Mild Butter</h1>
                <p className="text-sm text-gray-500">Lacus nisi, et ac dapibus velit in consequat.</p>
                <h2 className="text-orange-400 text-lg">12.5$</h2>
              </div>
            </div>

            {/* Menu Item 4 */}
            <div className="flex gap-4 sm:gap-6 rounded-lg shadow-lg p-4">
              <div>
                <Image src={'/assets/2.png'} alt="Fresh Bread" width={80} height={79} />
              </div>
              <div>
                <h1 className="text-xl">Fresh Bread</h1>
                <p className="text-sm text-gray-500">Lacus nisi, et ac dapibus velit in consequat.</p>
                <h2 className="text-orange-400 text-lg">12.5$</h2>
              </div>
            </div>

            {/* Menu Item 5 */}
            <div className="flex gap-4 sm:gap-6 rounded-lg shadow-lg p-4">
              <div>
                <Image src={'/assets/8.png'} alt="Glow Cheese" width={80} height={79} />
              </div>
              <div>
                <h1 className="text-xl">Glow Cheese</h1>
                <p className="text-sm text-gray-500">Lacus nisi, et ac dapibus velit in consequat.</p>
                <h2 className="text-orange-400 text-lg">12.5$</h2>
              </div>
            </div>

            {/* Menu Item 6 */}
            <div className="flex gap-4 sm:gap-6 rounded-lg shadow-lg p-4">
              <div>
                <Image src={'/assets/1.2.png'} alt="Italian Pizza" width={80} height={79} />
              </div>
              <div>
                <h1 className="text-xl">Italian Pizza</h1>
                <p className="text-sm text-gray-500">Lacus nisi, et ac dapibus velit in consequat.</p>
                <h2 className="text-orange-400 text-lg">14.5$</h2>
              </div>
            </div>

            {/* Menu Item 7 */}
            <div className="flex gap-4 sm:gap-6 rounded-lg shadow-lg p-4">
              <div>
                <Image src={'/assets/image3.png'} alt="Sllice Beef" width={80} height={79} />
              </div>
              <div>
                <h1 className="text-xl">Sllice Beef</h1>
                <p className="text-sm text-gray-500">Lacus nisi, et ac dapibus velit in consequat.</p>
                <h2 className="text-orange-400 text-lg">12.5$</h2>
              </div>
            </div>

            {/* Menu Item 8 */}
            <div className="flex gap-4 sm:gap-6 rounded-lg shadow-lg p-4">
              <div>
                <Image src={'/assets/5.png'} alt="Mushroom Pizza" width={80} height={79} />
              </div>
              <div>
                <h1 className="text-xl">Mushroom Pizza</h1>
                <p className="text-sm text-gray-500">Lacus nisi, et ac dapibus velit in consequat.</p>
                <h2 className="text-orange-400 text-lg">12.5$</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
