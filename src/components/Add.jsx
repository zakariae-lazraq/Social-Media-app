import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

const Add = () => {
  const [isOpen, setIsOpen] = useState(false);

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: 2,
  });
  return (
    <>
      <Tooltip
        onClick={() => setIsOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"white"}
          p={3}
          borderRadius={5}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography variant="h6" color={"gray"} textAlign={"center"}>
            Create Post
          </Typography>

          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Typography>Zakariae Lazraq</Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%", mt: 2 }}
            multiline
            rows={3}
            placeholder="What's in your mind"
            variant="standard"
          ></TextField>
          <Stack direction={"row"} gap={1} margin="10px 0">
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="Basic button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: 100 }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default Add;
