 import { useState, useMemo } from "react";

 export const useRoomFilters =(rooms)=>{
 const [selectedType, setSelectedType] =useState([]);
    const[selectedPrice, setSelectedPrice] = useState([]);
    const [sortOption, setSortOption] = useState("");

    const handleTypeChange = (type) =>{
        setSelectedType((prev)=>
        prev.includes(type)
        ? prev.filter((t)=> t !== type)
        :[...prev, type]
        );
    };
    const handlePriceChange = (range) =>{
        setSelectedPrice((prev)=>
        prev.includes(range)
        ?  prev.filter((t)=> t!== range)
        : [...prev, range]
        );
    };
    const handleSortChange = (value) =>{
        setSortOption(value);
    };
    const handleClearFilters = () =>{
        setSelectedType([]);
        setSelectedPrice([]);
        setSortOption("");
    };

    const filteredRooms = useMemo(() => {
    let result = [...rooms];   // создаём копию!

    result = result.filter((room) => {
        if (selectedType.length > 0 &&
            !selectedType.includes(room.roomType)) {
            return false;
        }

        if (selectedPrice.length > 0) {
            const matchPrice = selectedPrice.some((range) => {
                if (range === "2500 - 15000") {
                    return room.pricePerNight >= 2500 &&
                           room.pricePerNight <= 15000;
                }

                if (range === "15000-25000") {
                    return room.pricePerNight >= 15000 &&
                           room.pricePerNight <= 25000;
                }

                if (range === "25000+") {
                    return room.pricePerNight >= 25000;
                }

                return false;
            });

            if (!matchPrice) return false;
        }

        return true;
    });

    if (sortOption === "low") {
        result.sort((a, b) => b.pricePerNight - a.pricePerNight);
    }

    if (sortOption === "high") {
        result.sort((a, b) => a.pricePerNight - b.pricePerNight);
    }

    return result;

}, [rooms, selectedType, selectedPrice, sortOption]);
    return{
        filteredRooms,
        selectedType,
        selectedPrice,
        sortOption,
        handleClearFilters,
        handlePriceChange,
        handleSortChange,
        handleTypeChange,
    };
};