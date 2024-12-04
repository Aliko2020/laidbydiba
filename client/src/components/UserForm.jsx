import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ onSubmit }) => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phone: Yup.string()
      .required('Phone number is required'),
  });

  return (
    <div className="p-6 h-[100vh]">
      <h2 className="text-2xl font-bold mb-1">Enter Contact Information</h2>
      <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consequatur exercitationem modi veniam nostrum</p>
      <Formik
        initialValues={{ name: '', email: '', phone: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onSubmit(values);
          navigate('/payment');
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">Name*</label>
              <Field
                type="text"
                name="name"
                className="border border-Complemetary rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">Email (optional)</label>
              <Field
                type="email"
                name="email"
                className="border border-Complemetary rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">Phone*</label>
              <div className='flex gap-2 items-center'>
                <label className='border border-Complemetary p-2 rounded' htmlFor="">+233</label>
                <Field
                type="text"
                name="phone"
                className="border border-Complemetary rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
              />
              </div>
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
            </div>
            <div className='flex justify-between mt-8'>
            <button type="submit" className="bg-Complemetary text-Primary px-4  rounded" disabled={isSubmitting}>
              Proceed to Payment
            </button>
            <button 
              onClick={() => navigate(-1)} 
              className="bg-Complemetary text-Primary px-4 py-2 rounded"
            >
              Back
            </button>
            </div>
          </Form>
        )}
      </Formik>
      
    </div>
  );
};

export default UserForm;
