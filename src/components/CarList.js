import React from 'react';
import Car from './Car';

function CarList() {
    const allCars = [
        { brand: "Toyota", color: "Corolla", year: "2023" },
        { brand: "Honda", color: "Civic", year: "2023" },
        { brand: "Ford", color: "Mustang", year: "2023" },
        { brand: "BMW", color: "3 Series", year: "2023" },
        { brand: "Mercedes-Benz", color: "E-Class", year: "2023" },
        { brand: "Audi", color: "Q5", year: "2023" },
        { brand: "Chevrolet", color: "Silverado", year: "2023" },
        { brand: "Nissan", color: "Rogue", year: "2023" },
        { brand: "Hyundai", color: "Tucson", year: "2023" },
        { brand: "Jeep", color: "Wrangler", year: "2023" }
      ];

  const Cars = allCars.map((data, i) => (
    <li key={i}>{data.brand} : {data.color}</li>
  ));

  return (
    <ul>
      {Cars}
      {allCars.map((details, i) => <li><Car key={i} details={details} /></li> )}
    </ul>
  );
}

export default CarList;
