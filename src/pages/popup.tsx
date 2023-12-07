import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

type PopupProps = {
  message: string;
};

const Popup: React.FC<PopupProps> = ({ message }) => {
  const [showPopup, setShowPopup] = useState(true);
  const [countdown, setCountdown] = useState(11); // Set initial countdown time (in seconds)
  const [popupContent, setPopupContent] = useState<{ message: string; seconds: number } | null>(null);

  const handleClose = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = firebase.database();
        const popupRef = db.ref('users/' + message); // Adjust this reference as per your database structure
        const snapshot = await popupRef.get();
        if (snapshot.exists()) {
          const data = snapshot.val();
          setPopupContent(data); // Set the fetched data to state
        } else {
          console.log('No data available');
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData(); // Fetch data when the component mounts

    const timer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        setShowPopup(false);
      }
    }, 1000); // Decrement countdown every second (1000 milliseconds)

    return () => clearTimeout(timer); // Clear the timer if component unmounts or showPopup changes
  }, [countdown, message]);
  return (
    <>
     {showPopup && popupContent && (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
    <div className="bg-white p-6 rounded-lg relative z-50">
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none z-50"
      >
        <img
          src="/close.png" // Path to your close.png file
          alt="Close"
          className="h-6 w-6" // Set appropriate dimensions for your image
        />
      </button>
      <p>{popupContent.message}</p>
      <br></br>
      <p>Popup closes in {countdown} seconds.</p>
    </div>
  </div>
)}

    </>
  );
};

export default Popup;