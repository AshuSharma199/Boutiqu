
import { useState } from "react";
import Footer from "./Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // Reset after submit
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    alert("✅ Your message has been sent!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center pt-2">
      <section
      className="w-full bg-center bg text-white py-32"
      style={{
        backgroundImage: "url(public/contactus.png)", // place your image inside public folder
      }}
      >  
    
      </section>

      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d96d67] focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d96d67] focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d96d67] focus:outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#d96d67] text-white py-2 rounded-lg font-semibold hover:bg-[#d96d67] transition"
          >
            Send Message
          </button>
        </form>
      </div>      
    </div>

    
  );
}
