import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) => {
        let value = data.slice(0, 12);
        setPosts(value);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        JSON Placeholder API Data
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {posts.map((val) => (
          <Link key={val.id} to={`/post/${val.id}`}>
            <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {val.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
