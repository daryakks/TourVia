import {useState, useMemo} from "react";

export const useExpirience = (tours) =>{
    const [selectedType, setSelectedType] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState([]);
    const [sortOption, setSortOption] = useState("");


    const handleTypeChange = (type) =>{
        setSelectedType((prev)=>
        prev.includes(type)
        ? prev.filter((t)=> t !== type)
        : [...prev, type]
        );
    };

    const handlePriceChange = (range) =>{
        setSelectedPrice((prev)=>
        prev.includes(range)
        ? prev.filter((t)=> t !== range)
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

    const filterTours = useMemo(()=>{
        let result = [...tours];

        result = result.filter((tour)=>{
            if(selectedType.length > 0 &&
                !selectedType.includes(tour.tourType)){
                return false;
            }
            if(selectedPrice.length > 0){
                const matchPrice = selectedPrice.some((range) => {
                    if(range === '20000 - 40000'){
                        return tour.originalPrice >= 20000 &&
                                tour.originalPrice <= 40000;
                    }
                    if (range === '40000-60000'){
                        return  tour.originalPrice >= 40000 &&
                                tour.originalPrice <= 60000;
                    }
                    if (range === '60000+'){
                        return tour.originalPrice >= 60000;
                    }
                    return false;
                });
                if(!matchPrice) return false;
            }
            return true;
        });

        if (sortOption === 'low'){
            result.sort((a, b)=> b.originalPrice - a.originalPrice);
        }
        if (sortOption === 'high'){
            result.sort((a,b)=> a.originalPrice - b.originalPrice);
        }
        return result;
            
        },[tours, selectedType, selectedPrice, sortOption]);
        return {
            filterTours,
            selectedType,
            selectedPrice,
            sortOption,
            handleClearFilters,
            handlePriceChange,
            handleSortChange,
            handleTypeChange,
        };
    };
