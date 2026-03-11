import { useState } from "react";
import { uploadSalesFile } from "../services/api";
import StatusMessage from "./StatusMessage";

const FileUpload = () => {

  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !email) {
      setStatus("Please upload file and enter email");
      return;
    }

    try {
      setStatus("Processing...");
      await uploadSalesFile(file, email);
      setStatus("✅ Email sent successfully!");
    } catch (error) {
      setStatus("❌ Error generating summary");
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">

      <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
        Upload Sales Data
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="file"
          accept=".csv,.xlsx"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="email"
          placeholder="Recipient Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-violet-500 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-violet-600 text-white py-2.5 rounded-lg font-medium hover:opacity-90 transition"
        >
          Generate AI Summary
        </button>

      </form>

      <div className="mt-4 text-center text-sm">
        <StatusMessage status={status} />
      </div>

    </div>
  );
};

export default FileUpload;