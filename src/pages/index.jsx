
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules'
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';

export default function Home() {

  const [products, setProducts] = useState([])
  const { productsData } = useQuery("products", () => {
    return fetch("http://localhost:4000/Product").then(res => res.json()).then(data => {
      setProducts(data)
      setSliderProducts(data)
    })
  })

  const [sliderProducts, setSliderProducts] = useState([])
  const [sliderStatus, setSliderStatus] = useState("new")

  useEffect(() => {
    if (sliderStatus === "sele") {
      const NewLayout = sliderProducts?.filter(products => products).sort((a, b) => a.saleNum - b.saleNum)
      setSliderProducts(NewLayout)
    } else if (sliderStatus === "new") {
      setSliderProducts(products)
    }
  }, [sliderStatus])
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
                  <Link href="/" className='px-2 md:px-10 py-2 md:py-4 md:text-base text-xs rounded-xl bg-purple text-white'> همین الان خرید کن! </Link>
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
                  <Link href="/" className='px-2 md:px-10 py-2 md:py-4 md:text-base text-xs rounded-xl bg-purple text-white'> همین الان خرید کن! </Link>
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
                  <Link href="/" className='px-2 md:px-10 py-2 md:py-4 md:text-base text-xs rounded-xl bg-purple text-white'> همین الان خرید کن! </Link>
                </div>

                <div className="relative flex justify-end col-span-2">
                  <img src="/assets/Images/ornament2.png" alt="" />

                </div>


              </div>
            </SwiperSlide>
          </Swiper>

        </div>
      </section>

      {/* --> Start New Products section */}
      <section className='my-16'>
        <div className="container">
          <h3 className='mb-3 text-xl font-danaB text-center'>محصولات جدید</h3>
          <hr />
          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-12 mt-8">
            {
              products?.slice(0, 8).map(item => <ProductCard key={item.id} {...item} />)
            }
          </div>
        </div>
      </section>
      {/* End New Products section <-- */}

      <section>
        <div className="container Discount-banner relative flex flex-wrap sm:flex-nowrap justify-between items-center rounded-lg px-12 py-16">
          <svg className='absolute top-0 left-8'
            xmlns="http://www.w3.org/2000/svg"
            width={95}
            height={297}
            viewBox="0 0 95 297"
            fill="none"
          >
            <path
              d="M0 0H95V267C95 283.569 81.5685 297 65 297H30C13.4315 297 0 283.569 0 267V0Z"
              fill="#FF6F88"
              fillOpacity={0.25}
            />
          </svg>
          <div className="z-20 text-white">
            <h3 className='text-2xl font-danaB mb-4'>50 درصد تخفیف ویژه</h3>
            <p className='mb-10'>یک استایل شیک و متفاوت را با کفش های اسپرت ما تجربه کنید. ارائه انواع کفش ورزشی با مدل های متنوع. خرید با قیمت‌های باورنکردنی فقط تا 24 اردیبهشت ماه. بشتابید و تا فرصت به اتمام نرسیده از این تخفیف استثنایی استفاده کنید.</p>
            <Link href={"/"} className='font-danaB text-lg py-2.5 px-6 bg-white/30 rounded-lg'>مشاهده تخفیف‌ها</Link>
          </div>
          <img className='z-10 left-0 right-0 mx-auto' src="/assets/Images/Offer.png" alt="Offer.png" />
          <svg className='absolute right-8 bottom-0'
            xmlns="http://www.w3.org/2000/svg"
            width={95}
            height={297}
            viewBox="0 0 95 297"
            fill="none"
          >
            <path
              d="M95 297H0L0 30C0 13.4315 13.4315 0 30 0H65C81.5685 0 95 13.4315 95 30L95 297Z"
              fill="#FF6F88"
              fillOpacity={0.25}
            />
          </svg>
        </div>
      </section>

      <section>
        <div className="container grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-12 mt-8">
          {
            products?.reverse().slice(0, 4).map(product => <ProductCard key={product.id} {...product} />)
          }
        </div>
      </section>

      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-14 mt-8 text-white">
          <div className="Autumn-offer relative rounded-lg flex gap-y-5 flex-wrap sm:flex-nowrap items-center justify-between p-12">
            <svg className='absolute top-0 left-5'
              xmlns="http://www.w3.org/2000/svg"
              width={95}
              height={298}
              viewBox="0 0 95 298"
              fill="none"
            >
              <path
                d="M0 0.181168H95V267.181C95 283.75 81.5685 297.181 65 297.181H30C13.4315 297.181 0 283.75 0 267.181V0.181168Z"
                fill="#C6598F"
                fillOpacity={0.25}
              />
            </svg>
            <div className="z-20">
              <p className='text-2xl font-danaB mb-2'>فروش پاییزه</p>
              <p className='mb-5'>50% تخفیف تمامی کفش ها در حراج کده بهارستان 1402</p>

              <Link href={"/"} className='z-20 font-danaB text-lg py-2.5 px-6 bg-white/30 rounded-lg'>دیدن همه محصولات</Link>
            </div>
            <img className='z-20 left-0 right-0 mx-auto' src="/assets/Images/offers.png" alt="" />
            <svg className='absolute bottom-0 right-5'
              xmlns="http://www.w3.org/2000/svg"
              width={95}
              height={298}
              viewBox="0 0 95 298"
              fill="none"
            >
              <path
                d="M95 297.181H0L0 30.1811C0 13.6126 13.4315 0.181152 30 0.181152H65C81.5685 0.181152 95 13.6126 95 30.1812L95 297.181Z"
                fill="#C6598F"
                fillOpacity={0.25}
              />
            </svg>
          </div>
          <div className="Wonders-day-offer relative rounded-lg flex gap-y-5 flex-wrap sm:flex-nowrap items-center justify-between p-12">
            <svg className='absolute top-0 left-5'
              xmlns="http://www.w3.org/2000/svg"
              width={95}
              height={298}
              viewBox="0 0 95 298"
              fill="none"
            >
              <path
                d="M0 0.181168H95V267.181C95 283.75 81.5685 297.181 65 297.181H30C13.4315 297.181 0 283.75 0 267.181L0 0.181168Z"
                fill="#157EF7"
                fillOpacity={0.15}
              />
            </svg>
            <div className="z-20">
              <p className='text-2xl font-danaB mb-2'>شگفت انگیز های روز</p>
              <p className='mb-5'>50% تخفیف تمامی کفش ها در حراج کده بهارستان 1402</p>
              <Link href={"/"} className='z-20 font-danaB text-lg py-2.5 px-6 bg-white/30 rounded-lg'>رفتن به حراج کده</Link>
            </div>
            <img className='z-20 left-0 right-0 mx-auto' src="/assets/Images/offers1.png" alt="" />

            <svg className='absolute bottom-0 right-5'
              xmlns="http://www.w3.org/2000/svg"
              width={95}
              height={298}
              viewBox="0 0 95 298"
              fill="none"
            >
              <path
                d="M95 297.181H0L0 30.1812C0 13.6126 13.4315 0.181152 30 0.181152H65C81.5685 0.181152 95 13.6126 95 30.1812L95 297.181Z"
                fill="#157EF7"
                fillOpacity={0.15}
              />
            </svg>
          </div>
        </div>
      </section>

      <section>
        <div className="container grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-12 mt-8">
          {
            products?.reverse().slice(4, 8).map(product => <ProductCard key={product.id} {...product} />)
          }
        </div>
      </section>

      <section>
        <div className="relative container mt-14">
          <div className=" w-full flex items-center justify-center gap-x-8 border-b-2 mb-14 font-danaB">
            <span onClick={() => setSliderStatus("new")} className={`pb-4 border-[#00CD90] ${sliderStatus === "new" ? "border-b-4" : null}`}>جدید ترین‌ها</span>
            <span onClick={() => setSliderStatus("sele")} className={`pb-4 border-[#00CD90] ${sliderStatus === "sele" ? "border-b-4" : null}`}>پرفروش ترین‌ها</span>

          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {
              sliderProducts?.map(product => <SwiperSlide className='mb-14' key={product.id}><ProductCard {...product} /></SwiperSlide>)
            }

          </Swiper>
          <div className="absolute bg-[#F5E6FF] w-full bottom-0 left-0 right-0 h-[50%] z-[0]"></div>
        </div>
      </section>

      <section>
        <div className="container flex flex-wrap md:flex-nowrap gap-6 items-center justify-between my-16">
          <div className="">
            <p className='text-lg font-danaB text-NavyBlue mb-4'>ثبت نام در خبرنامه</p>
            <p>اولین نفری باشید که از جدیدترین محصولات، جشنواره ها و فروش‌های ویژه ما مطلع می شوید.</p>
          </div>
          <form className='flex items-center justify-center flex-wrap md:flex-nowrap gap-6'>
            <input className='border-2 border-gray-500 outline-none rounded-xl px-4 py-2 text-center w-80' type="number" placeholder='شماره موبایل' />
            <input className='bg-purple px-10 py-3 rounded-xl text-white font-danaB' type="submit" value={"ارسال"} />
          </form>
        </div>
      </section>
    </>
  )
}
