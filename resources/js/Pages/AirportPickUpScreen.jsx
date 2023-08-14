import React from 'react'
import { Footer } from './components/Footer'
import Navbar from './components/Navbar'
import { Input, Textarea } from '@material-tailwind/react'

function AirportPickUpScreen() {
  return (
    <div>
            <div>
                <Navbar />
                <section className="p-6">
                    <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                        <div className="w-full px-6  rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
                            <div className="text-center">
                                <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                                Airport<span className="text-primary"> Pickup</span>
                                </h3>
                            </div>
                            <p className="my-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem, obcaecati nisi in nulla numquam id natus dolore praesentium quae explicabo minus a, blanditiis sint! Reprehenderit magni animi ratione suscipit! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente est ad reprehenderit id accusamus error ipsam ut, obcaecati nisi ducimus a labore eaque dicta? Fugit tempora explicabo laboriosam distinctio vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consectetur sunt fugit commodi quisquam eligendi numquam iste odit laudantium quae, ipsam suscipit? Deleniti, delectus. Sapiente itaque fuga aperiam alias. Temporibus.
                            </p>
                            <form className="self-stretch ng-untouched ng-pristine ng-valid">
                                <div>
                                    <div className='my-2'>
                                        <Input color="green" label='Name' />
                                        
                                    </div>
                                    <div className='my-2'>
                                        <Input color="green" label='Email'  />

                                    </div>
                                    <div className='my-2'>
                                        <Input color="green" label='Phone' />

                                    </div>
                                    <div className='my-2'>
                                        <Textarea color="green" label="Extra Details" />
                                  
                                </div>
                                <button type="submit" className="w-full py-2 font-semibold bg-primary text-white rounded ">Send Request</button>
                            </div>
                        </form>
                    </div>
                    <img src="https://img.freepik.com/free-photo/place-flying-sunset-sky_1112-1132.jpg?w=740&t=st=1682675522~exp=1682676122~hmac=665559ecfe817fb6aa7a1ad36deaa7aad08429d638eac050444c36764589e1d9" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
                </div>
            </section>
            <Footer/>
        </div>
    </div>
  )
}

export default AirportPickUpScreen