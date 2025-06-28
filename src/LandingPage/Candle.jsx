import React from "react";
import { IconShoppingCart } from "@tabler/icons-react";

const Candle = () => {
  return (
    // Landing page
    <div className="w-full h-full overflow-x-hidden">
      {/* Image */}
      <div className="w-full h-screen relative">
        <img
          src="./Images/candle18.jpeg"
          alt="Full screen"
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        />
        {/* text1 */}
        <div className="relative z-10 text-white  items-center justify-center h-full px-6 m-4  flex flex-col w-[45%] gap-3">
          <h1 className="text-8xl md:text-6xl font-bold mb-4 left-{50%}">
            Welcome to Serene Aura Candles
          </h1>

          <p className="text-lg md:text-xl mb-4 max-w-2xl">
            Discover our exquisite range of handcrafted candles designed to
            bring tranquility and warmth to your home. Experience serenity with
            every light.
          </p>

          <p className="text-base md:text-lg max-w-2xl flex gap-3 mt-4 left-[80%]">
            Crafted with natural ingredients and infused with soothing
            aromatherapy, Serene Aura candles create the perfect ambiance for
            relaxation and rejuvenation.
          </p>
        </div>
      </div>

      {/* Featured candle collection */}
      <h2 className="p-4 m-10 gap-1 text-black font-semibold text-5xl">
        Featured Candle collection
      </h2>
      <div className="gap-2 m-10">
        {/* Candles */}
        <div className="flex p-4 m-3 gap-2">
          <div className="">
            <img className="rounded-md" src="./Images/candle13.jpeg" alt="" />
            <h3 className="pl-1 pt-1">Lavender Dream Candle</h3>
            <h4 className="pl-1 pt-1 pb-1">$25.0</h4>
            <p className=" px-2 py-1 text-md rounded-md border border-black hover:bg-rose-50 ">
              Buy Now
            </p>
          </div>
          {/* camdle2 */}
          <div>
            <img className="rounded-md" src="./Images/candle14.jpeg" alt="" />
            <h3 className="pl-1 pt-1">Citrus Burst Candle</h3>
            <h4 className="pl-1 pt-1 pb-1">$25.0</h4>
            <p className="px-2 py-1 text-md rounded-md border border-black hover:bg-rose-50 ">
              Buy Now
            </p>
          </div>
          {/* candle 3 */}
          <div>
            <img className="rounded-md" src="./Images/candle17.jpeg" alt="" />
            <h3 className="pl-1 pt-1">Vanilla Comfort Candle</h3>
            <h4 className="pl-1 pt-1 pb-1">$25.0</h4>
            <p className="px-2 py-1 text-md rounded-md border border-black hover:bg-rose-50 ">
              Buy Now
            </p>
          </div>
          {/* candle4 */}
          <div>
            <img className="rounded-md" src="./Images/candle16.jpeg" alt="" />
            <h3 className="pl-1 pt-1">Eucalyptus Spa Candle</h3>
            <h4 className="pl-1 pt-1 pb-1">$25.0</h4>
            <p className="px-2 py-1 text-md rounded-md border border-black hover:bg-rose-50 ">
              Buy Now
            </p>
          </div>
        </div>

        {/* 2nd row */}
        <div className="flex p-4 m-3 gap-2">
          <div>
            <img className="rounded-md" src="./Images/candle12.jpeg" alt="" />
            <h3 className="pl-1 pt-1">Rose Garden Candle</h3>
            <h4 className="pl-1 pt-1 pb-1">$27.0</h4>
            <h4 className="px-2 py-1 text-md rounded-md border border-black hover:bg-rose-50 ">
              Buy Now
            </h4>
          </div>
          <div>
            <img className="rounded-md" src="./Images/candle9.jpeg" alt="" />
            <h3 className="pl-1 pt-1">Sandalwood Serenity Candle</h3>
            <h4 className="pl-1 pt-1 pb-1">$27.0</h4>
            <h4 className="px-2 py-1 text-md rounded-md border border-black hover:bg-rose-50 ">
              Buy Now
            </h4>
          </div>
          <div>
            <img className="rounded-md" src="./Images/candle10.jpeg" alt="" />
            <h3 className="pl-1 pt-1">Ocean Breeze Candle</h3>
            <h4 className="pl-1 pt-1 pb-1">$27.0</h4>
            <h4 className="px-2 py-1 text-md rounded-md border border-black hover:bg-rose-50 ">
              Buy Now
            </h4>
          </div>
          <div>
            <img className="rounded-md" src="./Images/candle11.jpeg" alt="" />
            <h3 className="pl-1 pt-1">Spiced Chai Candle</h3>
            <h4 className="pl-1 pt-1 pb-1">$27.0</h4>
            <h4 className="px-2 py-1 text-md rounded-md border border-black hover:bg-rose-50 ">
              Buy Now
            </h4>
          </div>
        </div>
      </div>

      <div className="flex p-4  gap-6 mt-3 mr-10 ml-10">
        {/* summer Scents */}
        <div className="relative w-[35%] h-[500px] overflow-hidden rounded-md">
          <img
            className="h-full w-full object-cover "
            src="./Images/candle19.jpeg"
            alt=""
          />
          <div className="">
            <h1 className="absolute top-[40%] left-6 text-white text-6xl font-bold z-10">
              Summer Scents
            </h1>
            <div className="absolute bottom-4 left-4 bg-black/50 text-white p-4 rounded-md z-10">
              <p className="font-semibold">Brighten Your Day</p>
              <p>PRICE</p>
              <p>DISCOUNT CODE -</p>
            </div>
          </div>
        </div>

        {/* relaxation collection */}
        <div className="relative w-[65%] h-[500px] overflow-hidden rounded-md">
          <img
            className="h-full w-full object-cover "
            src="./Images/candle20.jpeg"
            alt=""
          />
          <div className="">
            <h1 className="absolute top-[40%] left-6  text-white text-6xl font-bold z-10">
              Relaxation Collection
            </h1>
            <div className="absolute bottom-4 left-4 bg-black/50 text-white p-4 rounded-md z-10">
              <p className="font-semibold">Unwind and De-stress</p>
              <p>PRICE</p>
              <p>DISCOUNT CODE -</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex p-4  gap-6 mt-3 mr-10 ml-10">
        {/* New Aromatherapy Candles */}
        <div className="relative w-[65%] h-[500px] overflow-hidden rounded-md">
          <img
            className="h-full w-full object-cover "
            src="./Images/candle21.jpeg"
            alt=""
          />
          <div className="">
            <h1 className="absolute top-[40%] left-6 text-white text-6xl font-bold z-10">
              New Aromatherapy Candles
            </h1>
            <div className="absolute bottom-4 left-4 bg-black/50 text-white p-4 rounded-md z-10">
              <p className="font-semibold">Explore New Scents</p>
              <p>PRICE</p>
              <p>DISCOUNT CODE -</p>
            </div>
          </div>
        </div>

        {/* Gift Sets */}
        <div className="relative w-[35%] h-[500px] overflow-hidden rounded-md">
          <img
            className="h-full w-full object-cover "
            src="./Images/candle22.jpeg"
            alt=""
          />
          <div className="">
            <h1 className="absolute top-[40%] left-6  text-white text-6xl font-bold z-10">
              Gift Sets
            </h1>
            <div className="absolute bottom-4 left-4 bg-black/50 text-white p-4 rounded-md z-10">
              <p className="font-semibold">Perfect for Any Occasion</p>
              <p>PRICE</p>
              <p>DISCOUNT CODE -</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendation */}

      <div className="bg-rose-50 flex items-center justify-center h-full w-full">
        <div className=" flex flex-col text-center gap-6 px-3 justify-center items-center m-7 ">
          <h1 className="font-light text-2xl">
            Serene Aura candles have transformed my home into a peaceful
            sanctuary. The scents are divine and long-lasting. Highly recommend!
          </h1>

          <img
            className="rounded-full w-40 h-40 object-cover "
            src="./Images/candle23.jpeg"
            alt=""
          />

          <div className="flex gap-6 align-middle ">
            <p className="font-bold ">Jane Smith</p>
            <p className="font-extralight ">Home Decor Enthusiast</p>
          </div>
        </div>
      </div>

      {/* overlapping */}

      <div className="flex justify-center items-center my-10 space-x-[-35px] ">
        <img
          className="w-32 h-32 object-cover rounded-full border-[6px] border-amber-100 shadow-md z-10"
          src="./Images/candle24.jpeg"
          alt=""
        />
        <img
          className="w-36 h-36 object-cover rounded-full border-[6px] border-gray-200 shadow-lg z-10"
          src="./Images/candle25.jpeg"
          alt=""
        />
        <img
          className="w-32 h-32 object-cover rounded-full border-4 border-amber-100 shadow-md z-0"
          src="./Images/candle26.jpeg"
          alt=""
        />
      </div>
      <div className="flex flex-col text-center gap-6 px-3 justify-center items-center m-7 ">
        <h1 className="font-light text-2xl">
          Transform your space with Serene Aura
        </h1>
        <p>
          Bring tranquility and warmth to your home with our exquisite
          collection of candles. Shop now and experience the difference.
        </p>
        <button className="flex  bottom-4 left-4 bg-amber-300 text-white p-4 rounded-md z-10">
          <IconShoppingCart stroke={2} />
          <span>Shop Now</span>
        </button>
      </div>
    </div>
  );
};

export default Candle;
