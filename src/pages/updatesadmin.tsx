import { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database'; // Update import statement for Firebase v9
import { getDatabase, ref, push } from 'firebase/database'; // Update import statement for Firebase v9
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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const CreateMessagePage = () => {
  const [heading, setHeading] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const db = getDatabase();
      const messagesRef = ref(db, 'messages');
      push(messagesRef, {
        heading,
        message,
      });

      setHeading('');
      setMessage('');

      alert('Message saved successfully');
    } catch (error) {
      alert('Error adding message: ' + error);
    }
  };

  return (
    <Container>
      <div className="min-h-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded-md w-full max-w-[500px] h-full max-h-[500px] overflow-y-auto">
          <h1 className="text-3xl mb-4 text-black font-serif font-bold text-center">Custom Popup Form</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label htmlFor="heading" className="text-rgb-29-29-102 font-serif">
              Heading
            </label>
            <input
              type="text"
              placeholder="Enter heading"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              required
              className="border-2 border-rgb-29-29-102 focus:outline-none focus:border-rgb-29-29-102 text-rgb-29-29-102 font-serif"
            />
            <label htmlFor="message" className="text-rgb-29-29-102 font-serif">
              Message
            </label>
            <textarea
              placeholder="Enter message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="border-2 border-rgb-29-29-102 focus:outline-none focus:border-rgb-29-29-102 text-rgb-29-29-102 font-serif"
            />
            <button
              type="submit"
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
