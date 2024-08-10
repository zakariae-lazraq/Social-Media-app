import {
  ThumbUp,
  ThumbUpOffAlt,
  Comment,
  Bookmark,
  BookmarkBorder,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const Post = ({ postImg, postDescription, userName, date, avatarImg }) => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={<Avatar src={avatarImg} />}
        action={
          <IconButton aria-label="bookmark">
            <Checkbox
              icon={<BookmarkBorder />}
              checkedIcon={<Bookmark sx={{ color: "blue" }} />}
            />
          </IconButton>
        }
        title={userName}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="400"
        image={postImg}
        alt="Post Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {postDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like post">
          <Checkbox
            icon={<ThumbUpOffAlt />}
            checkedIcon={<ThumbUp sx={{ color: "blue" }} />}
          />
        </IconButton>
        <IconButton aria-label="comment">
          <Comment />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
