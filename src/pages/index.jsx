
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className=''>
        <div className="container mt-36 sm:mt-44">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper "
          >
            <SwiperSlide>
              <div className="w-full relative grid grid-cols-3 items-center mb-12">
                <div className="z-20">
                  <h1 className='font-danaB md:text-3xl xl:text-5xl mb-4 md:mb-12'>احساس خوب زندگی با کفش های<span className='text-purple'> آرتین شاپ </span></h1>
                  <Link href="/" className='px-2 md:px-10 py-2 md:py-4 text-xs rounded-xl bg-purple text-white'> همین الان خرید کن! </Link>
                </div>

                <div className="relative flex justify-end col-span-2">
                  <img src="/assets/Images/ornament.png" alt="" />

                </div>


              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full relative grid grid-cols-3 items-center">
              <div className="z-20">
                  <h1 className='font-danaB md:text-3xl xl:text-5xl mb-4 md:mb-12'>احساس خوب زندگی با کفش های<span className='text-purple'> آرتین شاپ </span></h1>
                  <Link href="/" className='px-2 md:px-10 py-2 md:py-4 text-xs rounded-xl bg-purple text-white'> همین الان خرید کن! </Link>
                </div>

                <div className="relative flex justify-end col-span-2">
                  <img src="/assets/Images/ornament1.png" alt="" />

                </div>


              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full relative grid grid-cols-3 items-center">
              <div className="z-20">
                  <h1 className='font-danaB md:text-3xl xl:text-5xl mb-4 md:mb-12'>احساس خوب زندگی با کفش های<span className='text-purple'> آرتین شاپ </span></h1>
                  <Link href="/" className='px-2 md:px-10 py-2 md:py-4 text-xs rounded-xl bg-purple text-white'> همین الان خرید کن! </Link>
                </div>

                <div className="relative flex justify-end col-span-2">
                  <img src="/assets/Images/ornament2.png" alt="" />

                </div>


              </div>
            </SwiperSlide>
          </Swiper>

        </div>
      </section>
      <section className='my-44'>

      </section>
    </>
  )
}
