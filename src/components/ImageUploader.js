import React, { useState,useRef } from 'react';
import {  Card, CardMedia } from '@mui/material';

export default function ImageUploader(props){
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
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
          accept="image/*"
          style={{ display: 'none' }}
        />
      </Card>
    );
}