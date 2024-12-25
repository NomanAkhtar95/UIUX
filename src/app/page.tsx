"use client"

import Image from "next/image";
import Navbar from "./component/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-black text-white flex ">
  {/* Top Section */}
  <div className="flex lg:flex-row justify-between items-center mx-5 lg:mx-[5%] py-10 gap-5">
    
    {/* Left Section */}
    <div className="bg-black flex flex-col justify-center items-center lg:items-start gap-5">
      <Image src={'/assets/Line 11.png'} alt="Line" width={1} height={0} />
      
      {/* Social Icons */}
      <div className="w-[25.28px] h-[107px] flex flex-col justify-center gap-2">
        <Image src={'/assets/fb.png'} alt="Facebook" width={15} height={15} />
        <Image src={'/assets/twitter.png'} alt="Twitter" width={15.28} height={15.21} />
        <Image src={'/assets/pin.png'} alt="Pinterest" width={15.28} height={15.28} />
      </div>
      
      <Image src={'/assets/Line 11.png'} alt="Line" width={1} height={0} />
    </div>

    {/* Center Section */}
    <div className="flex flex-col gap-4 text-center lg:text-left">
      <h1 className="text-orange-400 text-2xl sm:text-3xl md:text-4xl">It's Quick & Amusing!</h1>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
        <span className="text-orange-400">Th</span>e Art of Speed Food Quality
      </h2>
      <p className="text-sm sm:text-base lg:text-lg w-full lg:w-[418px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, iure rerum nam assumenda ipsum itaque!
      </p>
      <button className="bg-orange-400 rounded-full p-2 w-[190px] h-[60px] mt-4 sm:w-[230px] sm:h-[70px]">
        See Menu
      </button>
    </div>
  </div>

  {/* Menu Image Section */}
  <div className="lg:w-[877.8px] lg:h-[670px] flex justify-center lg:justify-end mt-5 lg:mt-0">
    <Image
      src={'/assets/menu.png'}
      alt="Menu Image"
      width={624}
      height={633}
      className="w-auto lg:w-auto h-auto"
    />
  </div>
</div>

      {/* Food Categories Section */}
      <div className="bg-black text-white flex flex-col gap-5 py-10">
        <div className="flex flex-col justify-center items-center">
          <Image src={'/assets/Food Category.png'} alt="Food Category" width={177} height={40} />
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl">
            <span className="text-orange-400">Ch</span>oose Food Items
          </h2>
        </div>

        {/* Food Items */}
        <div className="flex flex-wrap justify-center gap-6 py-5">
          <Image src={'/assets/1.png'} alt="Category 1" width={177} height={40} />
          <Image src={'/assets/2.png'} alt="Category 2" width={177} height={40} />
          <Image src={'/assets/3.png'} alt="Category 3" width={177} height={40} />
          <Image src={'/assets/4.png'} alt="Category 4" width={177} height={40} />
        </div>

        {/* Image Grid Section */}
        <div className="flex flex-col justify-around items-center lg:mx-[10%]">
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 justify-start items-end">
              <Image src={'/assets/5.png'} alt="Image 1" width={362} height={356} />
              <Image src={'/assets/6.png'} alt="Image 2" width={281} height={231} />
            </div>
            <div className="flex gap-5 justify-start items-start">
              <Image src={'/assets/7.png'} alt="Image 3" width={244} height={366} />
              <Image src={'/assets/8.png'} alt="Image 4" width={221} height={226} />
              <div className="flex flex-col gap-5">
              <Image src={'/assets/9.png'} alt="Image 5" width={161} height={168} />
              <Image src={'/assets/10.png'} alt="Image 6" width={161} height={168} />
              </div>
            </div>
          </div>

          {/* Right Section (Text and Icons) */}
          <div className="py-10">
            <div className="w-[175px] h-[40px]">
              <Image src={'/assets/Why.png'} alt="Why" width={175} height={40} />
            </div>
            <div className="w-[433px] h-[112px]">
              <h2 className="text-3xl sm:text-4xl font-bold py-5">
                <span className="text-orange-400">Ex</span>tra Ordinary Taste and Experience
              </h2>
            </div>
            <div className="w-[526px] h-[120px] p-5 text-sm sm:text-base lg:text-lg">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
                volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              </p>
            </div>

            <div className="flex p-5 gap-5 justify-start">
              <div className="text-center bg-orange-400 rounded">
                <Image src={'/assets/Hamburger.png'} alt="Fast Food" width={85} height={26} />
                <h3 className="w-[85px] h-[26px] text-center">Fast Food</h3>
              </div>
              <div className="text-center  bg-orange-400 rounded">
                <Image src={'/assets/Cookie.png'} alt="Lunch" width={85} height={26} />
                <h3 className="w-[85px] h-[26px] text-center">Lunch</h3>
              </div>
              <div className=" text-center  bg-orange-400 rounded">
                <Image src={'/assets/Wine.png'} alt="Dinner" width={85} height={26} />
                <h3 className="w-[85px] h-[26px] text-center">Dinner</h3>
              </div>
            </div>

            <div className="flex justify-around items-center bg-white mx-5 sm:w-[300px] h-[82px] text-black rounded">
              <div className="w-[82px] h-[56px] text-orange-400 font-bold text-3xl">30+</div>
              <div>
                <h1 className="w-[78px] h-[28px]">Years of</h1>
                <h2 className="w-[143px] h-[32px] font-semibold">Experience</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
