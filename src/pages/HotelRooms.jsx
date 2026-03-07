import { Typography, Box, CardMedia } from "@mui/material";
import React, { useState } from "react";
import { roomsDummyData } from "../assets/roomsDummyData";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { amenityIcons } from "../assets/amenityIcons";
import { useRoomFilters } from "../hook/useRoomFilters";
import { Checkbox, FormControlLabel, Divider } from "@mui/material";

const fallbackImage =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80";

const HotelRooms = () =>{
    const navigate = useNavigate();
    const [openFilters, setOpenFilters] = useState(false);
    const {
        filteredRooms,
        selectedType,
        selectedPrice,
        sortOption,
        handleTypeChange,
        handlePriceChange,
        handleSortChange,
        handleClearFilters,
        } = useRoomFilters(roomsDummyData);
   

    return (
        <Box
            sx={{
                display: "flex",
                bgcolor: "rgba(27, 20, 20, 0.8)",
                flexDirection: {
                xs: "column-reverse",
                lg: "row",
                },
                alignItems: "flex-start",
                justifyContent: "space-between",

                pt: {
                xs: 7,   
                md: 8.75,
                },

                px: {
                xs: 1,  
                md: 4,  
                lg: 6,  
                xl: 8,  
                },
            }}
        >
            <Box
                sx={{
                    mt:3,
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"flex-start",
                    textAlign:"left",

                }}
            >
                <Typography 
                    variant="h5"
                    sx={{
                        fontFamily: "Playfair",
                        fontWeight: 400,
                        color:"#ede8e8",
                        fontSize:{
                            xs:"36px",
                            md:"40px",
                        },
                    }}
                >
                    Номера отелей
                </Typography>
               <Typography 
                    sx={{
                        fontFamily: "Outfit",
                        fontWeight: 400,
                        fontSize:{
                            xs:"14px",
                            md:"16px",
                        },
                        color:"#ede8e8",
                        mt:2,
                        
                        maxWidth:"696px"
                        
                    }}
                >
                    Воспользуйтесь нашими ограниченными по времени предложениями и специальными пакетами,
                     чтобы сделать ваше пребывание еще более приятным и создать незабываемые воспоминания.
                </Typography>
                {filteredRooms.map((room)=>(
                    
                    <Box
                    key={room.id}
                       sx={{
                        position:"relative",
                        width:"100%",
                        display:"flex",
                        flexDirection:{xs:"column", md:"row"},
                        alignItems:"flex-start",
                        py: 4,
                        gap:5,
                        borderBottom: "1px solid",
                        "&:last-of-type": {
                            pb: 30,                                   
                            borderBottom: 0,                          
                        },
                        color:'#fff',

                       }}
                    >
                        <CardMedia
                        component="img"
                        image={room.images?.[0] || fallbackImage}
                         alt={room.hotel?.name}
                         onError={(e)=>{
                            e.target.src = fallbackImage;
                         }}
                         onClick={()=>{navigate(`/rooms/${room.id}`); scrollTo(0,0)}}
                            sx={{
                                objectFit:"cover",
                                cursor:"pointer",
                                maxWidth:360,
                                boxShadow:3,
                                borderRadius:4,
                                mt:1,
                                height: 260,
                                
                            
                        }}
                       />
                       <Box
                        sx={{
                            width:{
                                md: "50%",
                            },
                            display:"flex",
                            flexDirection:"column",
                            gap:0.5,
                        
                            color:'#fff',
                            
                        }}
                       >
                            <Typography sx={{mt:3.5, color:"#fff",}}>
                                    {room.hotel.city}
                            </Typography>
                            <Typography  onClick={()=>{navigate(`/rooms/${room.id}`); scrollTo(0,0)}}>

                            </Typography>
                            <Typography 
                                sx={{
                                    fontSize:24,
                                    fontFamily: "Playfair",
                                    color:"#fff",
                                    cursor: "pointer",
                                    "&:hover": {
                                        opacity: 0.8,
                                    },
                                }}
                            >
                                {room.hotel.name}
                            </Typography>
                            <Box display="flex" alignItems="center" gap={0.5}>
                                <StarIcon sx={{ color: "#fbc02d", fontSize: 18 }} />
                                <Typography fontSize={14} fontWeight={500} color="#FFF">
                                    {room.rating}, {room.reviewsCount}
                                </Typography>
                            </Box>
                            <Box display="flex" alignItems="center" gap={0.5}>
                                <LocationOnIcon sx={{color:"#a2a2a2", fontSize: 18}} />
                                <Typography color="#fff">
                                    {room.hotel.address}
                                </Typography>
                            </Box>

                            <Box sx={{ display: "flex", flexWrap:"wrap",alignItems:"center", gap: 2, mt: 3, mb:3 }}>
                        {room.amenities?.map((amenity, index) => {
                            const IconComponent = amenityIcons[amenity];

                            return (
                            <Box
                                key={index}
                                sx={{ display: "flex", alignItems: "center", gap: 2, px:2, py:1,borderRadius:3, bgcolor:"#626262" }}
                            >
                                {IconComponent && <IconComponent fontSize="small"/>}
                                <Typography variant="body2" color="#ffffff">
                                {amenity}
                                </Typography>
                            </Box>
                            );
                        })}
                        </Box>
                        {/* Цена за сутки*/}
                        <Typography fontSize={20} fontWeight="500" color="#fff">
                            {room.pricePerNight.toLocaleString('ru-RU')} ₽
                        </Typography>
                        
                        </Box>


                    </Box>
                ))}
            </Box>
        {/* Фильтры*/}
       <Box
            sx={{
                backgroundColor: "#e6dddd",
                width: 300,
                border: "2px solid #79787b",
                borderRadius: 7.5,
                color: "#4B5563",
                mt: { xs: 0, lg: 11 },
                px: 1,
                 py: 1 ,
                
            }}
        >
            <Box 
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 2,      
                    py: 1.5,     
                    borderBottom: { xs: "none", lg: "1px solid" },
                    borderColor: "grey.300",

                    ...(openFilters && {
                    borderBottom: "1px solid",
                    borderColor: "grey.300",
                    }),
                }}
            >
                <Typography
                    sx={{
                    fontSize: 16,          
                    fontWeight: 600,      
                    color: "#464141", 
                    }}
                >
                    ФИЛЬТРЫ
                </Typography>
            
                <Box 
                onClick={()=>setOpenFilters(!openFilters)}
                sx={{ display: { xs: "block", lg: "none" } }}>
                    {openFilters ? 'СКРЫТЬ':'ПОКАЗАТЬ'}
                </Box>
                <Typography
                onClick={handleClearFilters}
                sx={{ 
                    display: { xs: "none", lg: "block" },
                    fontSize: 14,
                    cursor: "pointer",
                    color:"#686666",
                    "&:hover":{color:"black"},

                    }}>
                    СБРОСИТЬ
                </Typography>
            </Box>
            <Box
                sx={{
                    display: {
                    xs: openFilters ? "flex" : "none",
                    lg: "flex",
                    },
                    flexDirection: "column",
                    px: 1,
                }}
            >
            {/*Популярные фильтры*/}
            <Typography fontWeight={600} mb={0.5} mt={2} ml={2} color="#352d2d" fontSize={15}>
                Популярные фильтры
            </Typography>
            {[
                "Полулюкс",
                "Комфорт",
                "С видом на океан",
                "Комфорт+",
                "Президентский номер",
            ].map((type)=>(
                <FormControlLabel
                    key={type}
                    control={
                        <Checkbox
                        checked={selectedType.includes(type)}
                        onChange={()=> handleTypeChange(type)}
                        />
                    }
                    label={type}
                    sx={{
                        mb:0.2,
                        ml: 1,
                        "& .MuiFormControlLabel-label": {
                        fontSize: 14,
                        fontWeight: 400,
                        color: "#4a4444",
                        
                        },
                    }}
                />
            ))}
            {/* Цена*/}
            <Typography fontWeight={600} mt={2} mb={0.5} ml={2} color="#352d2d" fontSize={15}>
                Цена
            </Typography>
             {["2500 - 15000", "15000-25000", "25000+"].map((range) => (
                <FormControlLabel
                    key={range}
                    control={
                        <Checkbox
                        checked={selectedPrice.includes(range)}
                        onChange={() =>handlePriceChange(range)}
                        />
                    }
                    label={range}
                    sx={{mb:0.2,
                        ml:1,
                        "& .MuiFormControlLabel-label": {
                        fontSize: 14,
                        fontWeight: 400,
                        color: "#4a4444",
                        },
                        
                    }}
                />
             ))}
             {/*сортировка*/}
             <Typography fontWeight={600} mt={2} mb={0.5} ml={2} color="#352d2d" fontSize={15}>
                Сортировать по 
             </Typography>
             {[
                {label:"По убыванию", value:"low"},
                {label: "По возврастанию", value:"high"},
             ].map((option)=>(
                <FormControlLabel
                    key={option.value}
                    control={
                        <Checkbox
                        checked={sortOption === option.value}
                        onChange={() =>
                        handleSortChange(sortOption === option.value ? "" : option.value)
                        }
                    />
                    }
                    label={option.label}
                    sx={{
                        mb:0.2,
                        ml:1,
                        "& .MuiFormControlLabel-label": {
                        fontSize: 14,
                        fontWeight: 400,
                        color: "#4a4444",
                        },
                    }}
                />
             ))}
             </Box>
        </Box>
        
        </Box>
    )
}
export default HotelRooms;