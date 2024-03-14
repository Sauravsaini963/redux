import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, deletePost, getAllPosts, getSinglePost } from '../../store/posts/postSlice';
import { useNavigate } from 'react-router-dom';
import UpdatePost from './updatePost';

const Home = () => {
  const [formData, setFormData] = useState({firstName:"", email:""})
  const [editData, setEditData] = useState({});
  const [open, setOpen] = React.useState(false);

  const handleChange = (e) => {
  e.preventDefault();
  const {name, value} = e.target;
  setFormData((prev)=>({...prev, [name]:value}))
  }
const dispatch = useDispatch();
const navigate = useNavigate();
    // useEffect(()=>{
    // dispatch(getAllPosts());
    // dispatch(getSinglePost(3));
    // }, []);

    const allPosts = useSelector((state)=>state.posts.data);
    const singlePost = useSelector((state)=>state.posts.singlepost);

    console.log("all postss ", allPosts);
    console.log("single post ", singlePost);

    const logout = () => {
      localStorage.removeItem("userToken");
      navigate("/login");
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      dispatch(createPost({name:formData.firstName, email:formData.email}));
      setFormData({firstName:"", email:""});
    }

    const handleDelete = (id) =>{
      dispatch(deletePost(id));
    }

    const handleEdit = (item) =>{
      setOpen(true);
      setEditData(item);
    }

    console.log("allPostsallPosts ", allPosts);
  return (
    <div>Home
      <button onClick={logout}>Logout</button>
      <h1>Add Data</h1>
      <form onSubmit={handleSubmit}>
      <input name ="firstName" value={formData.firstName} onChange={handleChange} />
      <input name ="email" value={formData.email} onChange={handleChange} />
      <button type="submit">Submit</button>
      </form>
      <table>
            <thead>
              <th>name</th>
              <th>email</th>
            </thead>
      {allPosts?.data && allPosts?.data?.map((item, index)=>{
        return (
          <tbody>
         <tr key={index}>
          <td>{item.firstName}</td>
          <td>{item.email}</td>
          <button onClick={()=>{handleEdit(item)}}>edit</button>
          <button onClick={()=>handleDelete(item?._id)}>delete</button>
         </tr>
         </tbody>
        )
      })}
      </table>

      <UpdatePost open={open} setOpen={setOpen} editData={editData} />
    </div>
  )
}

export default Home