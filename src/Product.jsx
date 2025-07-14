import Header from "./Header/Header";
import { IconShoppingCart } from "@tabler/icons-react";
import Footer from "./Footer";

const Product = () => {
  return (
    <div>
      <Header />

      <div className="min-h-screen flex items-center justify-center bg-white p-20 gap-10">
        <img
          className="h-1/2 w-1/2 object-cover"
          src="./Images/candle27.jpeg"
          alt=""
        />
        {/* description */}
        <div className="w-1/2 p-6">
          <IconShoppingCart className="text-amber-500 size-9" stroke={2} />
          <br />
          <p className="font-bold text-2xl">Serene Aura Lavender Candle</p>
          <br />

          <p className="">
            This exquisite candle provides a soothing aroma and a. . . . .
          </p>

          <br />
          <hr className="border-t border-gray-600 w-full my-4" />
          <div>
            <p className="font-light">Details</p>
            <p className="">
              {" "}
              The Serene Aura Lavender Candle is crafted with natural soy wax
              and infused with pure lavender essential oil. Enjoy up to 50 hours
              of blissful serenity.
            </p>
            <br />
          </div>
          <hr className="border-t border-gray-600 w-full my-4" />
          {/* name and price */}
          <div className="flex gap-20">
            <div>
              <p className="font-light">Scent</p>
              <br />
              <p>Lavender</p>
            </div>
            <hr className="border-t border-gray-600 h-full my-4" />

            <div>
              <p className="font-light">Price</p>
              <br />
              <p>$24.99</p>
            </div>
          </div>
          <hr className="border-t border-gray-600 w-full my-4" />

          {/* cart */}
          <div className="flex justify-center mt-7">
            <button className="bg-black text-white py-3 rounded-3xl shadow-md hover:bg-gray-800 transition  bottom-4 left-4 z-10 p-4">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {/* Explore */}
      <div className="m-10">
        <div className="">
          <h1 className="font-semibold text-3xl">Explore Candle Scents</h1>
        </div>
        <br />
        <br />
        {/* 1st row */}
        <div className="flex gap-2">
          <div className="">
            <img className="rounded-xl" src="./Images/candle28.jpeg" alt="" />
            <p className="p-2 text-center">Floral</p>
          </div>
          <div>
            <img className="rounded-xl" src="./Images/candle29.jpeg" alt="" />
            <p className="p-2 text-center">Citrus</p>
          </div>
          <div>
            <img className="rounded-xl" src="./Images/candle30.jpeg" alt="" />
            <p className="p-2   text-center">Woody</p>
          </div>
          <div>
            <img className="rounded-xl" src="./Images/candle31.jpeg" alt="" />
            <p className="p-2 text-center">Spiced</p>
          </div>
          <div>
            <img className="rounded-xl" src="./Images/candle32.jpeg" alt="" />
            <p className="p-2 text-center">Earthy</p>
          </div>
        </div>
        <br /> <br />
        {/* 2nd row */}
        <div className="flex gap-2">
          <div>
            <img className="rounded-xl" src="./Images/candle33.jpeg" alt="" />
            <p className="p-2 text-center">Ocean</p>
          </div>
          <div>
            <img className="rounded-xl" src="./Images/candle34.jpeg" alt="" />
            <p className="p-2 text-center">Fruity</p>
          </div>
          <div>
            <img className="rounded-xl" src="./Images/candle35.jpeg" alt="" />
            <p className="p-2 text-center">Herbal</p>
          </div>
          <div>
            <img className="rounded-xl" src="./Images/candle36.jpeg" alt="" />
            <p className="p-2 text-center">Sweet</p>
          </div>
          <div>
            <img className="rounded-xl" src="./Images/candle37.jpeg" alt="" />
            <p className="p-2 text-center">Seasonal</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
