import { Typography, Card, Box, CardMedia, Chip, CardContent, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";
import { Link } from "react-router-dom";
import { fallbackImage } from "../assets/roomsDummyData";

const HotelCard = ({ room, index }) => {
  const roomImage = room.images?.[0] || fallbackImage;
  const hotelImage = room.hotel?.image || fallbackImage;

  return (
    <Card
      component={Link}
      to={`/room/${room.id}`}
      onClick={() => window.scrollTo(0, 0)}
      sx={{
        textDecoration: "none",
        
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(19, 19, 19, 0.8)",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
        },
      }}
    >
      {/* Фото комнаты */}
      <Box sx={{ 
        position: "relative",
        
         

      }}>
        <CardMedia
          component="img"
          image={roomImage}
          alt={room.roomType}
          onError={(e) => (e.target.src = fallbackImage)}
          sx={{
            
            height: 220,
            objectFit: "cover",
            borderRadius: 3,
            
        }}

        />

        {/* Тэг */}
        {room.tags?.includes("Best Seller") && (
          <Chip
            label="Best Seller"
            size="small"
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              bgcolor: "#fff",
              color: "#333",
              fontWeight: 500,
            }}
          />
        )}
      </Box>

      {/* Контент */}
      <CardContent sx={{ p: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography sx={{ fontFamily: "Playfair Display, serif", fontSize: 20, fontWeight: 500, color: "#d4d0d0" }}>
            {room.hotel?.name}
          </Typography>
          <Box display="flex" alignItems="center" gap={0.5}>
            <StarIcon sx={{ color: "#fbc02d", fontSize: 18 }} />
            <Typography fontSize={14} fontWeight={500} color="#d4d0d0">
              {room.rating}
            </Typography>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" gap={0.5} mt={1}>
          <LocationOnIcon sx={{ fontSize: 16, color: "#d4d0d0" }} />
          <Typography fontSize={14} color="#d4d0d0">
            {room.hotel?.address}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <Typography fontSize={16} fontWeight={500} color="#d4d0d0">
             {room.pricePerNight.toLocaleString('ru-RU')} ₽
          </Typography>
          <Button
            variant="contained"
            size="small"
            sx={{
              textTransform: "none",
              bgcolor: "#35618e",
              color: "#fff",
              "&:hover": { bgcolor: "#0c0f64" },
            }}
          >
            Забронировать
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default HotelCard;
