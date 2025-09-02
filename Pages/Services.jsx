import React from "react";
import { FaTshirt, FaShippingFast, FaRupeeSign, FaPaintBrush } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaTshirt className="text-4xl text-[#d96d67]" />,
      title: "Custom Tailoring",
      desc: "Personalized tailoring services for traditional and modern outfits to fit your style perfectly.",
    },
    {
      id: 2,
      icon: <FaPaintBrush className="text-4xl text-[#d96d67]" />,
      title: "Designer Outfits",
      desc: "Exclusive designer collections crafted with elegance and attention to detail.",
    },
    {
      id: 3,
      icon: <FaShippingFast className="text-4xl text-[#d96d67]" />,
      title: "Fast Delivery",
      desc: "Get your favorite outfits delivered quickly with our reliable delivery services.",
    },
    {
      id: 4,
      icon: <FaRupeeSign className="text-4xl text-[#d96d67]" />,
      title: "Affordable Pricing",
      desc: "Premium quality fashion at prices that suit every budget.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 mb-12">
          At <span className="text-[#e48681] font-semibold">Vastram Boutique</span>, we provide a wide range 
          of fashion and tailoring services to make you stand out with confidence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
