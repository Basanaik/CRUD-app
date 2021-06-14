import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";

const CreatePost = ({ history }) => {
  let [post, setPost] = useState({
    title: "",
    author: "",
    details: "",
    loading: false,
  });

  let handleChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  let handleSubmit = async e => {
    e.preventDefault();

    try {
      let postData = {
        title: post.title,
        author: post.author,
        details: post.details,
      };
      setPost({ loading: true });
      let BASE_URL = "http://localhost:3000";
      await axios.post(`${BASE_URL}/posts`, postData);
      history.push("/fetch-data");
      toast.success("successfully post created");
    } catch (err) {
      console.log(err);
    }

    setPost({ loading: false });
  };

  let { title, author, details, loading } = post;
  return (
    <section id="PostsBlock" className="col-md-4 card my-4 mx-auto">
      <article className="card-body">
        <h2 className="display-5 font-weight-bold text-dark text-center text-uppercase">
          Create Post
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
              {loading ? "loading..." : "Create Post"}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default withRouter(CreatePost);
