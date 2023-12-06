import { useState } from 'react';
import axios from 'axios';
import React from 'react'; // Import React to access types
import Container from '@/components/Layout';
const Email = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { // Explicitly define the type
    e.preventDefault();
    try {
        const toAddresses = to.split(',').map((address) => address.trim());

        const response = await axios.post('/api/sendEmail', { to: toAddresses, subject, message });
      console.log(response.data);
      alert('Email Sent Successfully \n\nPress OK')
      window.location.href = '/'
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <Container>
      <div className="min-h-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded-md w-full max-w-[500px] h-full max-h-[500px] overflow-y-auto">
          <h1 className="text-3xl mb-4 text-black font-serif font-bold text-center">Bulk Email Sender</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label htmlFor="" className="text-rgb-29-29-102 font-serif">
              To
            </label>
            <input
              type="text"
              placeholder="Enter TO Address"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              required
              className="border-2 border-rgb-29-29-102 focus:outline-none focus:border-rgb-29-29-102 text-rgb-29-29-102 font-serif"
            />
            <label htmlFor="" className="text-rgb-29-29-102 font-serif">
              Subject
            </label>
            <input
              type="text"
              placeholder="Enter Subject"
              value={subject} 
              onChange={(e) => setSubject(e.target.value)}
              required
              className="border-2 border-rgb-29-29-102 focus:outline-none focus:border-rgb-29-29-102 text-rgb-29-29-102 font-serif"
            />
            <label htmlFor="" className="text-rgb-29-29-102 font-serif">
              Message
            </label>
            <textarea 
            placeholder="EnterMessage" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required
            className="border-2 border-rgb-29-29-102 focus:outline-none focus:border-rgb-29-29-102 text-rgb-29-29-102 font-serif"          
            />
            <button
              type="submit"
              value="Submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            >
              Send Mail
            </button>
          </form>
        </div>
      </div>
      <video
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover"
            style={{ position: 'fixed', width: '100%', height: '100vh', objectFit: 'cover', zIndex: -1, opacity: 0.3 }}
          >
            <source src="/background_video.mp4" type="video/mp4" />
      </video>
    </Container>
  );
};

export default Email;


