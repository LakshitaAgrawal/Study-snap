import axios from "axios";
const baseUrl = "http://localhost:8000/api/v1/productivity";

const setStudyTarget = async (auth0Id, studyTarget) => {
  try {
    const response = await axios.put(`${baseUrl}/set-target`, {
      auth0Id: auth0Id,
      studyTarget: studyTarget,
    });

    return response.data;
  } catch (error) {
    console.error("Error:", error.response.data.message);
    return null;
  }
};

const addProductivityData = async (auth0Id, hoursStudied) => {
  try {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0"); // January is 0
    const year = today.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    console.log("sending this date: ", formattedDate);

    const response = await axios.post(`${baseUrl}/add-data`, {
      auth0Id: auth0Id,
      hoursStudied: hoursStudied,
      date: formattedDate,
    });

    return response.data;
  } catch (error) {
    console.error("Error:", error.response.data.message);
    return null;
  }
};

export { setStudyTarget, addProductivityData };
