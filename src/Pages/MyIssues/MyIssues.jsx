import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import UpdateIssueModal from "../Home/UpdateIssueModal/UpdateIssueModal";

const MyIssues = () => {
  const { user } = useAuth();
  const [selectedIssue, setSelectedIssue] = useState(null);

  // Fetch issues  logged user
  const {
    data: issues = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myIssues", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `https://clean-zone-server.vercel.app/myissue?email=${user?.email}`
      );
      return res.data;
    },
  });

  console.log(issues);
  // Delete Issue
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This issue will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(
          `https://clean-zone-server.vercel.app/issue/${id}`
        );
        if (res.data.deletedCount > 0) {
          Swal.fire("Deleted!", "Your issue has been deleted.", "success");
          refetch();
        }
      }
    });
  };

  // Loading State
  if (isLoading) {
    return (
      <div className="text-center py-20 text-xl font-bold">
        Loading your issues...
      </div>
    );
  }

  // Empty State
  if (issues.length === 0) {
    return (
      <div className="text-center py-20 text-xl font-bold text-gray-500">
        You have not submitted any issues yet.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 mb-20 p-4">
      <h2 className="text-3xl font-bold mb-6">My Issues</h2>

      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-green-500 text-white text-left">
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {issues.map((issue) => (
              <tr
                key={issue._id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4 font-medium">{issue.title}</td>
                <td className="py-3 px-4">{issue.category}</td>
                <td className="py-3 px-4">${issue.amount}</td>
                <td
                  className={`py-3 px-4 font-bold ${
                    issue.status === "ongoing"
                      ? "text-red-500"
                      : "text-green-600"
                  }`}
                >
                  {issue.status}
                </td>
                <td className="py-3 px-4">
                  {new Date(issue.date).toLocaleDateString()}
                </td>

                <td className="py-3 px-4 text-center flex gap-3 justify-center">
                  {/* Update Button */}
                  <button
                    onClick={() => setSelectedIssue(issue)}
                    className="px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm"
                  >
                    Update
                  </button>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(issue._id)}
                    className="px-4 py-1 bg-red-500 hover:bg-red-600 text-white rounded-full text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Modal */}
      {selectedIssue && (
        <UpdateIssueModal
          isOpen={true}
          issue={selectedIssue}
          onClose={() => setSelectedIssue(null)}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default MyIssues;
