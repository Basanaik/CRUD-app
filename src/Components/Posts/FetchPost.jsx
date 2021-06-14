import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const FetchPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then(posts => {
        setPosts(posts.data);
      })
      .catch(err => console.log(err));
  }, []);

  let PostsData = posts.map(post => {
    return (
      <Fragment key={post.id}>
        <tr>
          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>{post.details}</td>
          <td>{post.author}</td>
          <td>
            <div className="btn-group">
              <Link
                to={`/edit-post/${post.id}`}
                className="btn btn-outline-primary"
              >
                <i className="fas fa-pen-square"></i>
              </Link>
              <Link
                to={`/details-post${post.id}`}
                className="btn btn-outline-secondary"
              >
                <i className="fas fa-eye"></i>
              </Link>
              <Link
                to={`/delete-post/${post.id}`}
                className="btn btn-outline-danger"
              >
                <i className="fa fa-trash"></i>
              </Link>
            </div>
          </td>
        </tr>
      </Fragment>
    );
  });
  return (
    <div className="container my-4">
      <h2 className="h5 font-weight-bold text-uppercase text-primary pb-2 my-2">
        List of Posts
      </h2>
      <table className="table table-stripped table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Details</th>
            <th>Author</th>
            <th>Extra</th>
          </tr>
        </thead>
        <tbody>{PostsData}</tbody>
      </table>
    </div>
  );
};

export default FetchPost;
