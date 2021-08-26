import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://w.wallhaven.cc/full/x8/wallhaven-x8z9yo.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          Blog Post #1
          <div className="singlePostEdit">
            <i className="singlePostIcon fas fa-edit"></i>
            <i className="singlePostIcon fas fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Chris</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          blanditiis cupiditate dolor optio nisi dolorem qui molestiae,
          obcaecati fuga commodi. Numquam magni necessitatibus doloribus in
          dolorem alias, sed incidunt aut. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Aliquam, eos reiciendis? Deleniti
          aperiam, dignissimos consectetur maxime, sint temporibus ipsam quae
          vero placeat deserunt voluptas error tenetur perspiciatis inventore
          rem corrupti?
        </p>
      </div>
    </div>
  );
}
