import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import {Box, Container, Stack , createTheme, ThemeProvider} from "@mui/material"
import Add from './components/Add'
import React, {useState} from 'react'
function App() {

  const [mode, setMode] = useState("light")
  const darkTheme = createTheme ({
    palette:{
      mode: mode,
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
    <Navbar/>
    <Stack direction="row" spacing={2} justifyContent="space-between">
   <Sidebar setMode={setMode} mode={mode}/>
   <Feed/>
   <Rightbar/>
    
    </Stack>
    <Add/>
    </Box>
    </ThemeProvider>
    
  );
}

export default App;
