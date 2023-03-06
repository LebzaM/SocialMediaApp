import React, {useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {styled} from "@mui/material"
import Avatar from '@mui/material/Avatar';
import { TextField} from "@mui/material";
import { ButtonGroup} from "@mui/material";
import { Stack, createTheme, ThemeProvider } from "@mui/material";
import {
    
    DateRange,
    EmojiEmotions,
    Image,
    PersonAdd,
    VideoCameraBack,
  } from "@mui/icons-material";


const StyledModal =styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });


const Add = () => {
    const [open, setOpen] = useState(false)
    const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
    <Tooltip title="Post" onClick={(e)=>setOpen(true)}sx={{position: "fixed", bottom: 20,left: { xs: "calc(50% - 25px)", md: 30 },}}>
      <Fab color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </Tooltip>

     
      <StyledModal
        open={open}
        onClose={(e)=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}>
            <Typography variat="h6" color='gray' textAlign="center"> Create Post

            </Typography>
            <UserBox  onClick={(e)=>setOpen(true)}>
            <Avatar sx={{width:30, height:30}} alt="Profile picture" src="" />
            <Typography variant="span">Lebza</Typography>
            </UserBox>

            <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />

          <Stack direction="row" gap={1} mt={2}>
          <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />

          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button color='secondary'>Post</Button>
            <Button sx={{ width: "100px" }} color='secondary'>
              <DateRange />
            </Button>
          </ButtonGroup>
          
        </Box>
      </StyledModal>
      </Box>
      </ThemeProvider>
    
  )
}

export default Add