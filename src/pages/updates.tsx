import { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database'; // Update import statement for Firebase v9
import Container from '@/components/Layout';

const firebaseConfig = {
    apiKey: "AIzaSyAiWxuTcx91-bWlm0ICqjwvrkp3ZkiJBn0",
    authDomain: "admin-53619.firebaseapp.com",
    databaseURL: "https://admin-53619-default-rtdb.firebaseio.com",
    projectId: "admin-53619",
    storageBucket: "admin-53619.appspot.com",
    messagingSenderId: "376989758249",
    appId: "1:376989758249:web:6a27ff8d39bb6b74f17d38"
  };
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  interface Update {
    heading: string;
    message: string;
    // Add other properties if present in your Firebase data
  }
  
  const Updates = () => {
    const [updates, setUpdates] = useState<Update[]>([]);
  
    useEffect(() => {
      const db = firebase.database();
      const updatesRef = db.ref('messages');
  
      updatesRef.on('value', (snapshot) => {
        const updatesData = snapshot.val();
        if (updatesData) {
          const updatesArray: Update[] = Object.values(updatesData);
          setUpdates(updatesArray);
        } else {
          setUpdates([]);
        }
      }, (errorObject) => {
        console.log('The read failed: ');
      });
    }, []);
  
    return (
      <Container>
        <div className="min-h-screen flex justify-center items-center">
          <div className="bg-gray-700 p-8 rounded-md w-full max-w-[500px] h-full max-h-[500px] overflow-y-auto text-white">
            <h1 className="text-3xl mb-4 font-serif font-bold text-center">Linguathon Updates</h1>
            {updates.map((update, index) => (
              <div key={index} className="bg-white rounded-md p-4 mb-2">
                <h2 className="text-xl font-bold mb-2" style={{ color: 'black' }}>{update.heading}</h2>
                <p style={{ color: 'black' }}>{update.message}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    );
  };
  
  export default Updates;