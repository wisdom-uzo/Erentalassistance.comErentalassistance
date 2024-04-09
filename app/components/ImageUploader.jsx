'use client'
import React, { useState } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable, deleteObject } from 'firebase/storage';

function ImageUploader() {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [imageUrl1, setImageUrl1] = useState('');
  const [imageUrl2, setImageUrl2] = useState('');
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);

  const storage = getStorage();

  // Function to handle file change for image 1
  const handleFileChange1 = (e) => {
    const file = e.target.files[0];
    setImage1(file);
    uploadImageToStorage(file, setImageUrl1, setProgress1);
  };

  // Function to handle file change for image 2
  const handleFileChange2 = (e) => {
    const file = e.target.files[0];
    setImage2(file);
    uploadImageToStorage(file, setImageUrl2, setProgress2);
  };

  // Function to upload image to Firebase Storage
  const uploadImageToStorage = async (file, setImageUrl, setProgress) => {
    if (!file) return;

    const storageRef = ref(storage, `/storage/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImageUrl(url);
        });
      }
    );
  };

  // Function to delete image from Firebase Storage
  const deleteImageFromStorage = async (imageUrl, setImageUrl) => {
    if (!imageUrl) return;

    const imageRef = ref(storage, imageUrl); // Corrected usage of ref
    try {
      await deleteObject(imageRef);
      setImageUrl('');
    } catch (error) {
      console.error('Error deleting image: ', error);
    }
  };

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="image1" className="block text-sm font-medium text-gray-700">
          Upload Image 1
        </label>
        <div className="mt-1 flex items-center">
          <input
            id="image1"
            name="image1"
            type="file"
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            onChange={handleFileChange1}
          />
          {progress1 > 0 && <div className="ml-4">{progress1}% uploaded</div>}
          {imageUrl1 && (
            <div className="ml-4">
              <img src={imageUrl1} alt="Uploaded" className="max-w-full h-auto" />
              
              <button
                className="mt-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                onClick={() => deleteImageFromStorage(imageUrl1, setImageUrl1)}
              >
                Remove image
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="image2" className="block text-sm font-medium text-gray-700">
          Upload Image 2
        </label>
        <div className="mt-1 flex items-center">
          <input
            id="image2"
            name="image2"
            type="file"
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            onChange={handleFileChange2}
          />
          {progress2 > 0 && <div className="ml-4">{progress2}% uploaded</div>}
          {imageUrl2 && (
            <div className="ml-4">
              <img src={imageUrl2} alt="Uploaded" className="max-w-full h-auto" />
              <button
                className="mt-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                onClick={() => deleteImageFromStorage(imageUrl2, setImageUrl2)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageUploader;
