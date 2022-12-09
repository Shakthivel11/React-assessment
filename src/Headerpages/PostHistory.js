import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PostHistory = () => {
//   const dispatch = useDispatch();
  const { historyposts } = useSelector((state) => {
    console.log("current data", state.history);
    return state.history;
  });
  console.log("In history Posts", historyposts);

  if (historyposts.length > 0) {
    return (
      <div className="container-fluid">
        <div className="row ">
            <table className="table table-bordered">
              <thead>
                <tr className="table-striped">
                  <td>UserId</td>
                  <td>Id</td>
                  <td>Title</td>
                  <td>Body</td>
                  <td>Actions</td>
                  <td>Date</td>
                </tr>
              </thead>

              <tbody>
                {historyposts &&
                 [...historyposts] .reverse().map((historyposts, i) => {
                    return (
                      <tr key={i}>
                        <td>{historyposts.userId}</td>
                        <td>{historyposts.id}</td>
                        <td>{historyposts.title}</td>
                        <td>{historyposts.body}</td>
                        <td>{historyposts.action}</td>
                        <td>{historyposts.date.toString()}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
        
        </div>
      </div>
    );
  } else {
    return <h1>No updates available</h1>;
  }
};

export default PostHistory;
