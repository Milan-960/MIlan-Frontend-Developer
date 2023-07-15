import React, { useState, useEffect, useCallback } from "react";
import Select from "react-select";

function SearchForm({ types, statuses, onFiltersChange, launches }) {
  const [selectedLaunch, setSelectedLaunch] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);

  // Map launches, types, and statuses properties
  const launchOptions = launches.map((launch) => ({
    value: launch,
    label: launch,
  }));

  const typeOptions = types.map((type) => ({
    value: type,
    label: type,
  }));

  const statusOptions = statuses.map((status) => ({
    value: status,
    label: status,
  }));

  // Define change handlers for each dropdown
  const handleLaunchChange = useCallback((selectedOption) => {
    setSelectedLaunch(selectedOption);
  }, []);

  const handleTypeChange = useCallback((selectedOption) => {
    setSelectedType(selectedOption);
  }, []);

  const handleStatusChange = useCallback((selectedOption) => {
    setSelectedStatus(selectedOption);
  }, []);

  // Define a reset handler to clear all filters
  const onReset = useCallback(() => {
    setSelectedLaunch(null);
    setSelectedType(null);
    setSelectedStatus(null);
  }, []);

  // Whenever a filter is changed, call the onFiltersChange callback
  useEffect(() => {
    if (onFiltersChange) {
      onFiltersChange(selectedType, selectedStatus, selectedLaunch);
    }
  }, [selectedType, selectedStatus, selectedLaunch, onFiltersChange]);

  return (
    <section id="searchForm">
      <h1 className="text-start p-4 text-lg	font-bold">Search Filters</h1>
      <div className="flex flex-col sm:flex-row gap-3 p-4">
        <Select
          options={launchOptions}
          value={selectedLaunch}
          name="launch"
          onChange={handleLaunchChange}
          placeholder="Filter by Launch"
          className="w-full sm:w-auto"
        />
        <Select
          options={typeOptions}
          value={selectedType}
          name="type"
          onChange={handleTypeChange}
          placeholder="Filter by Type"
          className="w-full sm:w-auto"
        />
        <Select
          options={statusOptions}
          value={selectedStatus}
          name="status"
          onChange={handleStatusChange}
          placeholder="Filter by Status"
          className="w-full sm:w-auto"
        />
        <button
          onClick={onReset}
          className="max-w-md p-2 rounded-md bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-300"
        >
          Reset
        </button>
      </div>
    </section>
  );
}

export default SearchForm;
