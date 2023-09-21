import Link from 'next/link'
import React from 'react'

export default function Header() {
 return (
  <header className='w-full fixed pt-7 text-NavyBlue font-danaM top-0 z-50 bg-white'>
   <div className="container grid grid-cols-2 md:grid-cols-3 justify-between items-center">

    {/* Start Right side */}
    <div className="">
     <Link href={"/"} className='text-NavyBlue text-3xl font-danaB'>
      <span className='text-purple'>آرتین  </span>
      شاپ
     </Link>
    </div>
    {/* End Right side */}

    {/* Start center  */}
    <div className="hidden md:block">
     <form className='w-full border flex gap-x-2 py-3 px-4 rounded-2xl shadow-md'>
      <input className='w-full outline-none bg-inherit' type="search" placeholder='جستجو کنید' />
      <svg className='w-6 h-6'>
       <use href='#search'></use>
      </svg>
     </form>
    </div>
    {/* End center  */}

    {/* Start Left Side */}
    <div className="flex justify-end items-center gap-x-2 xl:gap-x-5 text-left">
     <Link href={"/"} className='flex gap-x-2 text-white bg-purple rounded-xl px-6 py-3 '>
      <svg className='w-6 h-6'>
       <use href='#user'></use>
      </svg>
      <span className='hidden lg:block'>ورود / ثبت نام</span>
     </Link>
     <Link href={"/"} className='flex gap-x-2 text-white bg-[#FF4842] rounded-xl px-6 py-3'>
      <svg className="w-6 h-6">
       <use href='#shopping-cart'></use>
      </svg>
      <span className='hidden lg:block'> سبد خرید </span>
     </Link>
    </div>
    {/* End Left Side */}

   </div>
   {/* Start Bottom Menu */}
   <div className="w-full flex items-center justify-center mt-5 bg-gray-300 py-1 md:py-4">
    <ul className='hidden md:flex gap-x-10'>
     <li className="relative flex items-center gap-x-2 group transition-all">
      مردانه
      <svg className="w-4 h-4">
       <use href='#arrow-down'></use>
      </svg>
      <ul className='hidden transition-all group-hover:grid absolute grid-cols-2 top-10 bg-gray-300 px-3 py-2 w-48 gap-3 border border-t rounded-b-xl'>
       <li>نیم بوت</li>
       <li>بوت</li>
       <li>دمپایی</li>
       <li>کفش رسمی</li>
       <li>نیم بوت</li>
       <li>بوت</li>
       <li>دمپایی</li>
       <li>کفش رسمی</li>
      </ul>
     </li>
     <li className="relative flex items-center gap-x-2 group transition-all">
      زنانه
      <svg className="w-4 h-4">
       <use href='#arrow-down'></use>
      </svg>
      <ul className='hidden transition-all group-hover:grid absolute grid-cols-2 top-10 bg-gray-300 px-3 py-2 w-48 gap-3 border border-t rounded-b-xl'>
       <li>نیم بوت</li>
       <li>بوت</li>
       <li>دمپایی</li>
       <li>کفش رسمی</li>
       <li>نیم بوت</li>
       <li>بوت</li>
       <li>دمپایی</li>
       <li>کفش رسمی</li>
      </ul>
     </li>
     <li className="relative flex items-center gap-x-2 group transition-all">
      بچه‌گانه
      <svg className="w-4 h-4">
       <use href='#arrow-down'></use>
      </svg>
      <ul className='hidden transition-all group-hover:grid absolute grid-cols-2 top-10 bg-gray-300 px-3 py-2 w-48 gap-3 border border-t rounded-b-xl'>
       <li>نیم بوت</li>
       <li>بوت</li>
       <li>دمپایی</li>
       <li>کفش رسمی</li>
       <li>نیم بوت</li>
       <li>بوت</li>
       <li>دمپایی</li>
       <li>کفش رسمی</li>
      </ul>
     </li>
     <li className="relative flex items-center gap-x-2 group transition-all">
      جدیدترین‌ها
     </li>
     <li className="relative flex items-center gap-x-2 group transition-all">
      پیشنهادات شگفت انگیز
     </li>
     <li className="relative flex items-center gap-x-2 group transition-all">
      پشتیبانی
     </li>
    </ul>
    <div className="group">

     <svg className="w-6 h-6 left-0 right-0 mx-auto block md:hidden">
      <use href='#menu'></use>
     </svg>
     <ul className='hidden group-hover:grid md:hidden gap-y-5 text-center mt-4'>
      <li className="flex items-center gap-x-2 mx-auto">
       مردانه
      </li>
      <li className="flex items-center gap-x-2 mx-auto">
       زنانه
      </li>
      <li className="flex items-center gap-x-2 mx-auto">
       بچه‌گانه
      </li>
      <li className="flex items-center gap-x-2 mx-auto">
       جدیدترین‌ها
      </li>
      <li className="flex items-center gap-x-2 mx-auto">
       پیشنهادات شگفت انگیز
      </li>
      <li className="flex items-center gap-x-2 mx-auto">
       پشتیبانی
      </li>
     </ul>
    </div>

   </div>
  </header>
 )
}
