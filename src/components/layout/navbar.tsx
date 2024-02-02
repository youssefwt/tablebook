import { Button, Group } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import SchemeSwitch from '../scheme-switch/SchemeSwitch'

const Navbar = () => {
    return (
        <nav className="px-4 flex justify-between items-center h-full">
            <Link href="/" className="font-bold text-gray-700 text-2xl"> <span className='dark:text-white'>TableBook</span>  </Link>
            <Group gap="sm">
                <Button>
                    Sign in
                </Button>
                <Button variant='outline'>Sign up</Button>
                <SchemeSwitch />
            </Group>
        </nav>
    )
}

export default Navbar