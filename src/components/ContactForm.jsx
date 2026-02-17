import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // предотвращаем перезагрузку страницы

    // здесь можно отправить данные на сервер или в почту
    console.log("Email:", email);
    console.log("Message:", message);

    // очищаем форму после отправки
    setEmail("");
    setMessage("");
    alert("Сообщение отправлено!");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        py: 16,
        px: { xs: 2, md: 6 },
        bgcolor: "rgba(27, 20, 20, 0.8)",
      }}
    >
      <Paper
        component="form"
        onSubmit={handleSubmit} // добавляем обработчик submit
        sx={{
          width: 400,
          p: { xs: 4, md: 6 },
          borderRadius: 3,
          bgcolor: "white",
          color: "gray.500",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            mb: 3,
            textAlign: "center",
            color: "gray.800",
          }}
        >
          Нужна помощь? Напиши нам
        </Typography>

        <TextField
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          required
          fullWidth
          size="small"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          id="msg"
          placeholder="Your Message..."
          required
          fullWidth
          size="small"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 1,
            py: 1.5,
            bgcolor: "#a08080",
            color: "#fff",
            "&:hover": { bgcolor: "indigo.600" },
            "&:active": { transform: "scale(0.95)" },
            transition: "all 0.2s",
          }}
        >
          Отправить
        </Button>
      </Paper>
    </Box>
  );
}
