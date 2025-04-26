import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then(setPlants);
  }, []);

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function handleSearchChange(term) {
    setSearchTerm(term);
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearchChange={handleSearchChange} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
