"use client";

import { useState } from "react";

const services = [
  { name: "TikTok Followers", pricePer1000: 3 },
  { name: "Instagram Likes", pricePer1000: 2 },
  { name: "YouTube Views", pricePer1000: 4 },
  { name: "Facebook Reactions", pricePer1000: 2.5 },
];

export default function NewOrderPage() {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [quantity, setQuantity] = useState(1000);

  const totalPrice = (quantity / 1000) * selectedService.pricePer1000;

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">Create New Order</h1>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-3xl">
        <div className="space-y-6">
          <div>
            <label className="block mb-2 text-gray-300">Select Service</label>

            <select
              className="w-full rounded-xl bg-black border border-zinc-700 px-4 py-3 outline-none focus:border-blue-500"
              value={selectedService.name}
              onChange={(e) => {
                const service = services.find(
                  (item) => item.name === e.target.value
                );

                if (service) {
                  setSelectedService(service);
                }
              }}
            >
              {services.map((service) => (
                <option key={service.name} value={service.name}>
                  {service.name} - ${service.pricePer1000} per 1000
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Profile/Post Link</label>

            <input
              type="text"
              placeholder="https://"
              className="w-full rounded-xl bg-black border border-zinc-700 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Quantity</label>

            <input
              type="number"
              value={quantity}
              min={100}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full rounded-xl bg-black border border-zinc-700 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div className="bg-black border border-zinc-800 rounded-xl p-4">
            <p className="text-gray-400 mb-2">Estimated Price</p>

            <h2 className="text-3xl font-bold">
              ${totalPrice.toFixed(2)}
            </h2>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition">
            Place Order
          </button>
        </div>
      </div>
    </main>
  );
}