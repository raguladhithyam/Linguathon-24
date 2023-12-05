import React, { useState, ChangeEvent, FormEvent } from 'react';
import { saveAs } from 'file-saver';
import { PDFDocument } from 'pdf-lib';
import Header from '@/components/Header';
import Image from 'next/image';

import Container from '@/components/Layout';
import Gallery from './gallery';
import Events from './events';
import { useRouter } from 'next/router';

interface FormData {
  [key: string]: string;
}

const Page = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    yeardeptcollege: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert('Please wait... Generating Certificate\n\nPress OK');
    generatePDF();
  };

  const generatePDF = async () => {
    try {
      const pdfBytes = await fetch('lingcert.pdf').then((response) => response.arrayBuffer());
      const pdfDoc = await PDFDocument.load(pdfBytes);

      const form = pdfDoc.getForm();
      Object.keys(formData).forEach((fieldId) => {
        form.getTextField(fieldId).setText(formData[fieldId]);
      });

      const updatedPdfBytes = await pdfDoc.save();
      const blob = new Blob([updatedPdfBytes], { type: 'application/pdf' });

      const { name, yeardeptcollege } = formData;
      const fileName = `${name}-${yeardeptcollege}.pdf`;

      saveAs(blob, fileName);

      // Reset form fields after generating PDF
      setFormData({
        name: '',
        yeardeptcollege: '',
      });
      alert('Certificate will be downloaded automatically. Please check your downloads. \n\nPress OK');
      window.location.href = '/';
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <Container>
      <div className="min-h-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded-md w-full max-w-[500px] h-full max-h-[500px] overflow-y-auto">
          <h1 className="text-3xl mb-4 text-black font-serif font-bold text-center">Certificate Request Form</h1>
          <form id="advanceform" onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label htmlFor="name" className="text-rgb-29-29-102 font-serif">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-2 border-rgb-29-29-102 focus:outline-none focus:border-rgb-29-29-102 text-rgb-29-29-102 font-serif"
            />
            <label htmlFor="yeardeptcollege" className="text-rgb-29-29-102 font-serif">
              Year-Department-College
            </label>
            <input
              type="text"
              id="yeardeptcollege"
              placeholder="Enter in this format Year - Dept, College"
              value={formData.yeardeptcollege}
              onChange={handleChange}
              required
              className="border-2 border-rgb-29-29-102 focus:outline-none focus:border-rgb-29-29-102 text-rgb-29-29-102 font-serif"
            />
            <button
              type="submit"
              value="Submit"
              id="submitBtn"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            >
              Generate PDF
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

export default Page;
