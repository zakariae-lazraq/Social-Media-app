import React from "react";
import Post from "./Post";
import { Box } from "@mui/material";

const postsData = [
  {
    postImg:
      "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    avatarImg: "https://randomuser.me/api/portraits/men/32.jpg",
    postDescription:
      "A stunning sunrise over the mountains, with vibrant colors illuminating the landscape.",
    userName: "John Doe",
    date: "July 21, 2023",
  },
  {
    postImg:
      "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    avatarImg: "https://randomuser.me/api/portraits/women/65.jpg",
    postDescription:
      "City skyline at night, with lights reflecting off the water and a calm, peaceful atmosphere.",
    userName: "Jane Smith",
    date: "August 3, 2023",
  },
  {
    postImg:
      "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    avatarImg: "https://randomuser.me/api/portraits/men/44.jpg",
    postDescription:
      "A tranquil autumn forest, with leaves in shades of orange and gold carpeting the ground.",
    userName: "Emily Johnson",
    date: "October 10, 2023",
  },
];

const Feed = () => {
  return (
    <Box >
      {postsData.map((post, index) => (
        <Post
          key={index}
          postImg={post.postImg}
          postDescription={post.postDescription}
          userName={post.userName}
          date={post.date}
          avatarImg={post.avatarImg}
        />
      ))}
    </Box>
  );
};

export default Feed;
