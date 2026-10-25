import { useGetAllPostsQuery } from "../../api/base-api";
import PostCard from "./PostCard";
import "./PostCardList.css";

export default function PostCardList() {
  const { data: posts, isLoading, isError } = useGetAllPostsQuery();

  if (isLoading) {
    return <div className="post-list-status loading">Loading posts...</div>;
  }

  if (isError) {
    return (
      <div className="post-list-status error">
        Error loading posts
      </div>
    );
  }

  return (
    <div className="post-list">
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}