import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, fugiat
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, fugiat
        officiis tempora nostrum animi quo modi minus odit! Modi, rerum
        asperiores! Ipsa quidem enim, cum ipsam quasi reiciendis sapiente vel.
        officiis tempora nostrum animi quo modi minus odit! Modi, rerum
        asperiores! Ipsa quidem enim, cum ipsam quasi reiciendis sapiente vel.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, fugiat
        officiis tempora nostrum animi quo modi minus odit! Modi, rerum
        asperiores! Ipsa quidem enim, cum ipsam quasi reiciendis sapiente vel.
      </p>
    </div>
  );
}
