import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AddIssue = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const issueData = {
      ...data,
      status: "ongoing",
      date: new Date(),
      email: user?.email,
    };

    const res = await axios.post(
      "https://clean-zone-server.vercel.app/issue",
      issueData
    );

    if (res.data.insertedId) {
      Swal.fire({
        title: "Issue Added!",
        text: "Your issue has been successfully submitted.",
        icon: "success",
        confirmButtonText: "OK",
      });
      reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Try again.",
        icon: "error",
        confirmButtonText: "Close",
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 mb-10 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Issue</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-green-400 transition-all overflow-hidden">
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="Issue Title"
            className="h-full px-2 w-full outline-none bg-transparent"
          />
        </div>
        <div className="">
          <select
            {...register("category")}
            className="w-full text-left px-4 pr-2 py-2 border  bg-white text-gray-800 border-gray-300 shadow-sm rounded-full hover:bg-gray-50 focus:outline-none"
          >
            <option value="Garbage">Garbage</option>
            <option value="Illegal Construction">Illegal Construction</option>
            <option value="Broken Public Property">
              Broken Public Property
            </option>
            <option value="Road Damage">Road Damage</option>
          </select>
        </div>

        <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-green-400 transition-all overflow-hidden">
          <input
            {...register("location", { required: true })}
            type="text"
            placeholder="Location"
            className="h-full px-2 w-full outline-none bg-transparent"
          />
        </div>

        <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-green-400 transition-all overflow-hidden">
          <input
            {...register("image", { required: true })}
            type="text"
            placeholder="Image URL"
            className="h-full px-2 w-full outline-none bg-transparent"
          />
        </div>

        <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-green-400 transition-all overflow-hidden">
          <input
            {...register("amount", { required: true })}
            type="number"
            placeholder="Suggested Fix Budget"
            className="h-full px-2 w-full outline-none bg-transparent"
          />
        </div>

        <textarea
          {...register("description", { required: true })}
          placeholder="Issue Description"
          className="textarea h-full px-2 border border-slate-300 rounded-md outline-none bg-transparent textarea-bordered w-full"
          rows={4}
        ></textarea>

        <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-green-400 transition-all overflow-hidden">
          <input
            value={user?.email}
            readOnly
            className="h-full px-2 w-full outline-none bg-transparent"
          />
        </div>

        <button className="cursor-pointer px-8 py-2 bg-green-500 hover:bg-green-600 transition text-white rounded-full">
          Add Issue
        </button>
      </form>
    </div>
  );
};

export default AddIssue;
