import React, { useMemo } from "react";
import "../Styles/Action.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TableHeader, Pagination1, Search } from "../Datatable/Alloperation";
import { deletepoststart, loadPostsStart } from "../redux/actions";
const Data = () => {
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => setData(response.data));
  // }, []);
  // const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.data);
  useEffect(() => {
    if (posts.length == 0) {
      dispatch(loadPostsStart());
      console.log(posts);
    }
  }, []);
  const [TotalItems, setTotalItems] = useState(0);
  const [CurrentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;
  const [sorting, setSorting] = useState({ field: "", order: "" });

  const headers = [
    { name: "Userid", field: "userId", sortable: false },
    { name: "Id", field: "id", sortable: false },
    { name: "Title", field: "title", sortable: true },
    { name: "Description", field: "body", sortable: true },
  ];
  const [search, setSearch] = useState("");
  const postsdata = useMemo(() => {
    let computedposts = posts;
    if (search) {
      computedposts = computedposts.filter(
        (post) =>
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.body.toLowerCase().includes(search.toLowerCase())
      );
    }
    setTotalItems(computedposts.length);

    ///sorting posts

    if (sorting.field) {
      const reversed = sorting.order === "asc" ? 1 : -1;
      computedposts = computedposts.sort(
        (a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field])
      );
    }

    //Currentpage
    return computedposts.slice(
      (CurrentPage - 1) * ITEMS_PER_PAGE,
      (CurrentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [posts, CurrentPage, search, sorting]);

  const handleDelete = (id, posts) => {
    if (window.confirm("Do you really want to delete the user")) {
      let updatedPost = posts;
      updatedPost["isDeleted"] = true;
      updatedPost["updatedOn"] = new Date();
      dispatch(deletepoststart(id, updatedPost));

      alert("The user deleted successfully");
    }
  };

  return (
    <>
      <div className="container">
        <div className=" row w-100" style={{ marginTop: "50px" }}>
          <div className="col mb-3 col-12 text-center">
            <div className="row">
              <div className="col-md-6 ">
                <Pagination1
                  Total={TotalItems}
                  ItemsPerPage={ITEMS_PER_PAGE}
                  CurrentPage={CurrentPage}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </div>
              <div className="col-md-6 d-flex flex-row-reverse">
                <Search
                  onSearch={(value) => {
                    setSearch(value);
                    setCurrentPage(1);
                  }}
                />
              </div>
              <table className="table table-bordered mt-4">
                <TableHeader
                  headers={headers}
                  onSorting={(field, order) => setSorting({ field, order })}
                />
                <tbody>
                  {postsdata &&
                    postsdata.map((posts) => {
                      if (!posts?.isDeleted) {
                        return (
                          <tr>
                            <td>{posts.userId}</td>
                            <td>{posts.id}</td>
                            <td>{posts.title}</td>
                            <td>{posts.body}</td>
                            <td>
                              <div className="d-flex pt-3 ">
                                <button
                                  type="button"
                                  className="m-1 btn btn-light"
                                  onClick={() => handleDelete(posts.id, posts)}
                                >
                                  <i
                                    className="fa fa-trash"
                                    style={{ color: "red" }}
                                  ></i>
                                </button>
                                <Link to={`/addpost/${posts.id}`}>
                                  <button
                                    type="button"
                                    className="m-1 btn btn-light"
                                  >
                                    <i class="fa fa-pen"></i>
                                  </button>
                                </Link>
                                <button
                                  type="button"
                                  className="m-1 btn btn-light"
                                >
                                  <i className="fa fa-eye"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      }
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Data;
