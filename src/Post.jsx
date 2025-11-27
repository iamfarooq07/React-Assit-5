import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [showPost, setShowPost] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);

        toast.success("Post Loaded Successfully!", {
          autoClose: 500,
          onClose: () => setShowPost(true),
        });
      });
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6">
        {showPost ? (
          <p className="text-gray-700 text-lg leading-relaxed">{post?.body}</p>
        ) : (
          <div className="animate-pulse space-y-2">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
        )}
      </div>

      <ToastContainer position="top-center" />
    </div>
  );
}

export default Post;
