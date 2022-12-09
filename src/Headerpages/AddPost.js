import React, { useState,useEffect} from "react";
import "../Styles/Addpost.css";
import { useNavigate,useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {
  addpost, updatepost
} from "../redux/actions";
const initialState = {
  userId: "",
  title: "",
  body: "",
};
function AddPost() {
  const [formValue, setFormValue] = useState(initialState);
  const { title, body, userId } = formValue;
  const {posts} = useSelector((state)=>state.data);
  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editMode,setEditMode]= useState(false);

  useEffect(()=>{
    if(id){
      setEditMode(true);
      const onepost = posts.find((item)=> item.id === Number(id));
      setFormValue({...onepost});
    }
    else{
      setEditMode(false);
      setFormValue({...initialState});
    }
  },[id]);
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(userId && title && body){
      if(!editMode){
        console.log("FormValue:",formValue);
       
        const id = posts[posts.length-1].id + 1;
        console.log("id",id);
        const userid=userId;
        dispatch(addpost({...formValue,id:id}));
        alert("Post added successfully");
        setTimeout(()=> navigate("/data"),500);

      }
      else{
        dispatch(updatepost(formValue));
        setEditMode(false);
        alert("Post added successfully");
        setTimeout(()=> navigate("/data"),500);
        
      }
    }
  };
  const onInputChange =(e)=>{
    setFormValue({...formValue,[e.target.name]: e.target.value});
  };
  return (
    <>
      <div className="container">
        <div className="row form1">
          <div>
            <form
            onSubmit={handleSubmit}
            >
              <p className="fs-2 fw-bold text-center">
             {!editMode ? "ADD POSTS" : "UPDATE POSTS"}
               </p>
              <div className="form-group">
                <br />
                <div className="form-group">
                  <label>UserId</label>
                  <input
                    value={userId || ""}
                    name="userId"
                    type="number"
                    className="form-control"
                    onChange={onInputChange}
                    required
                    placeholder="UserId"
                    validation="please enter the userid"
                    min="0"
                    style={{ marginTop: "10px" }}
                  />
                </div>

                <label style={{ marginTop: "30px" }}>Title</label>

                <input
                value={title || ""}
                name="title"

                  type="text"
                  className="form-control"
                  onChange={onInputChange}
                  required
                  validation="please enter the title"
              
                  placeholder="Title"
                  style={{ marginTop: "10px" }}
                />
              
              <br />
              
                <label>Body</label>
                <input
                  value={body || ""}
                  name="body"
                  type="text"
                  className="form-control"
                  onChange={onInputChange}
                  required
                  validation="please enter the body"
                  id="data"
                  placeholder="Body"
                  style={{ marginTop: "10px" }}
                />
              
              </div>
              <br />
              <div className="col-12">
                <button type="submit" className="btn btn-primary m-3">
                {!editMode ? "Add Post" : "Update Post"}
                </button>
                <button className="btn btn-primary"
                onClick={()=>navigate("/data")}>
                  Go back
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddPost;
