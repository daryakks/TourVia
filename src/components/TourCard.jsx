import React from "react";
import { Card, CardMedia, CardContent, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const fallbackImage =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80";

const TourCard = ({ tour }) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => {
        navigate(`/experience/${tour.id}`);
        window.scrollTo(0, 0);
      }}
      sx={{
        maxWidth:"100%",
        height: 400,              // одинаковая высота
        borderRadius: 4,
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
          "&:hover .desc": {
            maxHeight: 80,
            opacity: 1,
}
        },
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        image={tour.images?.[0] || fallbackImage}
        alt={tour.title}
        sx={{
            oposition: "absolute",
            inset: 0,
            height:"100%",
            width: 360,
            objectFit: "cover",
        }}
      />

      {/* Gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Content */}
      <CardContent
        sx={{
          position: "absolute",
          bottom: 0,
          color: "#fff",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Playfair Display, serif",
            fontSize: 20,
            fontWeight: 500,
            lineHeight: 1.2,

            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {tour.title}
        </Typography>
          <Typography
            className="desc"
            sx={{
                fontSize: 13,
                color: "#ddd",
                lineHeight: 1.4,
                maxHeight: 0,
                opacity: 0,
                overflow: "hidden",
                transition: "all 0.3s ease",
            }}
            >
            {tour.description}
            </Typography>
        <Button
            sx={{
                fontSize: 12,
                color:"#faf5f5",
                
                mt: 1,
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                transition: "all 0.3s ease",
                "&:hover .arrow": {
                transform: "translateX(5px)",
                },
            }}
            >
            Подробнее <span className="arrow" style={{ display: "inline-block", transition: "transform 0.3s" }}>→</span>
        </Button>

      </CardContent>
    </Card>
  );
};

export default TourCard;
