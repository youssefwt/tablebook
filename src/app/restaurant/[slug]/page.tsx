import React from 'react'
import Header from './Header'
import ReservationCard from './ReservationCard'
import { Avatar, Flex } from '@mantine/core'
import RestaurantNav from '../RestaurantNav'

const Details = () => {
    return (
        <main className="max-w-screen-2xl m-auto bg-white">
            <Header />
            {/* HEADER */} {/* DESCRIPTION PORTION */}
            <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                <div className="bg-white w-[70%] rounded p-3 shadow">
                    {/* RESAURANT NAVBAR */}
                    <RestaurantNav />
                    {/* RESAURANT NAVBAR */} {/* TITLE */}
                    <div className="mt-4 border-b pb-6">
                        <h1 className="font-bold text-6xl">Milesstone Grill</h1>
                    </div>
                    {/* TITLE */} {/* RATING */}
                    <div className="flex items-end">
                        <div className="ratings mt-2 flex items-center">
                            <p>*****</p>
                            <p className="text-reg ml-3">4.9</p>
                        </div>
                        <div>
                            <p className="text-reg ml-4">600 Reviews</p>
                        </div>
                    </div>
                    {/* RATING */} {/* DESCRIPTION */}
                    <div className="mt-4">
                        <p className="text-lg font-light">
                            The classics you love prepared with a perfect twist, all served up
                            in an atmosphere that feels just right. That’s the Milestones
                            promise. So, whether you’re celebrating a milestone, making the most
                            of Happy Hour or enjoying brunch with friends, you can be sure that
                            every Milestones experience is a simple and perfectly memorable one.
                        </p>
                    </div>
                    {/* DESCRIPTION */} {/* IMAGES */}
                    <div>
                        <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                            5 photos
                        </h1>
                        <div className="flex flex-wrap">
                            <img
                                className="w-56 h-44 mr-1 mb-1"
                                src="https://resizer.otstatic.com/v2/photos/xlarge/3/41701449.jpg"
                                alt=""
                            />
                            <img
                                className="w-56 h-44 mr-1 mb-1"
                                src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701450.jpg"
                                alt=""
                            />
                            <img
                                className="w-56 h-44 mr-1 mb-1"
                                src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701452.jpg"
                                alt=""
                            />
                            <img
                                className="w-56 h-44 mr-1 mb-1"
                                src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701453.jpg"
                                alt=""
                            />
                            <img
                                className="w-56 h-44 mr-1 mb-1"
                                src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701454.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    {/* IMAGES */} {/* REVIEWS */}
                    <div>
                        <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
                            What 100 people are saying
                        </h1>
                        <div>
                            {/* REVIEW CARD */}
                            <div className="border-b pb-7 mb-7">
                                <Flex>
                                    <div className="w-1/6 flex flex-col items-center">
                                        <Avatar color="blue" size={'lg'}>Mj</Avatar>
                                        <p className="text-center">Micheal Jordan</p>
                                    </div>
                                    <div className="ml-10 w-5/6">
                                        <div className="flex items-center">
                                            <div className="flex mr-5">*****</div>
                                        </div>
                                        <div className="mt-5">
                                            <p className="text-lg font-light">
                                                Laurie was on top of everything! Slow night due to the
                                                snow storm so it worked in our favor to have more one on
                                                one with the staff. Delicious and well worth the money.
                                            </p>
                                        </div>
                                    </div>
                                </Flex>
                            </div>
                            {/* REVIEW CARD */}
                        </div>
                    </div>
                    {/* REVIEWS */}
                </div>
                <ReservationCard />
            </div>
            {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */} {/* RESERVATION
    CARD PORTION */}
        </main>
    )
}

export default Details