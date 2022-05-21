import axios from "axios";
import React, { useEffect, useState } from "react";
/* 
const baseURL = "https://jsonplaceholder.typicode.com/posts/1"; */
const baseURL = "https://randomuser.me/api/?gender=male";

export default function ImageUser() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response.data.results);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <img src={post.results[0].picture.large}/>
    </div>
  );
}