import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const response = await axios(`/post/${path}`);
      setPost(response.data);
    };
    getPost();
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={post.photo} alt="" />
        )}

        <h1
          style={{ "text-transform": "capitalize" }}
          className="singlePostTitle"
        >
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fas fa-edit"></i>
            <i className="singlePostIcon fas fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <Link className="link" to={`/?user=${post.username}`}>
            <span className="singlePostAuthor">
              Author: <b>{post.username}</b>
            </span>
          </Link>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDesc">{post.description}</p>
      </div>
    </div>
  );
}
