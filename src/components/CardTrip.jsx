import React, { useState } from "react";
import tripImage from "../assets/tripImage.jpg"
import { Box, Typography} from "@mui/material";
import Booking from "./Booking";



const CardTrip = () =>{
    return(
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                
                
                position:"relative",
                backgroundImage: `url(${tripImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.5)",
                }}
            />
            <Box
                sx={{
                    position: "relative",
                    zIndex: 1,
                    height:"100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent:"flex-start",
                    alignItems: "flex-start",
                    px: { xs: 3, md: 8, lg: 12, xl: 16 },
                    pt: { xs: 12, md: 18 },
                    color: "#fff",
                    
                }}
            >
            <Typography  
                    sx={{
                        bgcolor: "rgba(73,185,255,0.5)",
                        px: 2,
                        py: 0.5,
                        borderRadius: "999px",
                        mt: 10,
                        fontSize: 14,
                    }}
            >
                Впечатления об отелях
            </Typography>
            <Typography 
                sx={{
                        fontFamily: "Playfair Display, serif",
                        fontWeight: { xs: 700, md: 800 },
                        fontSize: { xs: "24px", md: "56px" },
                        lineHeight: { md: "56px" },
                        maxWidth: 600,
                        mt: 2,
                    }}
            >
                Откройте для себя идеальный путь
            </Typography>
            <Typography variant="p2" 
                   sx={{
                        maxWidth: 520,
                        mt: 2,
                        fontSize: { xs: "14px", md: "16px" },
                    }}
            >
                Непревзойденная роскошь и комфорт ждут вас в самых эксклюзивных отелях и курортах мира. 
                Начните свое путешествие сегодня.
            </Typography>
            <Box sx={{ mt: 4}}>
                <Booking />
            </Box>
        </Box>
        
        </Box>
    );
};
export default CardTrip;