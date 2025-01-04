import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faBoxOpen } from "@fortawesome/free-solid-svg-icons";

const DeliveryReturns = () => {
  return (
    <div className="mt-10 bg-black p-6 text-white md:mt-0">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <div className="mb-4 flex items-center">
            <FontAwesomeIcon icon={faTruck} className="mr-2 h-5 w-5" />
            <h2 className="text-lg font-semibold">Delivery</h2>
          </div>
          <p className="mb-1 text-sm">- Delivery to most countries is free.</p>
          <p className="mb-4 text-sm">
            - Delivery to most countries is 2-3 working days.
          </p>
          <p className="mb-2 text-sm">Check your shipping cost and times</p>
          <select className="border border-white bg-transparent p-2 text-sm text-white">
            <option>Select country/region</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Canada</option>
          </select>
        </div>

        <div>
          <div className="mb-4 flex items-center">
            <FontAwesomeIcon icon={faBoxOpen} className="mr-2 h-5 w-5" />
            <h2 className="text-lg font-semibold">Returns</h2>
          </div>
          <p className="mb-4 text-sm">
            <span className="font-bold">
              For full priced items we offer a full refund or free exchange if
              the item is unsuitable.
            </span>
          </p>
          <p className="text-sm">
            For more info on our delivery & returns processes & policies please{" "}
            <a href="#" className="text-blue-400 underline hover:text-blue-600">
              Click Here
            </a>
          </p>
        </div>
      </div>

      <div className="mt-6">
        <button className="text-sm font-bold text-white underline">
          Contact +
        </button>
      </div>
    </div>
  );
};

export default DeliveryReturns;
