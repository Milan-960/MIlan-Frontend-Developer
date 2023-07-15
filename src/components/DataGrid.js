import React from "react";
import DataGridItem from "./DataGridItem";

function DataGrid({ data, onSelect }) {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {data.map((item, index) => (
          <DataGridItem key={index} data={item} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}

export default DataGrid;
