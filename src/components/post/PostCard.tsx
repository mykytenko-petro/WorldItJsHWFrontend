import type { Post } from "../../types/post";
import "./PostCard.css";

interface PostCardProps {
    post: Post;
}

export default function PostCard(props: PostCardProps) {
    const {
        title,
        content,
        author,
        category
    } = props.post;

    return (
        <div className="post-card">
            <div className="post-header">
                <span className="post-title">{title}</span>
                <span className="post-author">{author}</span>
                <span className="post-category">[{category}]</span>
            </div>
            <p className="post-content">{content}</p>
        </div>
    );
}