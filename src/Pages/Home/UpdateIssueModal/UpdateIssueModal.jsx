import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const categories = ["Road", "Garbage", "Drainage", "Public Place"];

const UpdateIssueModal = ({ isOpen, onClose, issue, refetch }) => {
  const [updatedIssue, setUpdatedIssue] = useState({
    title: "",
    category: "",
    description: "",
    amount: "",
    status: "",
  });

  useEffect(() => {
    if (issue) {
      setUpdatedIssue({
        title: issue.title,
        category: issue.category,
        description: issue.description,
        amount: issue.amount,
        status: issue.status,
      });
    }
  }, [issue]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedIssue({ ...updatedIssue, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(
        `https://clean-zone-server.vercel.app/issue/${issue._id}`,
        updatedIssue
      );

      if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Updated Successfully!",
          text: "Your issue has been updated.",
          timer: 1500,
          showConfirmButton: false,
        });
        refetch();
        onClose();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed!",
        text: "Something went wrong.",
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Update Issue</h2>

        {/* Title */}
        <label className="block mb-2 font-medium">Title</label>
        <input
          name="title"
          value={updatedIssue.title}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
        />

        {/* Category */}
        <label className="block mb-2 font-medium">Category</label>
        <select
          name="category"
          value={updatedIssue.category}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Amount */}
        <label className="block mb-2 font-medium">Amount (BDT)</label>
        <input
          type="number"
          name="amount"
          value={updatedIssue.amount}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
        />

        {/* Description */}
        <label className="block mb-2 font-medium">Description</label>
        <textarea
          name="description"
          value={updatedIssue.description}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
          rows="3"
        ></textarea>

        {/* Status */}
        <label className="block mb-2 font-medium">Status</label>
        <select
          name="status"
          value={updatedIssue.status}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-4"
        >
          <option value="ongoing">Ongoing</option>
          <option value="ended">Ended</option>
        </select>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleUpdate}
            className="px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateIssueModal;
