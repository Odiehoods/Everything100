import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { Link } from 'react-router-dom';

export default function NewsCard() {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
          const res = await fetch('/api/post/getPosts?category=latest');
          const data = await res.json();
          setPosts(data.posts);
        };
        fetchPosts();
      }, []);

  return (
    <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={`/archive?category=latest`}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              more
            </Link>
          </div>
        )}
      </div>
  )
}
