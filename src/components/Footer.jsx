import React from "react";
import { Box, Typography, Link, Stack, Button} from "@mui/material";
import telegram from "../assets/telegram.svg";
import vk from "../assets/vk.svg";
import { Link as RouterLink, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const urls = [
                "https://t.me/daryareine",
                "https://vk.com/ks.daria",
              ]
  return (
    <Box
      component="footer"
      sx={{
        px: { xs: 3, md: 8, lg: 12, xl: 16 },
        pt: 8,
        w: "100%",
        bgcolor:"#b4aeae",
        
      }}
    >
      {/* Верхняя часть */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 10,
          borderBottom: "1px solid rgba(57, 57, 58, 0.3)",
          pb: 6,
        }}
      >
       
        <Box sx={{ flex: 1, display: "flex", gap: { xs: 3, md: 12 }, mt: { xs: 2, md: 0 }, flexWrap: "wrap" }}>
          <Typography sx={{ mt: 6, fontSize: "12", lineHeight: 1.5 }}>
            Откройте для себя самые необычные места для проживания в мире:
             от бутик-отелей до роскошных вилл и частных островов.
          </Typography>
        </Box>
        

        {/* Правая часть с ссылками */}
        <Box sx={{ flex: 1, display: "flex", gap: { xs: 6, md: 20 }, mt: { xs: 4, md: 0 }, flexWrap: "wrap" }}>
          <Box>
            <Typography sx={{ fontWeight: 600, mb: 2, color: "gray.800" }}>Company</Typography>
            <Stack spacing={1}>
                <Link
                    component={RouterLink}   
                    to="/"                    
                    underline="none"
                    color="inherit"
                    onClick={() => window.scrollTo(0, 0)} 
                >
                  Home
                </Link>
                <Link component={RouterLink} to="/about" underline="none" color="inherit">
                  About us
                </Link>
                <Link component={RouterLink} to="/contact" underline="none" color="inherit">
                  Contact us
                </Link>
                <Link component={RouterLink} to="/privacy" underline="none" color="inherit">
                  Privacy policy
                </Link>
              </Stack>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: 600, mb: 2, color: "gray.800" }}>Get in touch</Typography>
            <Stack spacing={1} sx={{ fontSize: "0.875rem" }}>
              <Typography>+7 (905) 135-50-82</Typography>
              <Typography>dariaroi@yandex.ru</Typography>
            </Stack>
                  <Box 
            sx={{
                display: "flex",        // размещаем в строку
                gap: 2,                 // промежуток между кнопками
                mt: 4,  // отступ сверху для мобильной версии
                alignItems: "center",   // выравниваем по центру по вертикали
            }}
            >
          
            {[telegram, vk].map((icon, index) => (
              
              <Button
                key={index}
                variant="contained"
                sx={{
                  display: "flex",
                  
                  bgcolor: "#5e5555",
                  p: 1,
                  minWidth: 48,
                  minHeight: 48,
                  borderRadius: 2,
                  
                  "&:hover": { bgcolor: "#322424" },
                }}
                onClick={()=>window.open(urls[index],"_blank")}
              >
                <Box component="img" src={icon} width={24} height={24} />
                
              </Button>
            ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Нижняя часть */}
      
      <Typography
        sx={{
          pt: 4,
          textAlign: "center",
          fontSize: { xs: "0.75rem", md: "0.875rem" },
          pb: 5,
          
        }}
      >
        Copyright 2026 ©{" "}
        <Link target="_blank" rel="noopener" underline="hover">
          TourVia
        </Link>
        . All Right Reserved.
      </Typography>
      
    </Box>
  );
}
