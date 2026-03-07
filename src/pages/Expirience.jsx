import React from "react";
import {Box, CardMedia, Checkbox, FormControl, FormControlLabel, Typography} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useExpirience } from "../hook/useExpirience";
import { exclusiveToursData } from "../assets/exclusiveToursData";



const fallbackImage = 
"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80";

const Expirience = () =>{
    const navigate = useNavigate();
    const [openFilters, setOpenFilters] = useState(false);
    const{
            filterTours,
            selectedType,
            selectedPrice,
            sortOption,
            handleClearFilters,
            handlePriceChange,
            handleSortChange,
            handleTypeChange,
        }=useExpirience(exclusiveToursData);

        return(
            <Box
                sx={{
                    display:"flex",
                    bgcolor:" rgba(27,20,20,0.8)",
                    flexDirection:{
                        xs: "column-reverse",
                        lg: "row",

                    },
                    alignItems:"flex-start",
                    justifyContent:"space-between",

                    pt:{
                        md: 8.75,
                    },
                    px:{
                        md: 2,
                        lg: 6,
                        
                    },
                }}
            >
                <Box
                    sx={{
                        mt: 3,
                        display:"flex",
                        flexDirection:"column",
                        alignItems:"flex-start",
                        textAlign:"left",
                    }}
                >
                    <Typography 
                        variant="h5"
                        sx={{
                            fontFamily:"Playfair",
                            fontWeight: 400,
                            color:"#ede8e8",
                            fontSize: {
                                xs: "36px",
                                md: '40px',
                            },
                        }}
                    >
                        Варианты туров
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            fontFamily:"Outfit",
                            fontWeight: 400,
                            color:"#ede8e8",
                            fontSize: {
                                xs: "14px",
                                md: '16px',
                            },
                            mt: 2,
                            maxWidth:"696px",
                        }}
                    >

                    </Typography>
                    {filterTours.map((tour)=>{
                        const discountedPrice = tour.originalPrice * (1 - tour.discountPercent / 100)

                        return (
                        <Box
                            key={tour.id}
                            sx={{
                                position:"relative",
                                width:"100%",
                                display:"flex",
                                flexDirection: {xs: "column", md: "row"},
                                alignItems:"flex-start",
                                py: 4,
                                gap: 0.5,
                                borderBottom : "1px solid",
                                "&: last-of-type":{
                                    pb: 30,
                                    borderBottom: 0,
                                },
                                color:"#fff",
                            }}
                        >
                            <CardMedia
                              component="img"
                              image={tour.images ?. [0] || fallbackImage}
                              alt = {tour ?.title}  
                              onError={(e)=>{
                                e.target.src = fallbackImage;
                              }}
                              sx={{
                                objectFit:"cover",
                                cursor:"pointer",
                                width: 360,
                                boxShadow: 3,
                                borderRadius: 4,
                                mt: 1,
                                height: 260,
                              }}
                            />
                            <Box
                                sx={{
                                    width:{
                                        md: "50%"
                                    },
                                    display:"flex",
                                    flexDirection: "column",
                                    gap: 0.5,
                                    ml: 3,
                                    color:"#fff",
                                }}
                            >
                                <Typography  variant="h4" sx={{ mt: 2.5, color:"#fff",}}>
                                    {tour.city}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: 24,
                                        fontFamily:" Playfair",
                                        color:"#fff",
                                        "&:hover" : {
                                            opacity: 0.8,
                                        }
                                    }}
                                >
                                        {tour.title}
                                </Typography>
                                <Box display="flex" alignItems="center" gap={0.5}>
                                    <Typography fontSize={16} fontWeight={500} color="#dee6e3" sx={{fontFamily:"Orbitron"}}>
                                        {tour.date}
                                    </Typography>
                                        
                                </Box>
                                <Box sx={{display:"flex",flexWrap:"wrap", alignItems:"center", mt:2, mb:3, gap: 2,}}>
                                    {tour.description}
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 2,
                                    }}
                                    >
                                    <Typography
                                        component="del"
                                        fontSize={20}
                                        sx={{ opacity: 0.7 }}
                                    >
                                        {tour.originalPrice.toLocaleString("ru-RU")} ₽
                                    </Typography>

                                    <Typography
                                        fontSize={24}
                                        fontWeight={600}
                                        
                                    >
                                        {Math.round(discountedPrice).toLocaleString("ru-RU")} ₽
                                    </Typography>

                                    <Typography
                                        sx={{
                                            bgcolor: "#ff4d4f",
                                            color: "#fff",
                                            px: 1,
                                            borderRadius: 1,
                                            fontSize: 14,
                                            fontWeight: 600
                                        }}
                                    >
                                        -{tour.discountPercent}%
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    );
                })}
                </Box>
                {/* Фильтры */}
                <Box
                    sx={{
                        backgroundColor:"#e6dddd",
                        width: 380,
                        border:" 2px solid #79787b",
                        borderRadius: 7.5,
                        color: "#4B5563",
                        mt:{
                            xs: 2,
                            lg: 12
                        },
                        px: 0.5,
                        mb: 2,
                        
                        
                    }}
                >
                    <Box
                        sx={{
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"space-between",
                            px: 2,
                            py: 1.5,
                            borderBottom: {xs:"none", lg: "1px solid"},
                            borderColor:"grey.300",
                            ...(openFilters && {
                                borderBottom :"1px solid",
                                borderColor:"grey.300",
                            }),
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 16,
                                fontWeight: 600,
                                color:"#464141", 
                            }}
                        >
                             ФИЛЬТРЫ
                        </Typography>
                        <Box
                            onClick={()=>setOpenFilters(!openFilters)}
                            sx={{ display:{xs: "block", lg: "none"}}}>
                        {openFilters ? 'СКРЫТЬ' : 'ПОКАЗАТЬ'}
                        </Box>
                        <Typography
                        onClick={handleClearFilters}
                            sx={{
                                display:{ xs: "none", lg:"block"},
                                fontSize: 14,
                                cursor: "pointer",
                                color:"#686666",
                                "&:hover":{color:"black"},
                            }}
                        >
                            СБРОСИТЬ
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display:{
                            xs: openFilters ? "flex" : "none",
                            lg: "flex",
                            },
                            flexDirection:"column",
                            px:1,
                        }}
                    >
                        {/*Популярные фильтры*/}
                        <Typography fontWeight={600} mb={0.5} mt={2} ml={2} color="#352d2d" fontSize={15}>
                            Популярные фильтры
                        </Typography>
                        
                        {[
                            "Романтический",
                            "Семейный",
                            "Экстремальный",
                            "Экскурсионный",
                            "Оздоровительный",
                            
                        ].map((type)=>(
                            <FormControlLabel
                                key={type}
                                control={
                                    <Checkbox
                                    checked ={selectedType.includes(type)}
                                    onChange={()=> handleTypeChange(type)}
                                    />
                                }
                                label={type}
                                sx={{
                                    mb:0.2,
                                    ml:1,
                                    "& .MuiFormControlLabel-label":{
                                        fontSize: 14,
                                        fontWeight: 400,
                                        color:"#4a4444",
                                    },
                                }}
                            />
                        ))}
                        {/* Цена*/}
                        <Typography fontWeight={600} mt={2} mb={0.5} ml={2} color="#352d2d" fontSize={15}>
                            Цена
                        </Typography>
                        {["20000 - 40000", "40000-60000", "60000+"].map((range)=>(
                            <FormControlLabel 
                            key={range}
                            control={
                                <Checkbox
                                checked={selectedPrice.includes(range)}
                                onChange={()=> handlePriceChange(range)}
                            />
                            }
                            label={range}
                            sx={{
                                mb: 0.2,
                                ml: 1,
                                " &. MuiFormControlLabel-label":{
                                    fontSize: 14,
                                    fontWeight: 400,
                                    color:"#4a4444",
                                },
                            }}
                            />
                        ))}
                        {/*Сортировка*/}
                        <Typography fontWeight={600} mt={2} mb={0.5} ml={2} color="#352d2d" fontSize={15}>
                            Сортировать по
                        </Typography>
                        {[
                            {label:" По убыванию", value:"low"},
                            {label:"По возрастанию", value:"high"},
                        ].map((option)=>(
                            <FormControlLabel
                                key={option.value}
                                control={
                                    <Checkbox
                                    checked={sortOption === option.value}
                                    onChange={()=> handleSortChange(sortOption === option.value ? "" : option.value)}
                                
                                />
                                }
                                label = {option.label}
                                sx={{
                                    mb: 0.2,
                                    ml: 1,
                                    "& .MUiFormControlLabel-label":{
                                        fontSize: 14,
                                        fontWeight: 400,
                                        color:"#4a4444",
                                    },
                                }}
                            />
                        ))}

                    </Box>
                </Box>
        </Box>
            
        )
    
}
export default Expirience;