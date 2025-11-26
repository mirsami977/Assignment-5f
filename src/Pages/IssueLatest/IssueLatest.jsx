import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router";

const IssueLatest = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const res = await axios.get(
        "https://clean-zone-server.vercel.app/issue/latest"
      );
      return res.data;
    },
  });
  // console.log(data);

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <p className="text-xl font-semibold animate-pulse">
          Loading issue details...
        </p>
      </div>
    );
  }

  return (
    <div className=" max-w-11/12 mx-auto mt-10">
      <h1 className="text-3xl font-semibold text-left mx-auto">Issues</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 pt-12">
        {data.map((post) => (
          <>
            <div
              key={post._id}
              className="p-4 bg-white rounded-lg shadow max-w-80"
            >
              <img
                className="rounded-md max-h-40 w-full object-cover"
                src={post.image}
                alt={post.title}
              />
              <p className="text-gray-900 text-xl font-semibold ml-2 mt-2">
                {post.title}
              </p>
              <p className="text-gray-500 text-sm my-3 ml-2">{post.category}</p>
              <div className=" ml-2">
                <p>{post.location}</p>
                <Link
                  className="text-xl text-green-300"
                  to={`/posts/${post._id}`}
                >
                  See Details
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default IssueLatest;
