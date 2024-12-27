// src/App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Categorias from "./components/Categorias";
import Footer from "./components/Footer";

function App() {
  const [videos, setVideos] = useState([]);

  const handleAddVideo = (newVideo) => {
    setVideos([...videos, newVideo]);
  };

  const handleEditVideo = (editedVideo) => {
    setVideos(videos.map((video) => (video.title === editedVideo.title ? editedVideo : video)));
  };

  const handleDeleteVideo = (videoToDelete) => {
    setVideos(videos.filter((video) => video !== videoToDelete));
  };

  return (
    <div className="app">
      <Header onAddVideo={handleAddVideo} />
      <Banner />
      <Categorias videos={videos} onEditVideo={handleEditVideo} onDeleteVideo={handleDeleteVideo} />
      <Footer />
    </div>
  );
}

export default App;
