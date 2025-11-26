import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import { FaMapMarkerAlt, FaMoneyBill, FaUserAlt } from "react-icons/fa";
import { MdCategory, MdDateRange } from "react-icons/md";

const PostDetails = () => {
  const { id } = useParams();

  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const res = await axios.get(
        `https://clean-zone-server.vercel.app/issues/${id}`
      );
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <p className="text-xl font-semibold animate-pulse">
          Loading issue details...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 text-xl">
        Failed to load issue details.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl my-10 border border-gray-200">
      {/* Image */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-80 object-cover rounded-xl mb-6"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold mb-3 text-gray-900">{post.title}</h1>

      {/* Badges */}
      <div className="flex gap-3 mb-5">
        <span className="px-4 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-600">
          {post.category}
        </span>

        <span
          className={`px-4 py-1 rounded-full text-sm font-semibold  
                    ${
                      post.status === "ongoing"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }
                `}
        >
          {post.status}
        </span>
      </div>

      {/* Details Grid */}
      <div className="grid md:grid-cols-2 gap-6 text-lg text-gray-700 mb-6">
        <p className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-red-500" />
          <span>
            <strong>Location:</strong> {post.location}
          </span>
        </p>

        <p className="flex items-center gap-2">
          <MdCategory className="text-indigo-500" />
          <span>
            <strong>Category:</strong> {post.category}
          </span>
        </p>

        <p className="flex items-center gap-2">
          <FaMoneyBill className="text-green-600" />
          <span>
            <strong>Budget:</strong> ৳{post.amount}
          </span>
        </p>

        <p className="flex items-center gap-2">
          <MdDateRange className="text-orange-500" />
          <span>
            <strong>Date:</strong> {new Date(post.date).toLocaleDateString()}
          </span>
        </p>

        <p className="flex items-center gap-2 md:col-span-2">
          <FaUserAlt className="text-blue-600" />
          <span>
            <strong>Reported By:</strong> {post.email}
          </span>
        </p>
      </div>

      {/* Description */}
      <h2 className="text-xl font-semibold mb-2">Description</h2>
      <p className="text-gray-700 leading-relaxed mb-6 overflow-hidden">
        {post.description}
      </p>
    </div>
  );
};

export default PostDetails;
