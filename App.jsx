import { Outlet, Link } from "react-router-dom";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="p-10">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
          Our Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Example Product Card */}
          {[
            { name: "Elegant Saree", img: "https://i.pinimg.com/originals/57/5e/c8/575ec8cbdfc3f825c4c231a71582dc04.jpg" },
            { name: "Designer Lehenga", img: "https://www.rajwadi.com/image/cache/data/designer-chiffon-lehenga-choli-for-women-41879-800x1100.jpg" },
            { name: "Traditional Kurti", img: "https://i.etsystatic.com/26083335/r/il/914d95/3104679691/il_1588xN.3104679691_ekor.jpg" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-700">
                  {item.name}
                </h3>
                <button className="mt-3 px-4 py-2 bg-[#d96d67] text-white rounded-lg hover:bg-[#d96d67]">
                  View Design
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/786895452256" // replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}



