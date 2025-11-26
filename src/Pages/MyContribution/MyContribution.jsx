import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const MyContribution = () => {
  const { user } = useAuth();

  // Fetch user's contributions using React Query
  const {
    data: contributions = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myContributions", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `https://clean-zone-server.vercel.app/myissue?email=${user?.email}`
      );
      return res.data;
    },
    enabled: !!user?.email,
  });
  // console.log(contributions);
  const handleDownload = (contribution) => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Contribution Report", 14, 22);

    doc.setFontSize(12);
    doc.text(`Contributor: ${user?.displayName || user?.email}`, 14, 32);
    doc.text(`Email: ${user?.email}`, 14, 40);

    const tableColumn = ["Field", "Value"];
    const tableRows = [
      ["Issue Title", contribution.issueTitle],
      ["Category", contribution.category],
      ["Paid Amount", `${contribution.amount} BDT`],
      ["Date", new Date(contribution.date).toLocaleDateString()],
      ["Address", contribution.address || "-"],
      ["Phone", contribution.phone || "-"],
    ];

    autoTable(doc, {
      startY: 50,
      head: [tableColumn],
      body: tableRows,
      theme: "grid",
    });

    doc.save(`Contribution_${contribution.issueTitle}.pdf`);
  };

  if (isLoading) {
    return (
      <div className="text-center py-20 text-xl font-bold">Loading...</div>
    );
  }

  if (contributions.length === 0) {
    return (
      <div className="text-center py-20 text-xl font-bold text-gray-500">
        You have not made any contributions yet.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 mb-20 p-4">
      <h2 className="text-3xl font-bold mb-6">My Contributions</h2>

      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-green-500 text-white text-left">
              <th className="py-3 px-4">Issue Title</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Paid Amount</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4 text-center">Download Report</th>
            </tr>
          </thead>

          <tbody>
            {contributions.map((c) => (
              <tr key={c._id} className="border-b hover:bg-gray-50 transition">
                <td className="py-3 px-4 font-medium">{c.title}</td>
                <td className="py-3 px-4">{c.category}</td>
                <td className="py-3 px-4">{c.amount} BDT</td>
                <td className="py-3 px-4">
                  {new Date(c.date).toLocaleDateString()}
                </td>
                <td className="py-3 px-4 text-center">
                  <button
                    onClick={() => handleDownload(c)}
                    className="px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm"
                  >
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyContribution;
