import { posts } from "../../data/post";
import PostCard from "./PostCard";
import "./PostCardList.css";

export default function PostCardList() {
    return (
        <div className="post-list">
            {posts.map((post) => {
                return (
                    <PostCard key={post.id} post={post} />
                );
            })}
        </div>
    );
}