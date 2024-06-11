import { Button, Select, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PostCard from '../components/PostCard';
import { current } from '@reduxjs/toolkit';

export default function Search() {
  const [recentPosts, setRecentPosts] = useState(null);
  const [sidebarData, setSidebarData] = useState({
    searchTerm: '',
    sort: 'desc',
    category: 'uncategorized',
  });

  console.log(sidebarData);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
//   const [showMore, setShowMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    const sortFromUrl = urlParams.get('sort');
    const categoryFromUrl = urlParams.get('category');
    if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
      setSidebarData({
        ...sidebarData,
        searchTerm: searchTermFromUrl,
        sort: sortFromUrl,
        category: categoryFromUrl,
      });
    }

    const fetchPosts = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/post/getposts?${searchQuery}`);
      if (!res.ok) {
        setLoading(false);
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts);
        setLoading(false);
        if (data.posts.length === 3) {
          // setShowMore(true);
        } else {
          // setShowMore(false);
        }
      }
    };
    fetchPosts();
  }, [location.search]);

  const handleChange = (e) => {
    if (e.target.id === 'searchTerm') {
      setSidebarData({ ...sidebarData, searchTerm: e.target.value });
    }
    if (e.target.id === 'sort') {
      const order = e.target.value || 'desc';
      setSidebarData({ ...sidebarData, sort: order });
    }
    if (e.target.id === 'category') {
      const category = e.target.value || 'uncategorized';
      setSidebarData({ ...sidebarData, category });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', sidebarData.searchTerm);
    urlParams.set('sort', sidebarData.sort);
    urlParams.set('category', sidebarData.category);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

//   const handleShowMore = async () => {
//     const numberOfPosts = posts.length;
//     const startIndex = numberOfPosts;
//     const urlParams = new URLSearchParams(location.search);
//     urlParams.set('startIndex', startIndex);
//     const searchQuery = urlParams.toString();
//     const res = await fetch(`/api/post/getposts?${searchQuery}`);
//     if (!res.ok) {
//       return;
//     }
//     if (res.ok) {
//       const data = await res.json();
//       setPosts([...posts, ...data.posts]);
//       if (data.posts.length === 9) {
//         setShowMore(true);
//       } else {
//         setShowMore(false);
//       }
//     }
//   };
useEffect(() => {
  try {
    const fetchRecentPosts = async () => {
      const res = await fetch(`/api/post/getposts?limit=3`);
      const data = await res.json();
      if (res.ok) {
        setRecentPosts(data.posts);
      }
    };
    fetchRecentPosts();
  } catch (error) {
    console.log(error.message);
  }
}, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)


  return (
    // < className='flex flex-col md:flex-row'>
    //   <div className='p-7 border-b md:border-r md:min-h-screen border-gray-500'>
    //     <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
    //       <div className='flex   items-center gap-2'>
    //         <label className='whitespace-nowrap font-semibold'>
    //           Search Term:
    //         </label>
    //         <TextInput
    //           placeholder='Search...'
    //           id='searchTerm'
    //           type='text'
    //           value={sidebarData.searchTerm}
    //           onChange={handleChange}
    //         />
    //       </div>
    //       <div className='flex items-center gap-2'>
    //         <label className='font-semibold'>Sort:</label>
    //         <Select onChange={handleChange} value={sidebarData.sort} id='sort'>
    //           <option value='desc'>Latest</option>
    //           <option value='asc'>Oldest</option>
    //         </Select>
    //       </div>
    //       <div className='flex items-center gap-2'>
    //         <label className='font-semibold'>Category:</label>
    //         <Select
    //           onChange={handleChange}
    //           value={sidebarData.category}
    //           id='category'
    //         >
    //           <option value='uncategorized'>Uncategorized</option>
    //           <option value='latest'>Latest</option>
    //           <option value='politics'>Politics</option>
    //           <option value='music'>Music</option>
    //           <option value='movies'>movies</option>
    //           <option value='jobs'>Jobs</option>
    //         </Select>
    //       </div>
    //       <Button type='submit' color='success'>
    //         Apply Filters
    //       </Button>
    //     </form>
    //   </div>
      <div className='w-full'>
        <h1 className='text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5 '>
          Post
        </h1>
        <div className='p-7 flex flex-wrap gap-4'>
          {!loading && posts.length === 0 && (
            <p className='text-xl text-gray-500'>No posts found.</p>
          )}
          {loading && <p className='text-xl text-gray-500'>Loading...</p>}
          {!loading &&
            posts &&
            currentPosts.map((post) => <PostCard key={post._id} post={post} />)}
          {/* {showMore && (
            <button
              onClick={handleShowMore}
              className='text-teal-500 text-lg hover:underline p-7 w-full'
            >
              Show More
            </button>
          )} */}
        </div>
        <div className='mt-3 text-xl flex justify-center gap-1'>
            {Array.from({ length:Math.ceil(posts.length / postPerPage)}, (_, i) => (
                <div key={i + 1}>
                    <a onClick={() => paginate(i + 1)}  className='text-teal-500 border  border-teal-500' href="#" >{i + 1}</a></div>
            ))}
          </div>
          <div className='flex flex-col justify-center items-center mb-5'>
        <h1 className='text-xl mt-5'>Recent articles</h1>
        <div className='flex flex-wrap gap-5 mt-5 justify-center'>
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
      </div>

  );
}
