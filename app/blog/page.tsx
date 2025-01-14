"use client";
import React, { useEffect, useState } from "react";
import SectionTitle from "@/components/main/SectionTitle";
import axios from "axios";

interface BlogPost {
  _id: string;
  title: string;
  description: string;
  image: string;
}

const Page: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://blog-nextjs-backend.onrender.com/api/posts"
        );
        if (response.data.status === "success") {
          setPosts(response.data.results);
        }
      } catch (error) {
        console.log("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-72">Loading...</div>
    );
  }

  return (
    <div className="container mx-auto">
      <SectionTitle title="Blog" />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post._id}
            className="border border-white/10 rounded-lg shadow-md"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="px-4 mb-4">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
