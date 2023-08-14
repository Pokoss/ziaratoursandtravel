import React from 'react'
import NavbarHome from './components/NavbarHome'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Link } from '@inertiajs/react'
import { Footer } from './components/Footer';
import { Typography } from '@material-tailwind/react';
import Packages from './components/Packages';
import TestimonialCard from './components/TestimonialCard';

function HomeScreen() {

  const mystyle = {
    backgroundAttachment: 'fixed',
    backgroundImage: 'url("https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg")'
  };

    const packages = [
    {
      'id': '1',
      'title': 'Western Special',
      'duration': '3 days',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione reprehenderit maxime illo dolorem recusandae voluptas soluta hic sapiente reiciendis neque natus doloremque molestias, laudantium itaque harum ab libero numquam.',
      'activities': ['3 Hotels', 'Game drive', 'Gorilla tracking'],
      "addons": ['Free photography', 'Free meals', 'Free tour guide']
    },
    {
      'id': '2',
      'title': 'Eastern Special',
      'duration': '3 days',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione reprehenderit maxime illo dolorem recusandae voluptas soluta hic sapiente reiciendis neque natus doloremque molestias, laudantium itaque harum ab libero numquam.',
      'activities': ['3 Hotels', 'Game drive', 'Gorilla tracking'],
      "addons": ['Free photography', 'Free meals', 'Free tour guide']
    },
    {
      'id': '3',
      'title': 'Northern Special',
      'duration': '3 days',
      'activities': ['3 Hotels', 'Game drive', 'Gorilla tracking'],
      "addons": ['Free photography', 'Free meals', 'Free tour guide']
    },

    {
      'id': '3',
      'title': 'Southern Special',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione reprehenderit maxime illo dolorem recusandae voluptas soluta hic sapiente reiciendis neque natus doloremque molestias, laudantium itaque harum ab libero numquam.',
      'duration': '3 days',
      'activities': ['3 Hotels', 'Game drive', 'Gorilla tracking'],
      "addons": ['Free photography', 'Free meals', 'Free tour guide']
    },
  ]

    const testimonials = [
    {
      'id': '1',
      'title': 'Very nice trip',
      'name': 'Kagwa Mike',
      'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione reprehenderit maxime illo dolorem recusandae voluptas soluta hic sapiente reiciendis neque natus doloremque molestias, laudantium itaque harum ab libero numquam.',
    },
    {
      'id': '2',
      'title': 'Am choosing Ziara again, good service',
      'name': 'Mulondo Yafessi',
      'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione reprehenderit maxime illo dolorem recusandae voluptas soluta hic sapiente reiciendis neque natus doloremque molestias, laudantium itaque harum ab libero numquam.',
    },
  
  ]
  return (
    <div>
<NavbarHome/>

{/* Hero Section */}
<div className="relative">
        <div className='absolute inset-0 w-full'>

          <Splide options={{ autoplay: true, rewind: true, arrows: false }}>
            <SplideSlide>
              <img
                src="/Images/web/elephants.jpeg"
                className="h-[750px] object-cover w-full xl:h-[650px]"
                alt=""
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="/Images/web/lake-mburo.jpg"
                className="h-[750px] object-cover w-full xl:h-[650px]"
                alt=""
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="/Images/web/giraffe.jpg"
                className="h-[750px] object-cover w-full xl:h-[650px]"
                alt=""
              />
            </SplideSlide>
          </Splide>
        </div>
        <div className="relative h-[750px] xl:h-[650px]">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-center xl:flex-row">
              <div className="bg-black grid place-items-center mt-32 items-center bg-opacity-30 p-3 rounded-lg mb-12 xl:mb-0 xl:pr-16 xl:w-8/12 ">

                <h2 className="text-center max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none" data-aos='fade-down'>
                  Welcome To<br /><span className='text-primary'>Ziara Tours and Travel</span>
                </h2>
                <p className="text-center max-w-xl mb-4 text-base text-gray-200 md:text-lg" data-aos='fade-up'>
                  Your gateway to extraordinary adventures in Uganda. Explore breathtaking landscapes, vibrant cultures, and unforgettable wildlife encounters. Let us guide you through the beauty and warmth of Uganda for an unforgettable journey.
                </p>
                <Link
                  href="/aboutus"
                  aria-label=""
                  className="inline-flex bg-primary p-2 justify-center rounded-md items-center font-semibold tracking-wider transition-colors duration-200 text-white hover:text-teal-accent-700"
                  data-aos='fade-right'
                >
                  Learn more
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="white"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </Link>
              </div>

              {/* <div className="w-full max-w-xl xl:px-8 xl:w-5/12 opacity-70   hover:opacity-100">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10 " data-aos='zoom-in-left'>
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Book your perfect getaway trip
                  </h3>
                  <form onSubmit={handleSubmitContact}>
                    <div className='my-2'>
                      <Input color="green" label='Name' value={contactForm.data.name ?? ''} onChange={e => contactForm.setData('name', e.target.value)} />
                    </div>
                    <div className='my-2'>
                      <Input color="green" label='Email' value={contactForm.data.email ?? ''} onChange={e => contactForm.setData('email', e.target.value)} />
                    </div>
                    <div className='my-2'>
                      <Input color="green" label='Phone' value={contactForm.data.phone ?? ''} onChange={e => contactForm.setData('phone', e.target.value)} />
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      >
                        Send
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 sm:text-sm">
                      We look forword to planning your trip
                    </p>
                  </form>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/*End Hero Section*/}












{/* End Book Section Section*/}



      {/*About Section*/}
      {/* <div className="grid grid-cols-1 md:grid-cols-2">

        <div className="bg-white p-12 md:p-24 flex justify-end items-center">
          <Link href="" data-aos='fade-right'>
            <img src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" className="w-full max-w-md" />
          </Link>
        </div>

        <div className="bg-gray-100 p-12 md:p-24 flex justify-start items-center">
          <div className="max-w-md" data-aos='fade-down'>
            <div className="w-24 h-2 bg-primary mb-4"></div>
            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">About Us</h2>
            <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed">At Vialey Kankou Tours, we are passionate about showcasing the beauty and wonders of Uganda, a country brimming with rich cultural heritage, breathtaking landscapes, and extraordinary wildlife. Whether you're a seasoned explorer or a first-time traveler, we strive to make your journey through Uganda unforgettable. With our comprehensive range of services, we cater to all your travel needs, ensuring a seamless and delightful experience from start to finish.</p>
            <Link href="/aboutus" className="inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Learn More</Link>
          </div>
        </div>

      </div> */}

      {/* End About Section*/}





      {/*Airport Pickup  Section*/}

      {/* <section className="bg-white border-b py-8">
        <div className="max-w-xl mx-auto text-center" data-aos='fade-down'>
          <div className="w-24 h-2 bg-primary mb-4 mx-auto"></div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl">Our Services</h2>
        </div>
        <div className="container max-w-5xl mx-auto m-8">

          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6" data-aos='fade-right'>
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Airport Pickups
              </h3>
              <p className="text-gray-600 mb-8 text-center">
                Your adventure begins the moment you step off the plane in Uganda. Our reliable and friendly drivers will be waiting to greet you, ensuring a hassle-free transfer to your desired destination. Let us take care of the logistics, so you can focus on enjoying the warm hospitality and diverse offerings of Uganda.
                <br />
                <br />

                <Link href="/airportpickup" className="inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Contact for Pickup</Link>
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6 " data-aos='fade-up'>
              oioioiioioioioi
            </div>
          </div>

          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6" data-aos='fade-down'>
              oioioioioio
            </div>


            <div className="w-full sm:w-1/2 p-6 mt-6" data-aos='fade-right'>
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Car Hire
                </h3>
                <p className="text-gray-600 mb-8">
                  Flexibility is key when exploring Uganda's diverse landscapes. With our reliable car hire service, you can embark on your own adventure at your own pace. Choose from a wide range of well-maintained vehicles, and enjoy the freedom to create your unique travel experience, whether it's a safari through the national parks or a road trip along the scenic routes.
                  <br />
                  <br />
                  <Link href="/carhire" className="inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Contact to hire</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*End Airport Pickup  Section*/}

      <div className="max-w-xl mx-auto text-center my-8" data-aos='fade-down'>
          <div className="w-24 h-2 bg-primary mb-4 mx-auto"></div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl">Our Services</h2>
        </div>

       {/*Mission Section*/}
       <div className="grid grid-cols-1 md:grid-cols-2">

<div className="bg-white p-12 md:p-24 flex justify-end items-center">
  <a href="" data-aos='fade-right'>
    <img src="https://img.freepik.com/free-photo/handsome-elegant-man-car-salon_1157-30188.jpg?w=740&t=st=1682675591~exp=1682676191~hmac=3a79ca2e03342850b4ad7cc52504ff2617d17d4366b891d6fb412cd2ea7f0e1e" className="w-full max-w-md" />
    
  </a>
</div>

<div className="bg-gray-100 p-12 md:p-24 flex justify-start items-center">
  <div className="max-w-md" data-aos='fade-left'>
    <div className="w-24 h-2 bg-green-800 mb-4"></div>
    <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">Car hires</h2>
    {/* <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed"> */}
    <Typography>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, aut odio. Consequuntur in debitis repudiandae nostrum nulla. Vitae nam quibusdam ipsam unde ad quisquam. Inventore maxime magnam earum eos quibusdam?
    </Typography>
    {/* </p> */}
    <Link href="/carhire" className="mt-5 inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Contact for hire</Link>
  </div>
</div>

</div>

{/* End Mission Section*/}

{/* Vision Section Section*/}
<div className="grid grid-cols-1 md:grid-cols-2">


<div className="bg-white p-12 md:p-24 flex justify-start items-center">
  <a href="" data-aos='fade-left'>
    <img src="https://img.freepik.com/free-photo/place-flying-sunset-sky_1112-1132.jpg?w=740&t=st=1682675522~exp=1682676122~hmac=665559ecfe817fb6aa7a1ad36deaa7aad08429d638eac050444c36764589e1d9" className="w-full max-w-md" />
  </a>
</div>

<div className="md:order-first bg-gray-100 p-12 md:p-24 flex justify-end items-center">
  <div className="max-w-md" data-aos='fade-right'>
    <div className="w-24 h-2 bg-green-800 mb-4"></div>
    <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">Airtport Pickup</h2>
    {/* <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed"> */}
    <Typography>

     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita cumque consequatur fugit culpa, dolores esse modi obcaecati recusandae enim error provident laboriosam dolore rem voluptatibus minima ipsa incidunt eum molestias!
    </Typography>

    <Link href="/airportpickup" className="mt-5 inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Contact for Pickup</Link>
    {/* </p> */}
    {/* <a href="" className="inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Book Custom Package</a> */}
  </div>
</div>

</div>

{/* End Vision Section Section*/}
{/*Core Values Section*/}
<div className="grid grid-cols-1 md:grid-cols-2">

<div className="bg-white p-12 md:p-24 flex justify-end items-center">
  <a href="" data-aos='fade-right'>
    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/416879572.jpg?k=f734a876252ada3eb7f62221d826c77dd70a36d378f056dd31b4f547fa5e9d23&o=&hp=1" className="w-full max-w-md" />
  </a>
</div>

<div className="bg-gray-100 p-12 md:p-24 flex justify-start items-center">
  <div className="max-w-md" data-aos='fade-left'>
    <div className="w-24 h-2 bg-green-800 mb-4"></div>
    <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">Hotel bookings</h2>
    {/* <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed"> */}
    <Typography>
      AVHA works with integrity and commitment to improve the health of the people and strives to be fully accountable, transparent and cost effective. We are committed to learning and innovation and to giving our full support to the schools education programme.
    </Typography>
    {/* </p> */}
    <Link href="/hotelbooking" className="mt-5 inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Contact to book</Link>

  </div>
</div>

</div>

{/* End About Section*/}



      {/*Packages Section Section*/}
      {/* <div className="flex justify-center items-center h-screen">
      </div> */}
      <div style={mystyle}>
        <div className="max-w-xl mx-auto text-center pt-10 md:py-10" data-aos='fade-down'>
          <div className="w-24 h-2 bg-primary mb-4 mx-auto"></div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl">Our Packages</h2>
        </div>
        <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12" data-aos='slide-up'>
          <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 md:max-w-full sm:max-w-sm sm:mx-auto lg:max-w-full">
            {
              packages && packages.map((pack, index) => (
                <Link key={index} href={`/packages/${pack.slug}`}>
                  <Packages pack={pack} />
                </Link>
              ))
            }
          </div>
          <div className='flex w-full justify-center mr-3 mt-7'>
            <Link href="/packages" className="inline-block border-2 border-primary font-semibold text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">More Packages</Link>
          </div>

        </div>
      </div>
      {/* End Package Section Section*/}


      
       {/*Consultation  Section*/}
       <div className="max-w-xl mx-auto text-center pt-10 md:py-4" data-aos='fade-down'>
                <div className="w-24 h-2 bg-primary mb-4 mx-auto"></div>
                <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl">Custom Tours</h2>

            </div>
            <div className='w-full'>
                <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                    <div class="w-full lg:w-1/2">
                        <div class="lg:max-w-lg">
                            {/* <h1 class="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">AVHA UGANDA'S COMMINTMENT TO ADDRESSING HEALTH CHALLENGES</h1> */}
                            {/* <p class="my-4 text-gray-600 dark:text-gray-300"> */}
                            <Typography>

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eveniet tenetur, provident aliquid sapiente nostrum nihil eius soluta, voluptatum minus voluptas nulla sint hic molestias adipisci est commodi nesciunt voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime alias facilis dolores voluptas saepe, possimus modi labore accusantium pariatur fuga vero unde reprehenderit sint sunt itaque eveniet similique amet.<br /><br />

                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis voluptatum sequi, laborum iste voluptate eligendi! Molestiae soluta perferendis eius. Animi, earum ipsum nisi ipsa nostrum quas facilis numquam tempora id?

                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus dolorem dolore in, dolores id laboriosam aut saepe maxime vitae distinctio, earum recusandae, reiciendis molestias reprehenderit quibusdam porro error magni. Esse?
                            </Typography>

                            {/* </p> */}
                            <Link href="/customtour" className="inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Book a custom Tour</Link>

                        </div>
                    </div>

                    <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img class="object-cover w-full h-full max-w-2xl rounded-md" src="/Images/Web/mt-view.jpeg" alt="glasses photo" />
                    </div>
                </div>
            </div>

            {/*End consultation section*/}




                {/*Testimonials  Section*/}
      {testimonials && testimonials.length > 0 &&
        <div className="max-w-xl mx-auto text-center pt-10 md:py-10" data-aos='fade-down'>
          <div className="w-24 h-2 bg-primary mb-4 mx-auto"></div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl">Testimonials</h2>
        </div>
      }

      <Splide options={{
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: '1rem',
        autoplay: true,
        interval: 3000,
      }} className='mx-12 hidden md:block'>
        {
          testimonials && testimonials.map((testimonial, index) => (
            <SplideSlide key={index} >
              <TestimonialCard testimonial={testimonial} />
            </SplideSlide>
          ))
        }
      </Splide>

      <Splide options={{
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '1rem',
        autoplay: true,
        interval: 3000,
        arrows: false,
      }} className='mx-2 md:hidden'>
        {
          testimonials && testimonials.map((testimonial, index) => (
            <SplideSlide key={index} >
              <TestimonialCard testimonial={testimonial} />
            </SplideSlide>
          ))
        }
      </Splide>

      {/*End testimonial section*/}



      <div className="container my-24 px-6 mx-auto">


        <section className="mb-32 text-gray-800">

          <div className="relative overflow-hidden h-96 bg-no-repeat bg-cover"
            style={{ backgroundPosition: '50%', backgroundImage: "url('/Images/web/deer.jpg')", backgroundAttachment: 'fixed', backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
          >
            <div className="max-w-xl mx-auto text-center pt-10 md:py-10" data-aos='fade-down'>
              <div className="w-24 h-2 bg-primary mb-4 mx-auto"></div>
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl">Contact Us</h2>
            </div>
          </div>
          <div className="container text-gray-800 px-4 md:px-12" style={{ marginTop: "-200px", background: 'hsla(0, 0%, 100%, 0.8)' }}>
            <div className="block rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6" style={{ backdropFilter: "blur(20px)" }}
            >
              <div className="flex flex-wrap" data-aos='zoom-in-left' >
                <div className="grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0">
                  <form>
                    <div className="form-group mb-6">
                      <input type="text" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                        placeholder="Name" />
                    </div>
                    <div className="form-group mb-6">
                      <input type="email" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                        placeholder="Email address" />
                    </div>
                    <div className="form-group mb-6">
                      <textarea className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                    </div>
                    <div className="form-group form-check text-center mb-6">
                      <input type="checkbox"
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                        id="exampleCheck87" />
                      <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck87">Send me a copy of this
                        message</label>
                    </div>
                    <button type="submit" className="w-full px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                      Send
                    </button>
                  </form>
                </div>
                <div className="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
                  <div className="flex flex-wrap">
                    <a href='tel:256789737973' className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                      <div className="flex items-start bg-white p-2 rounded bg-opacity-70">
                        <div className="shrink-0">
                          <div className="p-4 bg-yellow-900 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headset" className="w-5 text-white"
                              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path fill="currentColor"
                                d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                              </path>
                            </svg>
                          </div>
                        </div>
                        <div className="grow ml-6">
                          <p className="font-bold mb-1 text-gray-600 text-sm md:text-base leading-relaxed">Call Us</p>
                          <p className="font-light text-gray-600 text-sm md:text-base leading-relaxed">+256-345-678-912</p>
                        </div>
                      </div>
                    </a>
                    <a href='mailto:info@vialeykankoutours.com' className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6 ">
                      <div className="flex items-start bg-white p-2 rounded bg-opacity-70">
                        <div className="shrink-0">
                          <div className="p-4 bg-yellow-900 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>

                          </div>
                        </div>
                        <div className="grow ml-6">
                          <p className="font-bold mb-1 text-gray-600 text-sm md:text-base leading-relaxed">Email</p>
                          <p className="font-light text-gray-600 text-xs leading-relaxed">info@ziaratoursandtravel.com</p>
                        </div>
                      </div>
                    </a>
                    <button className="grow-0 mb-12 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                      <div className="flex align-start bg-white p-2 rounded bg-opacity-70">
                        <div className="shrink-0">
                          <div className="p-4 bg-yellow-900 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                            <img className='object-fill' src='/Images/web/facebook.png' />
                            {/* <svg viewBox="0 0 24 24" fill="white" className="h-5 ">
                              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                            </svg> */}
                          </div>
                        </div>
                        <div className="grow ml-6">
                          <p className="font-bold mb-1 text-gray-600 text-sm md:text-base leading-relaxed text-left">Facebook</p>
                          <p className="font-light text-gray-600 text-sm md:text-base leading-relaxed text-left">Ziara Tours and Travel</p>
                        </div>
                      </div>
                    </button>
                    <button className="grow-0 mb-12 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                      <div className="flex align-start bg-white p-2 rounded bg-opacity-70">
                        <div className="shrink-0">
                          <div className="p-4 bg-yellow-900 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                            <img className='w-full h-full object-fill' src='/Images/web/instagram.png' />
                            {/* <svg viewBox="0 0 30 30" fill="white" className="h-6 w-6">
                              <circle cx="15" cy="15" r="4" />
                              <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                            </svg> */}
                          </div>
                        </div>
                        <div className="grow ml-6">
                          <p className="font-bold mb-1 text-gray-600 text-sm md:text-base leading-relaxed text-left">Instagram</p>
                          <p className="font-light text-gray-600 text-sm md:text-base leading-relaxed text-left">Ziaratoursandtravel</p>
                        </div>
                      </div>
                    </button>

                  </div>


                </div>
              </div>
            </div>
          </div>

        </section>


      </div>
      <Footer/>
    </div>
  )
}

export default HomeScreen