

import Header from '@/components/Header';
import Image from 'next/image';

import Container from '@/components/Layout';
import Gallery from './gallery';
import Events from './events';

import { useRouter } from 'next/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import React, { useState, useEffect } from 'react';
import Popup from './popup';

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


export default function PreviewPage() {
  const [popupMessage, setPopupMessage] = useState('');

  // Fetch message from the database using useEffect
  useEffect(() => {
    const fetchPopupMessage = async () => {
      try {
        const db = firebase.database();
        const popupRef = db.ref('users/'); // Replace with your database path
        const snapshot = await popupRef.get();
        if (snapshot.exists()) {
          const data = snapshot.val();
          
          setPopupMessage(data.message); // Assuming the message is stored in 'message' key in the database
        } else {
          console.log('No data available');
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchPopupMessage(); // Fetch the message when the component mounts
  }, []);
  return (
    
    <>
    <Popup message={popupMessage} />
      <Container>
        
        <Header />

        <section className='mt-20 -pt-[50px]'>
          <div className="shadow"></div>
          <div className="relative" id="home">

            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
              <div className="relative pt-36 ml-auto">
                <div className="lg:w-2/3 text-justify mx-auto">
                  <h1 className="text-white dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">Linguathon<span className="text-primary text-[#EACD69]"> 2024.</span></h1>
                  <h4 className="mt-8 text-white dark:text-gray-300">
                  Linguathon, an annual one-day intercollegiate event, is a celebration of language and literature organized by Land of Lexicons Club - Kumaraguru Institutions. The event features a variety of engaging quizzes, trivia games, debates, slam poetry sessions, and storytelling sessions, all designed to challenge and inspire participants. Linguathon provides a platform for students to showcase their linguistic skills, explore the depths of literature, and discover the transformative power of language. The event is open to students from all colleges and universities, and it is sure to be an unforgettable experience for all who attend.</h4>
                  <div className='flex justify-between mt-10'>
                    <div className="flex  space-x-2">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span className="text-white">Yet to be decided</span>
                    </div>
                    <div className="flex  space-x-2">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2 C7.03 2 3 6.03 3 11 C3 16.55 12 22 12 22 C12 22 21 16.55 21 11 C21 6.03 16.97 2 12 2 Z"></path>
                        <circle cx="12" cy="11" r="4"></circle>
                      </svg>
                      <span className="text-white">Kumaraguru College of Technology</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
        
          <Gallery />
          <Events headerShown={false} />
        </div>
      </Container >
      
      
    </>

  );
}