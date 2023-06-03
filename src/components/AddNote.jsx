import React from 'react';
// Import Formik and Yup
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddNote = (props) => {

  // add form logic here
  const initialValues = {
    title: '',
    content: '',
  }
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    content: Yup.string().required("Content is required")
  });
  const handleSubmit = (values, { resetForm }) => {
    props.createNote({
      title: values.title,
      content: values.content
    })


    console.log(values);

    // Reset the form after submission
    resetForm();
  };

  return (
    <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className='mb-5'>
            <Field
              type="text"
              id="name"
              name="title"
              placeholder="Title"
              className="border border-gray-300 shadow p-3 w-full rounded mb-"
            />
            <ErrorMessage name="title" component="div" className="text-red-500" />
          </div>

          <div className="mb-5">
            <Field
              type="textArea"
              id="content"
              name="content"
              placeholder="Add text here"
              className="border border-gray-300 shadow p-12 w-full rounded mb-"
            />
            <ErrorMessage name="content" component="div" className="text-red-500" />
          </div>
          <button type='submit' className='block w-full bg-yellow-400 text-black font-bold p-4 rounded-lg hover:bg-green-500'>Add Note</button>

        </Form>
      </Formik>
    </div>
  );
};

export default AddNote;
