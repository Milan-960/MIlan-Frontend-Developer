import React, { useState, useEffect, useCallback } from "react";
import { fetchCapsules } from "../services/spacexService";

export const CapsulesContext = React.createContext();

export const CapsulesProvider = ({ children }) => {
  const [allCapsules, setAllCapsules] = useState([]);
  const [capsules, setCapsules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [types, setTypes] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [launches, setLaunches] = useState([]);

  // Filter capsules based on filter selections
  const handleFiltersChange = useCallback(
    (typeFilter, statusFilter, launchFilter) => {
      let filteredCapsules = allCapsules;

      if (typeFilter) {
        filteredCapsules = filteredCapsules.filter(
          (capsule) => capsule.type && capsule.type === typeFilter.value
        );
      }

      if (statusFilter) {
        filteredCapsules = filteredCapsules.filter(
          (capsule) => capsule.status && capsule.status === statusFilter.value
        );
      }

      if (launchFilter) {
        filteredCapsules = filteredCapsules.filter(
          (capsule) =>
            capsule.original_launch &&
            capsule.original_launch === launchFilter.value
        );
      }

      setCapsules(filteredCapsules);
    },
    [allCapsules] // Only re-calculate the function when allCapsules data changes
  );

  // Fetch capsules data on first render
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchCapsules();
      setAllCapsules(data);
      setTypes([...new Set(data.map((item) => item.type))]);
      setStatuses([...new Set(data.map((item) => item.status))]);
      setLaunches([...new Set(data.map((item) => item.original_launch))]);
      setLoading(false);
    };
    fetchData();
  }, []);

  // Set filtered capsules whenever all capsules data is updated
  useEffect(() => {
    setCapsules(allCapsules);
  }, [allCapsules]);

  return (
    <CapsulesContext.Provider
      value={{
        capsules,
        loading,
        types,
        statuses,
        launches,
        handleFiltersChange,
      }}
    >
      {children}
    </CapsulesContext.Provider>
  );
};
