import React, { useState, useContext } from "react";

import { CapsulesContext } from "./hooks/CapsulesProvider";

import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import DataGrid from "./components/DataGrid";
import Pagination from "./ui/Pagination";
import Modal from "./ui/Modal";
import SpaceInfo from "./components/Space-Info";

import "./App.css";

const App = () => {
  const { capsules, loading, types, statuses, launches, handleFiltersChange } =
    useContext(CapsulesContext);

  const [selectedCapsule, setSelectedCapsule] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calculate current items for pagination
  const currentItems = capsules.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Change page number
  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Handle item selection and open modal
  const handleSelect = (item) => {
    setSelectedCapsule(item);
    setIsModalOpen(true);
  };

  // Close modal and clear selected capsule
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCapsule(null);
  };

  return (
    <div className="App">
      <Header />

      <SpaceInfo />

      {loading ? (
        <h1 className="text-center">Loading...</h1>
      ) : (
        <>
          <SearchForm
            onFiltersChange={handleFiltersChange}
            types={types}
            statuses={statuses}
            launches={launches}
          />

          {capsules.length > 0 ? (
            <>
              <DataGrid data={currentItems} onSelect={handleSelect} />
              <Pagination
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={capsules.length}
                onPageChange={onPageChange}
              />
            </>
          ) : (
            <h1 className="text-center p-4 text-lg font-bold">
              No capsules found
            </h1>
          )}

          {isModalOpen && selectedCapsule && (
            <Modal item={selectedCapsule} onClose={handleCloseModal} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
