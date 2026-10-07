import type { Post } from "../types/post";

export const posts: Post[] = [
    {
        id: 1,
        title: "Getting Started with Concurrency in Go",
        content: "Goroutines and channels make concurrent programming in Go lightweight and intuitive. Learn how to manage worker pools and communicate safely across routines.",
        author: "Alex Chen",
        category: "Go"
    },
    {
        id: 2,
        title: "Understanding Ownership and Borrowing in Rust",
        content: "Rust ensures memory safety without needing a garbage collector through its ownership model. Here is a deep dive into references, lifetimes, and the borrow checker.",
        author: "Elena Rostova",
        category: "Rust"
    },
    {
        id: 3,
        title: "Mastering Advanced Types in TypeScript",
        content: "Explore conditional types, template literal types, and mapped types to build expressive, rock-solid type safety in modern web applications.",
        author: "Marcus Lind",
        category: "TypeScript"
    },
    {
        id: 4,
        title: "Building Resilient Microservices with Go",
        content: "Why Go has become the industry standard for backend microservices: fast compilation, low memory footprint, and robust standard networking libraries.",
        author: "David Kim",
        category: "Go"
    },
    {
        id: 5,
        title: "Fearless Concurrency with Rust",
        content: "How the Rust compiler prevents data races at compile time with Send and Sync traits, giving you high performance without fear of undefined behavior.",
        author: "Sophia Martinez",
        category: "Rust"
    },
    {
        id: 6,
        title: "TypeScript Best Practices for React Developers",
        content: "Tips for typing React components, generics in custom hooks, and discriminating unions for handling complex state management cleanly.",
        author: "Sarah Jenkins",
        category: "TypeScript"
    }
];