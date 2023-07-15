import React from "react";

const Modal = ({ onClose, item }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4 pb-6 sm:p-0">
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-blue-300 opacity-75"></div>
      </div>

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
        className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all my-8 align-middle max-w-full sm:max-w-lg w-full sm:p-6"
      >
        <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <span className="sr-only">Close</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div className="sm:flex sm:items-start">
          <div className="mt-3 sm:mt-0 sm:text-left w-full">
            <h3
              className="text-lg leading-6 font-medium text-gray-900"
              id="modal-headline"
            >
              {item.capsule_serial}
            </h3>
            <div className="mt-2">
              <p className="mt-1">Details: {item.details}</p>
              <p className="mt-1">Status: {item.status}</p>
              <p className="mt-1">Type: {item.type}</p>
              <p className="mt-1">Original Launch: {item.original_launch}</p>
              <p className="mt-1">Landings: {item.landings}</p>
              <p className="mt-1">Reuse Count: {item.reuse_count}</p>

              <div>
                <p>Mission Details: </p>
                {item.missions &&
                  item.missions.map((mission, index) => (
                    <div key={index} className="mt-1">
                      <span className=" mr-3">Name: {mission.name}</span>
                      <span>Flight: {mission.flight}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
          <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
            <button
              onClick={onClose}
              className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-500 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-400 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            >
              Close
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
