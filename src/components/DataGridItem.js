import React from "react";

function DataGridItem({ data, onSelect }) {
  return (
    <section>
      <div className="bg-blue-100 p-4 rounded-md shadow-lg text-start">
        <h2 className="text-xl">Serial: {data.capsule_serial}</h2>
        <p className="mt-1">Type: {data.type}</p>
        <p className="mt-1">Status: {data.status}</p>
        <p className="mt-1">Original Launch: {data.original_launch}</p>
        <p className="mt-1">Landings: {data.landings}</p>
        <p className="mt-1">Reuse Count: {data.reuse_count}</p>

        <button
          onClick={() => onSelect(data)}
          className="w-full p-2 mt-2 rounded-md bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-300"
        >
          View Details
        </button>
      </div>
    </section>
  );
}

export default DataGridItem;
