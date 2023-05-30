import { useState } from "react";
import { Minus, Plus, HeartStraight } from "phosphor-react";

import saladImg from "../assets/salad.png";

import { Button } from "./Button";

export function Dish({ dishImage, dishName, dishDescription, dishPrice }) {
  const [isLiked, setIsLiked] = useState(false);
  const [amount, setAmount] = useState(1);

  function favoriteDish() {
    setIsLiked(!isLiked);
  }

  function increaseDishAmount() {
    setAmount(amount + 1);
  } 

  function decreaseDishAmount() {
    if(amount === 0) {
      return;
    }

    setAmount(amount - 1);
  }

  return(
    <div className="w-[320px] h-[512px] mt-10 px-10 pt-14 pb-10 relative flex flex-col items-center bg-black bg-opacity-[0.32] rounded-lg">
      <HeartStraight 
        className="absolute right-4 top-4"
        size={32}
        weight={isLiked ? "fill" : "regular"}
        color={isLiked ? "#92000E" : "#FFFFFF"}
        onClick={favoriteDish}
      />
      <img
        className="w-[176px] h-[176px]" 
        src={dishImage} 
        alt="Imagem do prato de Salada Ravanello" 
      />
      <h3 className="font-heading font-bold text-2xl mt-4">
        {dishName} &gt;
      </h3>
      <span className="text-sm my-4 text-center">
        {dishDescription}
      </span>
      <strong className="font-normal text-cyan-500 text-[32px]">
        {dishPrice}
      </strong>

      <div className="w-full mt-4 flex items-center justify-center gap-4">
        <div className="flex items-center gap-[14px]">
          <button 
            className="hover:bg-blue-500 rounded-sm" 
            onClick={decreaseDishAmount}
          >
            <Minus size={24} />
          </button>
          
          <span className="font-bold text-xl">
            { amount }
          </span>

          <button    
            className="hover:bg-blue-500 rounded-sm"
            onClick={increaseDishAmount} 
          >
            <Plus size={24} />
          </button>

        </div>
        <Button type="button" title="Incluir" />
      </div>

    </div>
  )
}