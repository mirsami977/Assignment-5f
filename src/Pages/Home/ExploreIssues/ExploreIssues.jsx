/*import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const ExploreIssues = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const res = await axios.get("/data.json");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <p className="text-xl font-semibold animate-pulse">
          Loading issue data...
        </p>
      </div>
    );
  }

  if (error || !data || !Array.isArray(data)) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <p className="text-xl font-semibold text-red-500">
          Failed to load issues:{" "}
          {error?.message || "Invalid data format or unknown error."}
        </p>
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto pt-12">
      <h1 className="text-3xl font-semibold text-left">Explore Issues</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
        {data.map((blog) => (
          <div
            key={blog.id}
            className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300"
          >
            <img
              className="rounded-xl max-h-40 w-full object-cover"
              src={blog.image}
              alt={blog.title}
            />
            <h3 className="text-base text-slate-900 font-medium mt-3">
              {blog.title}
            </h3>
            <p className="text-xs text-green-600 font-medium mt-1">
              {blog.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreIssues;*/
