import React, { useState, useEffect, Fragment } from "react";
import { Link, useParams, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
const DeletePost = ({ history }) => {
  let { id } = useParams();
  let [post, setPost] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then(result => {
        console.log(result.data);
        setPost(result.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  let RemovePost = e => {
    axios
      .delete(`http://localhost:3000/posts/${id}`)
      .then(_ => {
        toast.info("successfully post deleted....");
        history.push("/fetch-post");
      })
      .catch(err => console.log(err));
  };

  console.log(post);
  return (
    <div className="container my-4">
      {post === undefined ? (
        "no title"
      ) : (
        <Fragment>
          <h4 className="h4 font-weight-bold text-uppercase text-secondary my-2">
            {post.title}
          </h4>
          <Link to="/fetch-post" className="btn btn-secondary">
            go back
          </Link>
          <button className="btn btn-danger float-right" onClick={RemovePost}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </Fragment>
      )}
    </div>
  );
};

export default withRouter(DeletePost);
