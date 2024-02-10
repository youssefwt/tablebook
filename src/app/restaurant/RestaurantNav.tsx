import Link from 'next/link'
import React from 'react'

const RestaurantNav = () => {
    return (
        <nav className="flex text-reg border-b">
            <Link href="" className="px-4 py-2 hover:bg-neutral-100"> Overview </Link>
            <Link href="" className="px-4 py-2 hover:bg-neutral-100"> Menu </Link>
        </nav>
    )
}

export default RestaurantNav