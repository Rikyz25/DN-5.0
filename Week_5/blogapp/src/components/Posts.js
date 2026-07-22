import { Component } from "react";
import Post from "./Post";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: "",
    };
  }

  loadPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Unable to load posts right now.");
    }
    const posts = await response.json();
    this.setState({ posts: posts.slice(0, 10) });
  };

  componentDidMount() {
    this.loadPosts().catch(() => {
      this.setState({ error: "Something went wrong while loading posts." });
    });
  }

  componentDidCatch(error) {
    alert(error.message);
  }

  render() {
    const { posts, error } = this.state;

    return (
      <section className="blog-shell">
        <header className="page-head">
          <p className="eyebrow">Hands-on Lab 4</p>
          <h1>Latest posts</h1>
          <p className="summary">
            Posts are loaded after the component mounts, then rendered as a
            clean list of headings and paragraphs.
          </p>
        </header>

        {error ? (
          <p className="error">{error}</p>
        ) : (
          <div className="post-grid">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Posts;
