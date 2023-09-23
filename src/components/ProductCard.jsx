import React, { useEffect, useState } from 'react'

export default function ProductCard({ id, title, img, price, stars }) {
 const colors = ["#FCA3A3", "#A3F7FC", "#FCC3A3", "#A3FCB1", "#E96310", "#ff8cb3" ,"#A3ACFC"]
 const [color, setColor] = useState("#FCA3A3")
 useEffect(() => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  setColor(randomColor);
  colors.splice(colors.indexOf(randomColor), 1);
 }, [])
 return (
  <div className="relative border-2 rounded-md p-5 shadow-2xl space-y-3 z-30 bg-white">
   <div className="flex items-center justify-center h-[63%]" style={{ background: color }}>
    <img src={img} alt="" />
   </div>
   <div className="font-danaB space-y-4">
    <p className='text-NavyBlue'>{title}</p>
    <p className='text-gray-400 text-left'>{price.toLocaleString()} تومان</p>
    <div className="flex flex-wrap items-center justify-between">
     <div className="bg-zinc-700 px-1.5 py-1 rounded-full">
      <svg className="w-6 h-6">
       <use href='#shopping-cart'></use>
      </svg>
     </div>
     <div className="flex gap-x-2 float-left">
      <svg className="w-4 h-4">
       <use href='#star'></use>
      </svg>
      <svg className="w-4 h-4">
       <use href='#star'></use>
      </svg>
      <svg className="w-4 h-4">
       <use href='#star'></use>
      </svg>
      <svg className="w-4 h-4">
       <use href='#star'></use>
      </svg>
      <svg className="w-4 h-4">
       <use href='#star'></use>
      </svg>
     </div>
    </div>
   </div>
  </div>
 )
}
