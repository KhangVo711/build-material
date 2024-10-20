"use client";
import React, { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, MapIcon } from "@heroicons/react/24/solid"

interface FormData {
  name: string;
  email: string;
  phone: string;
  description: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    description: '',
  });

  // Type for Change Event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Type for Submit Event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    // Handle form submission logic here, like sending data to the server
    console.log(formData);
  };

  return (
    <div className="p-8 rounded-lg xl:shadow-2xl w-full lg:max-w-5xl md:max-w-3xl sm:md:max-w-xl">
   
      <h2 className="text-3xl font-bold text-center mb-3">Nhận ưu đãi ngay!</h2>
      <p className="text-sm font-bold text-center mb-10 text-gray-500">Gửi thông tin cho chúng tôi để được nhận ưu đãi sớm nhất!</p>
      <div className='flex justify-center md:justify-between lg:justify-between xl:justify-between w-full h-full'>

      <form onSubmit={handleSubmit} className="space-y-6 w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Họ và tên <span className='text-red-600'>*</span></label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Họ và tên'
            required
            className="mt-1 block w-full px-4 text-sm py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email <span className='text-red-600'>*</span></label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
            required
            className="mt-1 block w-full px-4 py-2 text-sm  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Số điện thoại <span className='text-red-600'>*</span></label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder='Số điện thoại'
            required
            className="mt-1 block w-full px-4 py-2 text-sm  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Góp ý</label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 text-sm  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          >
            Gửi
          </button>
        </div>
      </form>
    <div className='ml-6 items-center flex-col h-full hidden xl:flex lg:flex'>
      <div className=" text-gray-600 w-5/6 mb-20">
        <p className='mb-2.5'><PhoneIcon className="h-5 w-5 inline-block text-gray-600 mr-2" /><strong>Số điện thoại:</strong> 470-601-1911</p>
        <p className='mb-2.5'><EnvelopeIcon className="h-6 w-6 inline-block text-gray-600 mr-2" /><strong>Email:</strong> Pagedone1234@gmail.com</p>
        <p className='mb-2.5'><MapIcon className="h-6 w-6 inline-block text-gray-600 mr-2" /><strong>Địa chỉ:</strong> 789 Oak Lane, Lakeside, TX 54321</p>
      </div>
      <div className='w-10/12 h-1/3'>
        <img src="https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png" alt="Map" className='rounded-lg shadow-md'/>
      </div>
      </div>
    </div>

    </div>
  );
};

export default function ContactPreFooter() {
  return (
    <div className="flex justify-center mt-6 lg:mt-0 items-center h-[600px] lg:h-[700px]">
      <ContactForm />
    </div>
  );
}
