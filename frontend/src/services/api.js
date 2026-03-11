import axios from "axios";

const API_URL = " http://localhost:5000/api/upload";

export const uploadSalesFile = async (file, email) => {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("email", email);

  const response = await axios.post(API_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};