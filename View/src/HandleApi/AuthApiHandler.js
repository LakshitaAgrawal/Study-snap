import axios from "axios";
const baseUrl = "http://localhost:8000/api/v1/auth";

const getUserDetails = async (user) => {
  try {
    if (!user) {
      console.error("Null User Error");
      return;
    }
    const { nickname, token, email, sub: auth0Id } = user;
    const response = await axios.post(
      `${baseUrl}/getDetails`,
      {
        name: nickname,
        auth0Id,
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error while getting user details:", error);
  }
};

const updateUser = async (user, newName) => {
  try {
    if (!user) {
      console.error("Null User Error");
      return;
    }
    const auth0Id = user.auth0Id;
    const { token } = user;
    const response = await axios.put(
      `${baseUrl}/edit-profile`,
      {
        auth0Id,
        newName,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

const deleteUserAccount = async (user) => {
  try {
    if (!user) {
      throw new Error("Null User Error");
    }

    const { auth0Id, token } = user;
    
    const response = await axios.delete(`${baseUrl}/delete-account`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { auth0Id },
    });

    return response.data;
  } catch (error) {
    console.error("Error deleting user account:", error.message);
    throw error;
  }
};

export { getUserDetails, updateUser, deleteUserAccount };
