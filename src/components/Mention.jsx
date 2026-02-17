import React from "react";
import { Box, Typography, Avatar, Card, CardContent } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { mentionsData } from "../assets/mentionData";

const Star = ({ filled }) =>
  filled ? (
    <StarIcon sx={{ color: "#FFB800", fontSize: 16 }} />
  ) : (
    <StarBorderIcon sx={{ color: "#FFB800", fontSize: 16 }} />
  );

const MentionCard = ({ mention }) => {
  return (
    <Card
      sx={{
        minWidth: 150,
        maxWidth: 350,
        borderRadius: 3,
        bgcolor:"#ede8e8",
        flexShrink: 0,
        transition: "0.3s",
        "&:hover": { transform: "translateY(-6px)" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 220, // фиксированная высота
      }}
    >
      <CardContent sx={{ p: 2 }}>
        <Box display="flex" gap={2} alignItems="center">
          <Avatar
            src={mention.image}
            alt={mention.name}
            sx={{ width: 48, height: 48 }}
          />
          <Box>
            <Typography fontWeight={600}>{mention.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {mention.address}
            </Typography>
          </Box>
        </Box>

        <Box display="flex" gap={0.5} mt={1}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} filled={mention.rating > index} />
          ))}
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt: 1.5,
            lineHeight: 1.4,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 4, // обрезаем текст до 4 строк
            WebkitBoxOrient: "vertical",
          }}
        >
          "{mention.review}"
        </Typography>
      </CardContent>
    </Card>
  );
};

const Mention = () => {
  const doubledData = [...mentionsData, ...mentionsData];

  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
        py: 10,
        bgcolor: "rgba(27, 20, 20, 0.8)",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 6,
          fontFamily: "'Cormorant Garamond', serif",
          color: "#ede8e8",
        }}
      >
        Наши отзывы о TourVia
      </Typography>

      {/* Градиенты по краям */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: 120,
          zIndex: 2,
          
        }}
      />
      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          height: "100%",
          width: 120,
          zIndex: 2,
          
        }}
      />

      {/* Анимация */}
      <Box
        sx={{
          display: "flex",
          width: "max-content",
          animation: "scroll 30s linear infinite",
          "@keyframes scroll": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" },
          },
        }}
      >
        {doubledData.map((mention, index) => (
          <Box key={index} sx={{ mx: 1 }}>
            <MentionCard mention={mention} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Mention;
