import React, { useState } from "react";
import Navbar from "./components/Navbar";
import RightBar from "./components/RightBar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import { Box, createTheme, Stack } from "@mui/material";
import Add from "./components/Add";
import { ThemeProvider } from "@emotion/react";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <Stack direction="row" spacing={2}>
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
