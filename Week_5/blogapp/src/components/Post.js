function Post({ post }) {
  return (
    <article className="post-card">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  );
}

export default Post;
