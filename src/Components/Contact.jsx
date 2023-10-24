import React from "react";
import { useFormik } from "formik";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <div className="text-white ml-10 p-4">
      <form className="" onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-5">
            <label htmlFor="firstName" className="mb-3 text-base text-textGold">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="custom-input"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              autoComplete="off"
              required
            />
          </div>

          <div className="flex flex-col gap-5">
            <label htmlFor="lastName" className="mb-3 text-base text-textGold ">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="custom-input"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              autoComplete="off"
              required
            />
          </div>

          <div className="flex flex-col gap-5">
            <label htmlFor="email" className="mb-3 text-base text-textGold">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="custom-input"
              onChange={formik.handleChange}
              value={formik.values.email}
              autoComplete="off"
              required
            />
          </div>
          <div className="flex flex-col gap-5">
            <label
              htmlFor="contactNumber"
              className="mb-3 text-base text-textGold"
            >
              Contact Number
            </label>
            <input
              id="contactNumber"
              name="contactNumber"
              type="number"
              className="custom-input"
              onChange={formik.handleChange}
              value={formik.values.contactNumber}
              autoComplete="off"
              required
            />
          </div>
          <div className="flex flex-col gap-5">
            <label htmlFor="message" className="mb-3 text-base text-textGold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              className="custom-input  min-w-full -mt-5"
              onChange={formik.handleChange}
              value={formik.values.message}
              autoComplete="off"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-5 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
