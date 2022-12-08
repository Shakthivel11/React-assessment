import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./Header";
import Data from "../Headerpages/Data";
import Home from "../Headerpages/Home";
import AddPost from "../Headerpages/AddPost";
import Recentpost from "../Headerpages/Recentpost";
import PostHistory from "../Headerpages/PostHistory";

function Headerrouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/data" element={<Data />} />
        <Route path="/addpost" element={ <AddPost/>} />
        <Route path="/recentpost" element={<Recentpost/>} />
        <Route path="/posthistory" element={<PostHistory/>} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}
export default Headerrouter;
