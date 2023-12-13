import { useState } from "react";
// import { AiFillPhone } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    // You can send the form data to your backend or perform any other actions
  };
  return (
    <div className="grid grid-cols-2 my-16 py-16">
      <div className="w-3/4 mx-auto mt-8 p-8 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-[#331A15]">Contract with us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 w-full border rounded-md"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
      <div>
      <div>
              <h2 className="mb-4 md:mb-7 text-2xl md:text-2xl font-rancho text-[#331A15]">
                Get in Touch
              </h2>
              <div className="flex items-center gap-3 mb-6">
                {/* <AiFillPhone className="text-base md:text-xl w-4 md:w-6 text-[#331A15]" /> */}
                <FaPhoneAlt className="text-base md:text-xl w-4 md:w-6 text-[#331A15]"/>
                <p className="text-sm md:text-xl font-raleway leading-7 md:leading-9">
                  +44 7542139268
                </p>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <MdEmail className="text-base md:text-xl w-4 md:w-6 text-[#331A15]" />
                <p className="text-sm md:text-xl font-raleway leading-7 md:leading-9">
                  mdjahedahmed12@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <FaLocationDot className="text-base md:text-xl w-4 md:w-6 text-[#331A15]" />
                <p className="text-sm md:text-xl font-raleway leading-7 md:leading-9">
                  137 London Road, MK42 OQA,Bedford
                </p>
              </div>
            </div>
      </div>
    </div>
  );
};

export default Contact;
