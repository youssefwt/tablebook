import RestaurantCard from "@/components/RestaurantCard";
import SearchBar from "@/components/SearchBar";
import React from "react";
import SearchCard from "./SearchCard";
import { Button, ButtonGroup, Title } from "@mantine/core";

const Search = () => {
    return (
        <div className="max-w-screen-2xl m-auto bg-white dark:bg-slate-400 dark:text-white">
            <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
                <SearchBar />
            </div>
            <div className="flex py-4 m-auto w-2/3 justify-between items-start gap-5">
                <div className="w-1/5">
                    <div className="border-b pb-4">
                        <Title order={5}>Region</Title>
                        <p className="font-light text-reg">Toronto</p>
                        <p className="font-light text-reg">Ottawa</p>
                        <p className="font-light text-reg">Montreal</p>
                        <p className="font-light text-reg">Hamilton</p>
                        <p className="font-light text-reg">Kingston</p>
                        <p className="font-light text-reg">Niagara</p>
                    </div>
                    <div className="border-b pb-4 mt-3">
                        <Title order={5}> Cuisine</Title>
                        <p className="font-light text-reg">Mexican</p>
                        <p className="font-light text-reg">Italian</p>
                        <p className="font-light text-reg">Chinese</p>
                    </div>
                    <div className="mt-3 pb-4">
                        <Title order={5}>Price</Title>
                        <ButtonGroup>
                            <Button className="dark:text-white dark:border-white" variant="outline">$</Button>
                            <Button className="dark:text-white dark:border-white" variant="outline">$$</Button>
                            <Button className="dark:text-white dark:border-white" variant="outline">$$$</Button>
                        </ButtonGroup>
                    </div>
                </div>
                <div className="w-5/6">
                    <SearchCard />
                </div>
            </div>
        </div>
    );
};

export default Search;
