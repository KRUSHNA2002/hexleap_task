import React from 'react'
import Image from "next/image";

const Card_Dark = () => {
    return (
        <>
            <section className='bg-slate-500 '>
                <div className="container p-1 text-white" >
                    <div className="col-md-12 mb-8 mt-12">
                        <h2 className="ms-32 font-bold border-b-2 border-blue-500 w-28 ">Sports</h2>
                    </div>
                    <div className="row mt-32 justify-center align-center space-x-4">
                        <div className="col-md-2 p-3 bg-gray-800 shadow-lg">
                            <div style={{ height: '300px' }}>
                                <Image src={'/baseball.jpeg'} alt="" width={300} height={500} style={{ height: '100%', width: '100%' }} />
                            </div>
                            <p className="text-xxl font-bold mt-3">Sacramento River Cats</p>
                            <div className="col-md-12 p-2">
                                <div className="row bg-gray-600 rounded p-0">
                                    <div className="col-md-6">
                                        <span className="text-sm">Total Event</span>
                                        <h6 className="mt-2">48 Event</h6>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="text-sm">Sport</span>
                                        <h6 className="mt-2">Baseball</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2 p-3 bg-gray-800 shadow-lg">
                            <div style={{ height: '300px' }}>
                                <Image src={'/baseball2.png'} alt="" width={300} height={500} style={{ height: '100%', width: '100%' }} />
                            </div>
                            <p className="text-xl font-bold mt-3">Las Vegas Aviators</p>
                            <div className="col-md-12 p-2">
                                <div className="row bg-gray-600 rounded p-0">
                                    <div className="col-md-6">
                                        <span className="text-sm">Total Event</span>
                                        <h6 className="mt-2">28 Event</h6>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="text-sm">Sport</span>
                                        <h6 className="mt-2">Baseball</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2 p-3 bg-gray-800 shadow-lg">
                            <div style={{ height: '300px' }}>
                                <Image src={'/hocky.jpeg'} alt="" width={300} height={500} style={{ height: '100%', width: '100%' }} />
                            </div>
                            <p className="text-xl font-bold mt-3">New Jersey Devils</p>
                            <div className="col-md-12 p-2">
                                <div className="row bg-gray-600 rounded p-0">
                                    <div className="col-md-6">
                                        <span className="text-sm">Total Event</span>
                                        <h6 className="mt-2">15 Event</h6>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="text-sm">Sport</span>
                                        <h6 className="mt-2"> Hockey</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2 p-3 bg-gray-800 shadow-lg">
                            <div style={{ height: '300px' }}>
                                <Image src={'/baseball3.jpeg'} alt="" width={300} height={500} style={{ height: '100%', width: '100%' }} />
                            </div>
                            <p className="text-xl font-bold mt-3">Las Vegas Aviators</p>
                            <div className="col-md-12 p-2">
                                <div className="row bg-gray-600 rounded p-0">
                                    <div className="col-md-6">
                                        <span className="text-sm">Total Event</span>
                                        <h6 className="mt-2">28 Event</h6>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="text-sm">Sport</span>
                                        <h6 className="mt-2">Baseball</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2 p-3 bg-gray-800 shadow-lg">
                            <div className="h-150">
                                <Image src={'/advertise.jpeg'} alt="" height={150} width={200} />
                            </div>
                            <p className="text-xl font-bold mt-3">Advertisement title</p>
                            <div className="col-md-12 p-2">
                                <div className="row rounded p-0">
                                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio laborum ullam nesciunt optio labore itaque sapiente error voluptatibus ut commodi?</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <button className="btn btn-primary mt-6">See More</button>
                    </div>
                </div>

                <div className="container  mt-5" style={{ paddingBottom: '100px' }}>
                    <div className="grid grid-cols-1 p-4 sm:grid-cols-12  gap-4 mt-13 bg-gradient-to-t from-purple-900 to-green-900" >
                        <div className="col-span-12">
                            <h1 className="text-center text-gray-200 font-bold mt-10">Collection Spotlight</h1>
                            <p className="text-center text-gray-200">
                                Discover extraordinary moments with our spotlight collection metatickets - exclusive access to premium events for an unforgettable experience. Grab yours today!
                            </p>
                        </div>



                        <div className="col-span-12 sm:col-span-4 p-3 shadow-lg mb-11   bg-gray-800">
                            <div className="h-64">
                                <Image src={'/baseball2.png'} alt="" width={300} height={500} className="h-100 w-100" />
                            </div>
                            <p className="text-center text-lg font-bold mt-4 text-red-50">Las Vegas Aviators</p>
                            <div className="p-2 text-center">
                                <p className="text-sm text-red-50">OCT 15 | SUN | 4:30 PM</p>
                                <p className="text-sm text-red-50">Las Vegas Ballpark, Las Vegas, Nevada</p>
                            </div>
                            <button className="btn btn-dark mt-2 w-full text-xxs" style={{ fontSize: '0.5rem' }}>Take Flight Collection</button>
                        </div>

                        <div className="col-span-12 sm:col-span-4 me-auto p-3 shadow-lg mb-11  bg-gray-800">
                            <div className="h-64">
                                <Image src={'/hocky.jpeg'} alt="" width={300} height={500} className="h-100 w-100" />
                            </div>
                            <p className="text-center text-lg font-bold mt-4 text-red-50">Sacramento River Cats</p>
                            <div className="p-1 text-center">
                                <p className="text-xxs text-red-50">OCT 15 | SUN | 4:30 PM</p>
                                <span className="text-xxs text-red-50"><span className="text-red-50">Sutter Health Park, Sacramento, California</span></span>
                            </div>
                            <button className="btn btn-dark mt-2 w-full text-xs" style={{ fontSize: '0.5rem' }}>Orange Collection</button>
                        </div>

                        <div className="col-span-12 sm:col-span-4 p-3 me-auto shadow-lg mb-11  bg-gray-800">
                            <div className="h-64">
                                <Image src={'/hocky.jpeg'} alt="" width={300} height={500} className="h-100 w-100" />
                            </div>
                            <p className="text-center text-lg font-bold mt-4 text-red-50">Las Vegas Aviators</p>
                            <div className="p-1 text-center">
                                <p className="text-xxs text-red-50">OCT 15 | SUN | 4:30 PM</p>
                                <span className="text-xxs text-red-50"><span className="text-red-50">Sutter Health Park, Sacramento, California</span></span>
                            </div>
                            <button className="btn btn-dark mt-2 w-full text-xs" style={{ fontSize: '0.5rem' }}>Take Flight  Collection</button>
                        </div>
                    </div>
                </div>



            </section>

        </>
    )
}

export default Card_Dark
