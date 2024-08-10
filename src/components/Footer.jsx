import React from "react";
import { Box, Typography, Link, Grid, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#1a1a1a",
        color: "#f5f5f5",
        padding: "40px 20px",
        marginTop: "50px",
        textAlign: "center",
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          "@media (max-width: 600px)": {
            flexDirection: "column",
            textAlign: "center",
          },
        }}
      >
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2">
            We are committed to connecting people around the world through our
            social media platform.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2">
            Reach out to us anytime at{" "}
            <Link href="mailto:support@socialmediaapp.com" color="inherit">
              support@socialmediaapp.com
            </Link>
            .
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton href="#" sx={{ color: "#f5f5f5" }}>
              <Facebook />
            </IconButton>
            <IconButton href="#" sx={{ color: "#f5f5f5" }}>
              <Twitter />
            </IconButton>
            <IconButton href="#" sx={{ color: "#f5f5f5" }}>
              <Instagram />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Typography
        variant="body2"
        sx={{
          marginTop: "20px",
          fontSize: "0.875rem",
          borderTop: "1px solid #333",
          paddingTop: "20px",
          "@media (min-width: 600px)": {
            fontSize: "1rem",
          },
        }}
      >
        &copy; {new Date().getFullYear()} Your Social Media App. All rights
        reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
