// src/api.js
const API_URL = "http://localhost:3001/videos";

export const getVideos = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createVideo = async (video) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  });
  return response.json();
};

export const updateVideo = async (id, video) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  });
  return response.json();
};

export const deleteVideo = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
