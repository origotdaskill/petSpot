import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import PostWidget from "./PostWidget";

const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);
  const isLoading = useSelector((state) => state.isLoading); // Assuming a loading state in Redux

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let response;
        if (isProfile) {
          response = await fetch(
            `https://petspot.onrender.com/posts/${userId}/posts`,
            {
              method: "GET",
              headers: { Authorization: `Bearer ${token}` },
            }
          );
        } else {
          response = await fetch("https://petspot.onrender.com/posts", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          });
        }
        const data = await response.json();
        dispatch(setPosts({ posts: data }));
      } catch (error) {
        console.error("Error fetching posts:", error);
        // Handle error state or display error message
      }
    };

    fetchPosts();
  }, [isProfile, userId, token, dispatch]);

  if (isLoading) {
    return <p>Loading posts...</p>; // Display a loading indicator
  }

  if (!posts || posts.length === 0) {
    return <p>No posts available</p>; // Handle case where posts are not fetched or empty
  }

  return (
    <>
      {posts.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => (
          <PostWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            location={location}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
          />
        )
      )}
    </>
  );
};

export default PostsWidget;
