"use client"

import Image from "next/image";
import Navbar from "../component/navbar";

export default function About() {
  return (
    <div className="bg-black text-white h-auto">
      <Navbar />

      <div className="grid grid-cols-2 lg:flex-row lg:gap-10 mx-5 lg:mx-[10%] py-10">
    
        <div className="flex-1 space-y-6">
          <div className="w-[88px] h-[40px]">
            <Image src={'/assets/About us.png'} alt="About Us" width={88} height={40} />
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="text-orange-400">We</span> Create the best foody products
            </h1>
          </div>

          <div>
            <p className="text-sm sm:text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
          </div>


          <div className="flex flex-col gap-3">
            <div className="flex justify-start items-center gap-3">
              <Image src={'/assets/check.png'} alt="Check Icon" width={17} height={22.24} />
              <p className="text-sm sm:text-base lg:text-lg">
                Lacus nisi, et ac dapibus sit eu velit in consequat.
              </p>
            </div>

            <div className="flex justify-start items-center gap-3">
              <Image src={'/assets/check.png'} alt="Check Icon" width={17} height={22.24} />
              <p className="text-sm sm:text-base lg:text-lg">
                Quisque diam pellentesque bibendum non dui volutpat fringilla.
              </p>
            </div>

            <div className="flex justify-start items-center gap-3">
              <Image src={'/assets/check.png'} alt="Check Icon" width={17} height={22.24} />
              <p className="text-sm sm:text-base lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

        
          <div className="text-center mt-6 w-[190px] h-[60px]">
            <button className="bg-orange-400 rounded-full sm:w-[100px] p-2 h-[60px] w-[190px] text-[12px] ">
              Read More
            </button>
          </div>
        </div>

    
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="col-span-1 sm:col-span-1 lg:col-span-2">
              <Image 
                src={'/assets/image1.png'} 
                alt="Main Image" 
                width={660} 
                height={330} 
                className="w-full h-auto"
              />
            </div>

            <div className="col-span-1">
              <Image 
                src={'/assets/image2.png'} 
                alt="Image 2" 
                width={322} 
                height={194} 
                className="w-full h-auto"
              />
            </div>

            <div className="col-span-1">
              <Image 
                src={'/assets/image3.png'} 
                alt="Image 3" 
                width={322} 
                height={194} 
                className="w-full h-auto"
              />
            </div>
          </div>

      </div>
    </div>
  );
}
