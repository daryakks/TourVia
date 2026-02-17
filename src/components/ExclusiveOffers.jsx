import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TourCard from "./TourCard";
import { exclusiveToursData } from "../assets/exclusiveToursData";

const ExclusiveOffers = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 3, md: 10},
        bgcolor: "rgba(27, 20, 20, 0.8)",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "flex-end" },
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          mb: 6,
        }}
      >
        {/* Text */}
        <Box sx={{ maxWidth: 700 }}>
          <Typography
            sx={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 700,
              color: "#ede8e8",
              fontSize: { xs: 32, md: 40 },
              mb: 2,
            }}
          >
            Эксклюзивные туры
          </Typography>

          <Typography
            sx={{
              fontFamily: "Lora, serif",
              fontSize: { xs: 14, md: 19 },
              color: "#ede8e8",
              lineHeight: 1.5,
            }}
          >
            Выбирайте лучшие туры по выгодной цене — ограниченные предложения
            для вашего незабываемого отдыха.
          </Typography>
        </Box>

        {/* Button */}
        <Button
          onClick={() => {
            navigate("/tours");
            window.scrollTo(0, 0);
          }}
          sx={{
            px: 4,
            py: 1.5,
            fontSize: 14,
            fontWeight: 500,
            border: "1px solid #2d2828",
            textTransform: "none",
            borderRadius: 2,
            color: "#fff",
            bgcolor: "#858489",
            "&:hover": { bgcolor: "#3c3141" },
          }}
        >
          Показать все туры →
        </Button>
      </Box>

      {/* Grid */}
      <Grid container spacing={3} sx={{display:"flex", justifyContent:"space-between"}}>
        {exclusiveToursData.map((tour) => (
          <Grid item xs={12} sm={6} md={4} key={tour.id}>
            <TourCard tour={tour} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExclusiveOffers;
