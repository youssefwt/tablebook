import React from 'react'
import Header from '../Header'
import RestaurantNav from '../../RestaurantNav'
import MenuCard from './MenuCard'

const Menu = () => {
    return (
        <main className="max-w-screen-2xl m-auto bg-white">
            <Header />
            <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                <div className="bg-white w-[100%] rounded p-3 shadow">
                    {/* RESAURANT NAVBAR */}
                    <RestaurantNav />

                    {/* RESAURANT NAVBAR */} {/* MENU */}
                    <main className="bg-white mt-5">
                        <div>
                            <div className="mt-4 pb-1 mb-1">
                                <h1 className="font-bold text-4xl">Menu</h1>
                            </div>
                            <div className="flex flex-wrap justify-between">
                                <MenuCard />
                            </div>
                        </div>
                    </main>
                    {/* MENU */}
                </div>
            </div>
        </main>
    )
}

export default Menu