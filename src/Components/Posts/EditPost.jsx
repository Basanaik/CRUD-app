import React, { useState, useEffect } from "react";
import { useParams, withRouter } from "react-router-dom";
import { toast } from "react-toastify";

import axios from "axios";
const EditPost = ({ history }) => {
  const { id } = useParams();
  let [post, setPost] = useState({
    title: "",
    author: "",
    details: "",
    loading: false,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/posts/${id}`)
      .then(result => {
        setPost({
          id: result.data.id,
          title: result.data.title,
          author: result.data.author,
          details: result.data.details,
        });
      })
      .catch(err => console.log(err));
  }, [id]);
  let handleChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/posts/${id}`, post)
      .then(result => {
        toast.success("successfully post updated");
        history.push("/fetch-post");
      })
      .catch(err => console.log(err));
  };
  let { title, author, details, loading } = post;
  return (
    <section id="PostsBlock" className="col-md-4 card my-4 mx-auto">
      <article className="card-body">
        <h2 className="display-5 font-weight-bold text-dark text-center text-uppercase">
          Update Post
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              value={title}
              onChange={handleChange}
              placeholder="enter post title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              className="form-control"
              name="author"
              id="author"
              value={author}
              onChange={handleChange}
              placeholder="enter post author"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="details">details</label>
            <textarea
              name="details"
              id="details"
              cols="30"
              rows="10"
              className="form-control"
              value={details}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-success btn-block my-2">
              {loading ? "loading..." : "update Post"}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default withRouter(EditPost);
