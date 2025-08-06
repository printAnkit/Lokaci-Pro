import sic from "../../assets/SIC.png";
import { CornerRightDown, Package, Rocket, SquareCheckBig } from "lucide-react";

const features = [
  {
    title: "Real-Time Stock Tracking",
    points: [
      "Monitor inventory levels live across all locations",
      "Track stock by product, brand, batch, or category",
      "Get alerts for low stock or expired items",
      "Avoid overstocking and understocking",
    ],
  },
  {
    title: "Automatic Reorder Alerts",
    points: [
      "Set minimum stock thresholds per product",
      "Get notified when it’s time to reorder",
      "Generate smart purchase suggestions",
      "Never forget to restock again",
    ],
  },
  {
    title: "Usage-Based Inventory Deduction",
    points: [
      "Auto-deduct stock when used in services",
      "Track usage by service or staff",
      "Identify high-consumption areas",
      "Reduce waste and overuse",
    ],
  },
  {
    title: "Multi-Location & Warehouse Support",
    points: [
      "Manage inventory across multiple branches",
      "Transfer stock between locations",
      "Maintain centralized or separate stock levels",
      "Ideal for expanding businesses",
    ],
  },
  {
    title: "Stock Valuation & Cost Analysis",
    points: [
      "See total value of inventory in real time",
      "Track cost of goods sold (COGS)",
      "View profit margins by product or brand",
      "Make informed purchasing decisions",
    ],
  },
  {
    title: "Product Expiry & Batch Tracking",
    points: [
      "Track expiry dates and batches per product",
      "Prevent usage of expired items",
      "Manage perishable stock effectively",
      "Critical for health and wellness businesses",
    ],
  },
  {
    title: "Barcode Scanning Support",
    points: [
      "Add or manage stock using barcode scanners",
      "Speed up check-in/check-out process",
      "Minimize manual entry errors",
      "Compatible with most scanners",
    ],
  },
  {
    title: "Inventory Reports & Forecasting",
    points: [
      "See trends in product usage and sales",
      "Forecast demand based on historical data",
      "Plan future purchases smarter",
      "Cut waste and reduce carrying costs",
    ],
  },
];

const reasons = [
  {
    title: "Always Stocked",
    description:
      "Avoid running out of essential products when you need them most.",
  },
  {
    title: "Save Time",
    description: "Automate manual inventory tracking and ordering.",
  },
  {
    title: "Reduce Waste",
    description: "Track real usage to avoid over-ordering or spoilage.",
  },
  {
    title: "Gain Insights",
    description: "Understand which products perform best.",
  },
  {
    title: "Scale Confidently",
    description: "Manage stock across multiple locations with ease.",
  },
];

export default function SIC() {
  return (
    <div className=" text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center gap-4 mb-10">
          <div>
            <div className="flex flex-col items-center justify-center gap-4 ">
                <Package className="w-10 h-11 text-black"/>
              <h1 className="text-black text-3xl md:text-5xl font-bold text-center mb-4 md:mb-8">
                Smart Inventory Control
              </h1>
            </div>
            <p className="text-gray-700 text-lg font-semibold text-center mb-10 max-w-5xl mx-auto">
              Never run out of products again. Our Smart Inventory Control
              system gives you full visibility with real-time stock tracking,
              auto-reorder alerts, usage-based deduction, and detailed cost
              analysis - so you can manage inventory effortlessly and
              efficiently.
            </p>
          </div>
          <div className="border-1 rounded-lg md:rounded-3xl overflow-hidden">
            <img src={sic} alt="" className="w-300" />
          </div>
        </div>

        {/* Features Section */}
        <div className="flex flex-row gap-4 items-center justify-center mt-20 md:mb-10 ">
          <h1 className="text-3xl md:text-5xl font-bold text-black ">Features</h1>
          <CornerRightDown className=" size-8 mt-6 text-black " />
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md w-90">
              <div className="flex gap-4 text-blue-600">
                <SquareCheckBig className="w-5" />
                <h3 className="text-xl font-semibold mb-4 text-black">
                  {feature.title}
                </h3>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                {feature.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Choose Section */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center text-center mb-6">
            <Rocket className="w-15 h-12 text-black" />
            <h2 className="text-3xl font-bold ">
                Why Choose <span className="text-gray-900">"Lokaci Pro"</span> Smart Inventory Control?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-gray-50 p-5 rounded-lg shadow border border-gray-100"
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {reason.title}
                </h4>
                <p className="text-sm text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Take Control of Your Inventory - The Smart Way
          </h3>
          <p className="text-gray-700 mb-6">
            Say goodbye to stockouts and overordering. Automate your inventory
            today.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition cursor-pointer">
            Start Managing Smarter
          </button>
        </div>
      </div>
    </div>
  );
}
