import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import BookIcon from "@mui/icons-material/Book";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Отель", to: "/rooms" },
  { label: "Впечатление", to: "/experience" },
  { label: "О нас", to: "/about" },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if(location.pathname !== '/'){
      setIsScrolled(true);
    }else{
      setIsScrolled(false);
    }
    setIsScrolled(prev => location.pathname !== '/' ? true : prev);
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: isScrolled ? "rgba(63, 59, 59, 0.7)" : "transparent",
          backdropFilter: isScrolled ? "blur(10px)" : "none",

        }}
      >
        <Toolbar
          sx={{
            height: 72,
            display: "flex",
            justifyContent: "space-between",
            px: { xs: 1, sm: 2 },
          }}
        >
          {/* Logo */}
          <Button component={Link} to="/">
            <img src={logo} alt="logo" style={{ height: 43 }} />
          </Button>

          {/* Desktop navigation */}
          <Box
            display={{ xs: "none", md: "flex" }}
            alignItems="center"
            gap={2}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Button
                  key={link.to}
                  component={Link}
                  to={link.to}
                  sx={{
                    color: "#fff",
                    borderRadius:"none",
                    textTransform: "none",
                    borderBottom: isActive 
                    ? "1.5px solid #ffffff" 
                    : "none",
                    
                  }}
                >
                  {link.label}
                </Button>
              );
            })}

            <Button
              variant="outlined"
              onClick={() => navigate("/owner")}
              sx={{ color: "#fff", borderColor: "#fff" }}
            >
              Dashboard
            </Button>
          </Box>

          {/* Desktop actions */}
          <Box display={{ xs: "none", md: "flex" }} alignItems="center" gap={2}>
            {user ? (
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="Мое путешествие"
                    labelIcon={<BookIcon fontSize="small" />}
                    onClick={() => navigate("my-booking")}
                  />
                </UserButton.MenuItems>
              </UserButton>
            ) : (
              <Button
                onClick={openSignIn}
                variant="contained"
                sx={{
                  bgcolor: "#000",
                  borderRadius: 999,
                  textTransform: "none",
                }}
              >
                Login
              </Button>
            )}
          </Box>

          {/* Mobile menu button */}
          <Box display={{ xs: "flex", md: "none" }}>
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: "#fff" }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { width: 260, bgcolor: "#5b6cf0", color: "#fff", p: 2 },
        }}
      >
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {navLinks.map((link) => (
            <ListItem
              key={link.to}
              component={Link}
              to={link.to}
              onClick={() => setDrawerOpen(false)}
               sx={{
                  height: 56,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.15)",
                    borderRadius: 2,
                  },
                }}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{
                  textAlign: "center",
                  fontSize: 18,
                  color: "#fff",
                  fontWeight: 500,
                }}
              />
            </ListItem>
          ))}
        </List>

        {user ? (
          <Button
            fullWidth
            variant="outlined"
            sx={{ mt: 2, color: "#fff", borderColor: "#fff" }}
            onClick={() => navigate("/owner")}
          >
            Dashboard
          </Button>
        ) : (
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2, bgcolor: "#000" }}
            onClick={openSignIn}
          >
            Login
          </Button>
        )}
      </Drawer>
    </>
  );
};

export default Header;
