import { Link } from "react-router-dom";
import keyboardImg from "./assets/images/keyboard.jpg";
import mouseImg from "./assets/images/mouse.png";
import printerImg from "./assets/images/printer.jpg";
import scannerImg from "./assets/images/scanner.jpg";
import pcFamilyImg from "./assets/images/pc family.png";

const accessories = [
  {
    id: 1,
    name: "Keyboards",
    image: keyboardImg,
    category: "accessory",
    newPrice: "$50",
    oldPrice: "$60",
    title: "High-quality mechanical keyboard for all typing needs.",
  },
  {
    id: 2,
    name: "Mouse",
    image: mouseImg,
    category: "accessory",
    newPrice: "$30",
    oldPrice: "$40",
    title: "Ergonomic and responsive gaming mouse.",
  },
  {
    id: 3,
    name: "Printer",
    image: printerImg,
    category: "accessory",
    newPrice: "$150",
    oldPrice: "$180",
    title: "Reliable printer for home and office use.",
  },
  {
    id: 4,
    name: "Scanner",
    image: scannerImg,
    category: "accessory",
    newPrice: "$120",
    oldPrice: "$140",
    title: "High-resolution scanner for documents and photos.",
  },
  {
    id: 5,
    name: "PC Accessories",
    image: pcFamilyImg,
    category: "accessory",
    newPrice: "$200",
    oldPrice: "$230",
    title: "Various PC accessories for every setup.",
  },
];

const Accessories = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white uppercase">
            All Accessories Sales and Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {accessories.map((item) => (
            <div
              key={item.id}
              className="text-center"
            >
              <h4 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">
                {item.name}
              </h4>
              <div className="w-full h-40 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                <Link
                  to={`/productdetails/${item.category}-${item.id}?type=${item.category}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-32 object-contain mx-auto"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = scannerImg;
                    }}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accessories;
export { accessories };
