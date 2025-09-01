import { useState } from "react";

export default function Clothing() {
  const products = [
    { name: "Elegant Saree", price: "₹3,999", category: "Saree", img: "https://i.pinimg.com/originals/57/5e/c8/575ec8cbdfc3f825c4c231a71582dc04.jpg" },
    { name: "Designer Lehenga", price: "₹7,499", category: "Lehenga", img: "https://www.rajwadi.com/image/cache/data/designer-chiffon-lehenga-choli-for-women-41879-800x1100.jpg" },
    { name: "Traditional Kurti", price: "₹1,499", category: "Kurti", img: "https://i.etsystatic.com/26083335/r/il/914d95/3104679691/il_1588xN.3104679691_ekor.jpg" },
    { name: "Anarkali Suit", price: "₹2,999", category: "Suit", img: "https://modersvp.com/wp-content/uploads/2018/01/SuiStudio-Suits-for-women-julia-comil-fashion-blogger-16-of-22.jpg" },
    { name: "Party Gown", price: "₹5,999", category: "Gown", img: "https://www.adeladesigns.com/wp-content/uploads/2020/09/WD2038-4.jpg" },
    { name: "Bridal Lehenga", price: "₹12,999", category: "Lehenga", img: "https://www.kalkifashion.com/media/wysiwyg/bridal-lehenga.jpg" },

    // 👇 Added 10 more
    { name: "Silk Saree", price: "₹4,499", category: "Saree", img: "https://m.timesofindia.com/photo/97951097/97951097.jpg" },
    { name: "Banarasi Saree", price: "₹6,999", category: "Saree", img: "https://i.etsystatic.com/26521752/r/il/67d073/2819813185/il_1588xN.2819813185_9u8p.jpg" },
    { name: "Cotton Kurti", price: "₹899", category: "Kurti", img: "https://i.etsystatic.com/22489341/r/il/5202da/3203911478/il_fullxfull.3203911478_pkgx.jpg" },
    { name: "Printed Kurti", price: "₹1,199", category: "Kurti", img: "https://static.cilory.com/550548-thickbox_default/white-flared-embroidered-cotton-long-kurti.jpg" },
    { name: "Straight Suit", price: "₹2,499", category: "Suit", img: "https://www.simonjersey.com/images/qualitas-womens-black-suit-p1187-124320_image.jpg" },
    { name: "Sharara Suit", price: "₹3,499", category: "Suit", img: "https://www.simonjersey.com/images/contemporary-womens-blue-suit-p1181-123234_image.jpg" },
    { name: "Designer Gown", price: "₹8,999", category: "Gown", img: "https://lzd-img-global.slatic.net/g/p/9bd29e48ed683545359cd09b811ba0c0.jpg_720x720q80.jpg" },
    { name: "Evening Gown", price: "₹7,499", category: "Gown", img: "http://publicifashion.com/wp-content/uploads/2014/01/Elegant-Womens-Formal-Dresses.jpg" },
    { name: "Heavy Bridal Lehenga", price: "₹15,999", category: "Lehenga", img: "https://img.likeadiva.com/pimages/1667830338112.jpg" },
    { name: "Festival Saree", price: "₹3,499", category: "Saree", img: "https://2.bp.blogspot.com/-SgLVvjHuizs/UsGiLKklDRI/AAAAAAAAF84/gKmo7Vh4EOI/s1600/Trisha+-+Pothy's+Samudrika+Pattu+5.jpg" },
  ];

  const categories = ["All", "Saree", "Lehenga", "Kurti", "Suit", "Gown"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="p-10 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
        Our Clothing Collection
      </h2>

      {/* Filters */}
      <div className="flex justify-center mb-8 gap-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg border transition ${
              selectedCategory === cat
                ? "bg-amber-400 text-white border-amber-400"
                : "border-amber-400 text-amber-500 hover:bg-amber-400 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.map((item, index) => (
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
              <p className="text-gray-500 text-sm">{item.category}</p>
              <p className="text-amber-500 font-bold mt-2">{item.price}</p>
              <button className="mt-3 px-4 py-2 bg-amber-400 text-white rounded-lg hover:bg-amber-500">
                View Design
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
