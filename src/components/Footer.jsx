import Link from 'next/link'
import React from 'react'

export default function Footer() {
 return (
  <footer className='w-full bg-[#EBE6FE] border-y border-gray-400'>
   <div className=" top py-5 border-b border-gray-400">
    <div className="container  flex flex-wrap gap-5 items-center justify-center md:justify-between text-NavyBlue font-danaM">
     <p>پشتیبانی 24 ساعته در هر روز هفته</p>
     <p>تلفن پشتیبانی کالا: 5293792-021</p>
     <ul className="flex flex-wrap gap-4">
      <li>راهنما</li>
      <li>فروشگاه</li>
      <li>سبد خرید</li>
      <li>پرسش های متداول</li>
     </ul>
    </div>
   </div>
   <div className="center container">
    <div className="flex flex-wrap gap-4 items-center justify-between py-8">
     <div className="flex items-center justify-between gap-20">
      <ul className='space-y-4'>
       <p className='text-NavyBlue font-danaB text-lg'>دسته بندی‌ها</p>
       <li>مردانه</li>
       <li>زنانه</li>
       <li>بچگانه</li>
       <li>زیبایی و سلامت</li>
      </ul>
      <ul className='space-y-4'>
       <p className='text-NavyBlue font-danaB text-lg'>برندهای مهم</p>
       <li>کفش نایک</li>
       <li>کفش آدیداس</li>
       <li>کفش سالومون</li>
       <li>کفش نیوبالانس </li>
      </ul>
      <ul className='space-y-4'>
       <p className='text-NavyBlue font-danaB text-lg'>خدمات ما</p>
       <li>درباره ما</li>
       <li>تماس با ما</li>
       <li>همکاری تجاری</li>
       <li>قوانین و مقررات</li>
      </ul>
     </div>
     <div className="space-y-8">
      <div className="w-full flex gap-8 items-center justify-center">
       <svg className="w-6 h-6 transition-all mt-2 hover:mt-0">
        <use href='#amazon'></use>
       </svg>
       <svg className="w-6 h-6 transition-all mt-2 hover:mt-0">
        <use href='#whatsapp'></use>
       </svg>
       <svg className="w-6 h-6 transition-all mt-2 hover:mt-0">
        <use href='#facebook'></use>
       </svg>
       <svg className="w-6 h-6 transition-all mt-2 hover:mt-0">
        <use href='#instagrom'></use>
       </svg>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-10">
       <img src="/assets/Images/star11.png" alt="" />
       <img src="/assets/Images/image84.png" alt="" />
       <img src="/assets/Images/logo1.png" alt="" />
      </div>
     </div>
    </div>
   </div>
   <div className="container botton py-5 border-y border-gray-400 text-center">
    <p>تمام حقوق مادی و معنوی این سایت متعلق به فروشگاه اینترنتی آرتین شاپ می باشد.</p>
    <p className='mt-5 text-xs'>Designed by <Link className='font-danaB text-purple text-sm' href="https://www.figma.com/@farzane_m">Farzane Mojtabavi</Link> and developed and coded by <Link className='font-danaB text-purple text-sm' href={"https://github.com/vcabolfazl"}>Abolfazl Sharifi</Link></p>
   </div>
  </footer>
 )
}
