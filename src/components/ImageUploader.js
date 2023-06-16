import React, { useState, useRef } from 'react';
import { Card, CardMedia } from '@mui/material';

export default function ImageUploader(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'image/jpeg') {
      setSelectedImage(URL.createObjectURL(file));
      props.setImage(file); // Pass the File object to the parent component
    } else {
      setSelectedImage(null);
      props.setImage(null); // Reset the image in the parent component
    }
  };

  const handleCardMediaClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="auto"
        image={selectedImage || "./person-square.svg"}
        alt="Selected Image"
        onClick={handleCardMediaClick}
        style={{ cursor: 'pointer' }}
      />
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        accept=".jpg"
        style={{ display: 'none' }}
      />
    </Card>
  );
}
