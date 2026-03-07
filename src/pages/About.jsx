import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";

import ShieldIcon from "@mui/icons-material/Shield";
import PublicIcon from "@mui/icons-material/Public";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

export default function About() {
  const reasons = [
    {
      icon: <ShieldIcon fontSize="large" />,
      title: "Безопасность прежде всего",
      description:
        "Все объекты проходят тщательную проверку. Ваши данные защищены современными системами шифрования.",
    },
    {
      icon: <PublicIcon fontSize="large" />,
      title: "Мировое покрытие",
      description:
        "Более 150 стран, 10,000+ проверенных объектов.",
    },
    {
      icon: <TrendingUpIcon fontSize="large" />,
      title: "Лучшие цены",
      description:
        "Гарантия лучшей цены. Если найдете дешевле — вернем разницу.",
    },
    {
      icon: <AccessTimeIcon fontSize="large" />,
      title: "Поддержка 24/7",
      description:
        "Наша команда всегда на связи.",
    },
    {
      icon: <FavoriteIcon fontSize="large" />,
      title: "Персональный подход",
      description:
        "Рекомендации на основе ваших предпочтений.",
    },
    {
      icon: <EmojiEventsIcon fontSize="large" />,
      title: "Программа лояльности",
      description:
        "Копите баллы и получайте бесплатные ночи.",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Объектов", icon: <PublicIcon /> },
    { number: "150+", label: "Стран", icon: <StarIcon /> },
    { number: "500K+", label: "Клиентов", icon: <PeopleIcon /> },
    { number: "4.9", label: "Рейтинг", icon: <EmojiEventsIcon /> },
  ];

  const features = [
    {
      icon: <SmartphoneIcon />,
      title: "Удобное приложение",
      description: "Бронируйте жилье в два клика",
    },
    {
      icon: <CreditCardIcon />,
      title: "Гибкая оплата",
      description: "Рассрочка и кешбэк",
    },
    {
      icon: <CheckCircleIcon />,
      title: "Мгновенное подтверждение",
      description: "Подтверждение за секунды",
    },
    {
      icon: <HeadsetMicIcon />,
      title: "Поддержка на русском",
      description: "Операторы говорят на вашем языке",
    },
  ];

  return (
    <Box sx={{ bgcolor:"rgba(27, 20, 20, 0.8)", color: "#ede8e8" }}>
      
      {/* HERO */}
      <Box
        sx={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" fontWeight={700} mb={3}>
              Почему именно мы?
            </Typography>
            <Typography variant="h6" color="gray">
              TourVia — ваш надежный партнер в мире путешествий
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* STATS */}
     <Box sx={{ py: 10, px: 4 }}>
        <Box
            sx={{
            display: "grid",
            gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
            },
            gap: 4,
            }}
        >
        {stats.map((stat, index) => (
            <Card
                key={index}
                sx={{
                minHeight: 180,
                bgcolor: "#dedbdb",
                textAlign: "center",
                borderRadius: 3,
                display: "flex",
                }}
            >
            <CardContent
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}
            >
                <Box mb={2}>{stat.icon}</Box>
                <Typography variant="h4" fontWeight={700}>
                    {stat.number}
                </Typography>
                <Typography color="gray">{stat.label}</Typography>
                </CardContent>
            </Card>
            ))}
        </Box>
    </Box>
      {/* REASONS */}
     <Box sx={{ py: 10, px: 4 }}>
            <Typography variant="h4" textAlign="center" mb={6} fontWeight={700}>
                Шесть причин выбрать TourVia
            </Typography>

            <Box
                sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                },
                gap: 4,
                }}
            >
                {reasons.map((reason, index) => (
                <Card
                    key={index}
                    sx={{
                    height: "100%",
                    minHeight: 300,
                    bgcolor: "#dedbdb",
                    color: "#282729",
                    borderRadius: 4,
                    display: "flex",
                    flexDirection: "column",
                    }}
                >
                    <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                        p: 4,
                    }}
                    >
                    <Box
                        sx={{
                        width: 60,
                        height: 60,
                        borderRadius: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 3,
                        background:
                            "linear-gradient(135deg, #1976d2, #cdc6ce)",
                        }}
                    >
                        {reason.icon}
                    </Box>

                    <Typography variant="h6" fontWeight={600} mb={2}>
                        {reason.title}
                    </Typography>

                    <Typography sx={{ color: "gray", flexGrow: 1 }}>
                        {reason.description}
                    </Typography>
                    </CardContent>
                </Card>
                ))}
            </Box>
        </Box>
        {/* FEATURES */}
        <Box sx={{ py: 10, px: 4 }}>
            <Typography variant="h4" textAlign="center" mb={6} fontWeight={700}>
                Дополнительные преимущества
            </Typography>
            <Box
                sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                    lg: "repeat(4, 1fr)",
                },
                gap: 4,
                }}
            >
                {features.map((feature, index) => (
                <Card
                    key={index}
                    sx={{
                    minHeight: 220,
                    bgcolor: "#dedbdb",
                    borderRadius: 3,
                    display: "flex",
                    }}
                >
                    <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        flexGrow: 1,
                    }}
                    >
                    <Box mb={2}>{feature.icon}</Box>
                    <Typography variant="h6" fontWeight={600} mb={1}>
                        {feature.title}
                    </Typography>
                    <Typography color="gray">
                        {feature.description}
                    </Typography>
                    </CardContent>
                </Card>
                ))}
            </Box>
        </Box>

      {/* CTA */}
      <Box sx={{ py: 10, textAlign: "center" }}>
        <motion.div whileHover={{ scale: 1.03 }}>
          <Box
            sx={{
              maxWidth: 600,
              mx: "auto",
              p: 6,
              borderRadius: 4,
              background:
                "linear-gradient(90deg, #1976d2, #9c27b0)",
            }}
          >
            <Typography variant="h4" fontWeight={700} mb={3}>
              Готовы начать путешествие?
            </Typography>
            <Typography mb={4}>
              Присоединяйтесь к 500,000+ довольных путешественников
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#fff",
                color: "#000",
                "&:hover": { bgcolor: "#f5f5f5" },
              }}
            >
              Начать поиск жилья
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}