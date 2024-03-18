import React from "react";
import { Typography, Link, Box, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", p: 2 }}>
      <Typography variant="body1" align="center">
        © {currentYear} DeduDash. All rights reserved.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        <IconButton
          component={Link}
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton
          component={Link}
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton
          component={Link}
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
