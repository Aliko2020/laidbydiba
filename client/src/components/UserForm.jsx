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
    terms: Yup.boolean()
      .oneOf([true], 'Please accept the terms and condition to continue')
      .required('Please accept the terms and condition to continue'),
  });

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-xl w-full mt-4">
        <h2 className="text-2xl md:text-4xl text-center font-bold my-4">Contact Information</h2>
        <p className="mb-4 text-center">
          Thank you for choosing our services! Please fill out the form below with your details. Proceed to payment. Once done, our team will contact you shortly to confirm your booking.
        </p>
        <Formik
          initialValues={{ name: '', email: '', phone: '', terms: false }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            onSubmit(values);
            navigate('/payment');
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label className="block mb-2 font-bold">Name*</label>
                <Field
                  type="text"
                  name="name"
                  className="border rounded w-full py-2 px-3 focus:outline-none"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold">Email (optional)</label>
                <Field
                  type="email"
                  name="email"
                  className="border rounded w-full py-2 px-3 focus:outline-none"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold">Phone*</label>
                <div className="flex gap-2 items-center">
                  <label className="border p-2 rounded">+233</label>
                  <Field
                    type="text"
                    name="phone"
                    className="border rounded w-full py-2 px-3 focus:outline-none"
                  />
                </div>
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="my-8">
                <label className="block mb-2 font-bold">
                  <Field type="checkbox" name="terms" className="mr-2" />
                  You will be charged a fee of GHC 20*
                </label>
                <ErrorMessage name="terms" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="flex justify-between mt-8">
                <button type="submit" className="btn btn-secondary" disabled={isSubmitting}>
                  Proceed to Payment
                </button>
                <button onClick={() => navigate(-1)} className="btn btn-secondary">
                  Back
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UserForm;
