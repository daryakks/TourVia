import React, { useEffect, useState } from "react";
import {Box, Typography, Chip, Divider, Button, TextField} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { bonusIcons } from "../assets/bonusIcon";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { amenityIcons } from "../assets/amenityIcons";
import { fallbackImage, roomsDummyData } from "../assets/roomsDummyData";
const HotelRoomsDetails = () =>{
    const {id} = useParams();
    const [room, setRoom] = useState(null);
    const [mainImage, setMainImage] = useState(null);
    useEffect(()=>{
        const foundRoom = roomsDummyData.find(rooms => rooms.id === id)
        if(foundRoom){
            setRoom(foundRoom);
            setMainImage(foundRoom?.images[0]);
        }

    },[id]);
  if (!room) return null;

    return  (
        <Box 
            sx={{display:"flex",
                flexDirection:"column",
                width:"100%",
                mx:"auto",
                bgcolor:"rgba(27, 20, 20, 0.8)",
            }}
        >
             <Box
            sx={{
                py: { xs: 10, md: 14 },
                px: { xs: 3, md: 8, lg: 16 },
            }}
            >
            {/* Заголовок */}
            <Box sx={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
            }}>
                <Typography
                variant="h4"
                fontWeight={600}
                sx={{
                fontFamily: "Playfair Display, serif",
                color:"#ede8e8",
                }}
            >
                {room.hotel?.name}
            </Typography>
                {room.tags.map((tag, index) => (
                <Chip key={index} label={tag} sx={{bgcolor:"#cfcbcb", ml: 1, p:1, fontSize: 16, fontWeight: 500}}  />
                ))}
           
            </Box>
            
            
            
               <Box display="flex" alignItems="center"gap={0.3} mt={1} >
                    <StarIcon sx={{ color: "#fbc02d", fontSize: 16}} />
                    <Typography fontSize={16} fontWeight={500} color="#FFF">
                        {room.rating} 
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={0.3} mt={1}>
                    <LocationOnIcon sx={{color:"#a2a2a2", fontSize: 16}} />
                    <Typography fontSize={14} fontWeight={500} color="#FFF">
                        {room.hotel.city}, {room.hotel.address}
                    </Typography>
                </Box>

                
                 <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
                        gap: 2,
                        mt: 4,
                    }}
                    >
                        
                    {/* Главное фото */}
                    <Box
                        component="img"
                        src={mainImage}
                        onError={(e) => (e.target.src = fallbackImage)}
                        sx={{
                        width: "100%",
                        objectFit: "cover",
                        height: 400,
                        borderRadius: 4,
                        }}
                    />

                    {/* Маленькие фото */}
                    <Box
                        sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 2,
                        }}
                    >
                        {room.images.slice(1, 5).map((img, index) => (
                        <Box
                            key={index}
                            component="img"
                            src={img}
                            onClick={() => setMainImage(img)}
                            sx={{
                            width: "100%",
                            height: 190,
                            objectFit: "cover",
                            borderRadius: 3,
                            cursor: "pointer",
                            }}
                        />
                        ))}
                    </Box>
                    </Box>
                    {/*Цена и опесание*/}
                    <Box
                        sx={{
                            display:"flex",
                            justifyContent:"space-between",
                            alignItems:"center",
                            mt: 4,
                            flexDirection:"row",
                            gap:2,
                        }}
                    >
                        <Typography fontWeight={500} variant="h5" color="#FFF">
                            {room.roomType}
                            {/* Теги */}
                        </Typography>
                        <Typography variant="h4" fontWeight={700} color="#FFF">
                            {room.pricePerNight.toLocaleString("ru-RU")} ₽ / сутки
                        </Typography>
                    </Box>
                    
                    
                    <Divider color="#fff" sx={{my:4}} />
                    <Typography variant="h4" mb={2} color="#fff">
                        Удобства
                    </Typography>
                     <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 2, mt: 3, mb: 3 }}>
                        {room.amenities?.map((amenity, index) => {
                        const IconComponent = amenityIcons[amenity];
                        return (
                        <Box
                            key={index}
                            sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            px: 2,
                            py: 1,
                            borderRadius: 3,
                            bgcolor: "#626262",
                            }}
                        >
                                {IconComponent && <IconComponent fontSize="small" sx={{ color: "#fff" }} />}
                                <Typography variant="body2" color="#ffffff">
                                {amenity}
                                </Typography>
                                </Box>
                                );
                            })}
                        </Box>
                    {/*Бронирование*/}
                    <Box
                        component ="form"
                        sx={{
                            mt:4,
                            p:2,
                            borderRadius:3,
                            boxShadow:3,
                            display:"flex",
                            flexDirection:{xs: "column", md:"row"},
                            gap: 3,
                            alignItems:"center",
                            justifyContent:"flex-start",
                            bgcolor:"#e3e1e1",

                        }}
                        onSubmit={(e)=>{e.preventDefault();
                            alert("Форма отправлена");
                        }}
                    >
                        <TextField
                            label="Заезд"
                            type="date"
                            InputLabelProps={{shrink: true}}
                            sx={{ minWidth: 150, }}
                            required
                        />
                        <TextField
                            label="Выезд"
                            type="date"
                            InputLabelProps={{shrink: true}}
                            sx={{ minWidth: 150}}
                            required
                        />

                        <TextField
                            label="Гости"
                            type="number"
                            defaultValue={1}
                            inputProps={{ min: 1, max: room.capacity }}
                            sx={{ minWidth: 80 }}
                            required
                        />

                        <Button variant="contained"type="submit"
                            sx={{width:200,
                                height: 50,
                                ml: 65,
                                bgcolor: "#35618e",
                                color: "#fff",
                                "&:hover": { bgcolor: "#0c0f64" },
                            }}
                        >
                            Найти
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display:"flex",
                            flexWrap:"wrap",
                            flexDirection: {xs:"row", md:"column"},
                            gap:2,
                            mt: 3,

                        }}
                    >
                        {room.bonuses?.map((bonus, index)=>{
                            const IconComponent = bonusIcons[bonus];

                            return(
                                <Box
                                    key={index}
                                    sx={{
                                        display:"flex",
                                        alignItems:"center",
                                        gap: 1.5,
                                        px: 1,
                                        py: 1,
                                        borderRadius:3,
                                        
                                    }}
                                >
                                    {IconComponent &&(
                                        <IconComponent fontSize="small" sx={{color:"#fff"}}/>
                                    )}
                                    <Typography variant="body2" color="#fff"> 
                                        {bonus}
                                    </Typography>
                                </Box>
                            );
                        })}
                        <Divider 
                         sx={{
                            color:"#fff",
                            my:2,
                            width: 650,
                            border:"none",
                            height: "2px",
                            background: "linear-gradient(to right, transparent, rgba(213, 211, 211, 0.8), transparent)",
                        }}
                          />
                        <Box>
                            <Typography variant="h5"fontWeight={500} ml={2} color="#fff">
                                Об отеле
                            </Typography>
                             <Typography fontSize={18} fontWeight={300} mt={2} ml={2} color="#fff" >
                                {room.description}
                            </Typography>  
                        </Box>                  
                    </Box>
                    <Divider color="#fff" 
                        sx={{
                                color:"#fff",
                                my:4,
                                width: 650,
                                border:"none",
                                height: "2px",
                                background: "linear-gradient(to right, transparent, rgba(213, 211, 211, 0.8), transparent)",
                            }}
                    />
                    <Typography variant="h5" fontWeight={500} color="#fff">
                        Адрес отеля
                    </Typography>
                     <Box
                        component="iframe"
                        src={`https://www.google.com/maps?q=${room.hotel.city}&output=embed`}
                        sx={{
                            width: "100%",
                            height: 400,
                            border: 0,
                            borderRadius: 3,
                            mt: 3,
                        }}
                    />
                </Box>
            </Box>
    );
};
export default HotelRoomsDetails;