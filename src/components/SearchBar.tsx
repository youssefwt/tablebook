import { Button, Input } from '@mantine/core'
import React from 'react'

const SearchBar = () => {
    return (
        <div className="text-left text-lg py-3 m-auto flex justify-center">
            <Input name='query' className="mr-3 w-[450px]" placeholder="State, city or town" size="md" />
            <Button size='md' color="red">
                Let's go
            </Button>
        </div>
    )
}

export default SearchBar