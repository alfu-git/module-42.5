"use client";
import { ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const FoodCard = ({ food }) => {
  return (
    <div className="p-4 bg-[#212121] rounded-xl">
      <div className="mb-5 flex justify-center items-center">
        <figure>
          <Image
            src={food.image_link}
            alt={food.dish_name}
            width={120}
            height={120}
            className="w-auto h-auto"
          />
        </figure>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-medium">{food.dish_name}</h3>
        <span className="text-lg font-medium">{food.price}</span>

        <div className="flex justify-between items-center">
          <span className="flex gap-2 items-center bg-base-100 text-black py-1 px-2 rounded-xl">
            <span className="text-2xl font-medium">Details</span>{" "}
            <span>
              <ChevronRight />
            </span>
          </span>

          <span className="flex gap-2 items-center">
            <span>
              <Star />
            </span>{" "}
            <span className="text-2xl font-bold">{food.rating}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
