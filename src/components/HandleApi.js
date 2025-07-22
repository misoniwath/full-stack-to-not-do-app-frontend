import axios from "axios";

const baseURL = "https://full-stack-to-not-do-app.onrender.com"; // Updated to use the deployed backend URL

// Function to fetch all ToNotDos
// This function retrieves all ToNotDos from the backend and updates the state
export const getAllToNotDos = (setToNotDos) => {
  axios.get(baseURL).then(({ data }) => {
    console.log("Fetched ToNotDos:", data);
    setToNotDos(data);
  });
};

// Function to add a new ToNotDo
// This function sends a POST request to the backend to add a new ToNotDo
export const addToNotDo = (text, setText, setToNotDos) => {
  axios
    .post(`${baseURL}/add`, { text })
    .then((data) => {
      console.log("Added ToNotDo:", data);
      setText("");
      getAllToNotDos(setToNotDos);
    })
    .catch((err) => {
      console.error("Error adding ToNotDo:", err);
    });
};


// Function to update an existing ToNotDo
// This function sends a PUT request to the backend to update an existing ToNotDo
export const updateToNotDo = (
  toNotDoid,
  text,
  setToNotDos,
  setText,
  setIsUpdating
) => {
  axios
    .put(`${baseURL}/update`, { _id: toNotDoid, text })
    .then((data) => {
      console.log("Updated ToNotDo:", data);
      setText("");
      setIsUpdating(false);
      getAllToNotDos(setToNotDos);
    })
    .catch((err) => {
      console.error("Error updating ToNotDo:", err);
    });
};

// Function to delete a ToNotDo
// This function sends a DELETE request to the backend to remove a ToNotDo
export const deleteToNotDo = (_id, setToNotDos) => {
  axios
    .delete(`${baseURL}/delete`, { data: { _id } })
    .then((data) => {
      console.log("Deleted ToNotDo:", data);
      getAllToNotDos(setToNotDos);
    })
    .catch((err) => {
      console.error("Error deleting ToNotDo:", err);
    });
};
