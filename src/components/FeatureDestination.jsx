import React from "react";
import { Box, Typography } from "@mui/material";
import HotelCard from "./HotelCard";
import { roomsDummyData } from "../assets/roomsDummyData";

const FeatureDestination = () => {
  const [stopScroll, setStopScroll] = React.useState(false);

  return (
    <Box
      sx={{
        py: 10,
        bgcolor: "rgba(27, 20, 20, 0.8)",
        overflow: "hidden",
      }}
    >
      {/* Заголовок */}
      <Box textAlign="center" mb={6}>
        <Typography
          sx={{
            fontFamily: "Playfair",
            fontSize: 40,
            color: "#ede8e8",
          }}
        >
          Избранные направления
        </Typography>
      </Box>

      {/* Анимация */}
      <Box
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
        sx={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Градиент слева */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: 100,
            zIndex: 2,
            pointerEvents: "none",
            background:
              "linear-gradient(to right, rgba(27,20,20,1), rgba(27,20,20,0))",
          }}
        />

        {/* Бегущая строка */}
        <Box
          sx={{
            display: "flex",
            width: "max-content",
            animation: "marquee 40s linear infinite",
            animationPlayState: stopScroll ? "paused" : "running",
          }}
        >
          {[...roomsDummyData, ...roomsDummyData].map((room, index) => (
            <Box key={index} sx={{ width: 300, mx: 2 }}>
              <HotelCard room={room} />
            </Box>
          ))}
        </Box>

        {/* Градиент справа */}
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: 300,
            zIndex: 2,
            pointerEvents: "none",
            background:
              "linear-gradient(to left, rgba(27,20,20,1), rgba(27,20,20,0))",
          }}
        />
      </Box>

      {/* keyframes */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default FeatureDestination;
