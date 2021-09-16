import './singlePost.css';
import axios from 'axios';
import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Context } from '../../context/Context';

// SinglePost -> Page
export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const publicFolder = 'http://localhost:8080/images/';
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const [isUpdate, setUpdate] = useState(false);
  const [image, setImage] = useState();
  const { user } = useContext(Context);
  useEffect(() => {
    const getPost = async () => {
      const response = await axios(`/post/${path}`);
      setPost(response.data);
      setTitle(response.data.title);
      setDesc(response.data.description);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      const response = await axios.delete('/post/' + path, {
        data: { username: user.username },
      });
      window.location.replace('/');
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdate = async () => {
    const updatedPost = {
      title: title,
      description: desc,
      username: user.username,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      updatedPost.photo = filename;
      try {
        await axios.post('/upload', data);
      } catch (error) {}
    }

    try {
      const response = await axios.put('/post/' + path, updatedPost);
      setUpdate(false);
      window.location.reload();
      console.log('update:', response);
    } catch (error) {}
  };

  // const clearImage = (e) => {
  //   // console.log(imgRef.current.src);
  //   // delete ref
  //   setFile(e.target.files[0]);
  // };

  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        {post.photo && (
          <img
            className='singlePostImg'
            src={publicFolder + post.photo}
            // style={{ display: !image ?? 'none' }}
            alt=''
          />
        )}

        {isUpdate ? (
          <>
            {file && <img src={URL.createObjectURL(file)} alt=''></img>}
            <label htmlFor='fileInput'>
              <i className='writeIcon fas fa-plus'></i>
            </label>
            <input
              type='file'
              id='fileInput'
              style={{ display: 'none' }}
              onChange={(e) => setFile(e.target.files[0])}
            />

            <input
              className='singlePostTitleInput'
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </>
        ) : (
          <h1
            style={{ textTransform: 'capitalize' }}
            className='singlePostTitle'
          >
            {post.title}
            {post.username === user?.username && (
              <div className='singlePostEdit'>
                <i
                  className='singlePostIcon fas fa-edit'
                  onClick={() => setUpdate(true)}
                ></i>
                <i
                  className='singlePostIcon fas fa-trash'
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className='singlePostInfo'>
          <Link className='link' to={`/?user=${post.username}`}>
            <span className='singlePostAuthor'>
              Author: <b>{post.username}</b>
            </span>
          </Link>
          <span className='singlePostDate'>
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {isUpdate ? (
          <textarea
            className='singlePostDescInput'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className='singlePostDesc'>{post.description}</p>
        )}
        {isUpdate ? (
          <button className='singlePostButton' onClick={handleUpdate}>
            Update
          </button>
        ) : null}
      </div>
    </div>
  );
}
