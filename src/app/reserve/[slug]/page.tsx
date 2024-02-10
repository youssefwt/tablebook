import { Group, Input, SimpleGrid } from '@mantine/core'
import React from 'react'

const Reserve = () => {
    return (
        <main className="max-w-screen-2xl m-auto bg-white">
            <div className="border-t h-screen">
                <div className="py-9 w-3/5 m-auto">
                    {/* HEADER */}
                    <div>
                        <h3 className="font-bold">You're almost done!</h3>
                        <div className="mt-5 flex">
                            <img
                                src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
                                alt=""
                                className="w-32 h-18 rounded"
                            />
                            <div className="ml-4">
                                <h1 className="text-3xl font-bold">
                                    Aiāna Restaurant Collective
                                </h1>
                                <div className="flex mt-3">
                                    <p className="mr-6">Tues, 22, 2023</p>
                                    <p className="mr-6">7:30 PM</p>
                                    <p className="mr-6">3 people</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* HEADER */} {/* FORM */}
                    <SimpleGrid cols={2} className='mt-10'>
                        <Input
                            type="text"
                            // className="border rounded p-3 w-80 mb-4"
                            placeholder="First name"
                        />
                        <Input
                            type="text"
                            // className="border rounded p-3 w-80 mb-4"
                            placeholder="Last name"
                        />
                        <Input
                            type="text"
                            // className="border rounded p-3 w-80 mb-4"
                            placeholder="Phone number"
                        />
                        <Input
                            type="text"
                            // className="border rounded p-3 w-80 mb-4"
                            placeholder="Email"
                        />
                        <Input
                            type="text"
                            // className="border rounded p-3 w-80 mb-4"
                            placeholder="Occasion (optional)"
                        />
                        <Input
                            type="text"
                            // className="border rounded p-3 w-80 mb-4"
                            placeholder="Requests (optional)"
                        />
                        <button
                            className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300"
                        >
                            Complete reservation
                        </button>
                        <p className=" text-sm">
                            By clicking “Complete reservation” you agree to the OpenTable Terms
                            of Use and Privacy Policy. Standard text message rates may apply.
                            You may opt out of receiving text messages at any time.
                        </p>
                    </SimpleGrid>
                </div>
            </div>
        </main>
    )
}

export default Reserve