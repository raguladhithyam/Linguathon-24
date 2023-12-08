import React, { useState } from 'react';
import 'firebase/firestore'
import firebase from 'firebase/compat/app'
import 'firebase/database'
import { getDatabase, ref, set } from "firebase/database";
import Container from '@/components/Layout';

const firebaseConfig = {
  apiKey: "AIzaSyDMCuUYkvMYiRHdtGCnw_Ai0VKyJ7YdCw8",
  authDomain: "linguathon24.firebaseapp.com",
  databaseURL: "https://linguathon24-default-rtdb.firebaseio.com",
  projectId: "linguathon24",
  storageBucket: "linguathon24.appspot.com",
  messagingSenderId: "1039823568068",
  appId: "1:1039823568068:web:ce9e5c8a6ac943dbf45d91"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const CreateMessagePage = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const db = getDatabase();
      set(ref(db, 'users/'), {
        message,
      });

      setMessage('');

      alert('Message saved successfully');
      window.location.href = '/'
    } catch (error) {
      alert('Error adding document: ' + error);
    }
  };

  
  return (
    <Container>
    <div className="min-h-screen flex justify-center items-center">
    <div className="bg-white p-8 rounded-md w-full max-w-[500px] h-full max-h-[500px] overflow-y-auto">
      <h1 className="text-3xl mb-4 text-black font-serif font-bold text-center">Custom Popup Form</h1>
      <form id="popupform" onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="name" className="text-rgb-29-29-102 font-serif">
          Message
        </label>
        <textarea
          // type="text"
          placeholder="Enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="border-2 border-rgb-29-29-102 focus:outline-none focus:border-rgb-29-29-102 text-rgb-29-29-102 font-serif"
        />
        
        <button
          type="submit"
          value="Submit"
          id="submitBtn"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Save
        </button>
      </form>
    </div>
  </div>
  </Container>
  );
};

export default CreateMessagePage;