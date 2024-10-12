// components/Nutrition.js
import React from 'react';

const Nutritions = ({ nutritionData }) => {
  const nutritions = [
    ["Calories", "kcal"],
    ["Total Fat", "g"],
    ["Sodium", "mg"],
    ["Protein", "g"],
    ["Total Carbohydrate", "g"],
    ["Sugar", "g"],
    ["Fiber", "g"]
  ];

  return (
    <div className="Nutrients">
      <h2 className='border-b-2 border-[#57c233] font-bold w-fit pr-6 text-xl mb-3'>Nutritions</h2>
      <ul className='px-3 space-y-2 font-medium text-lg pr-4'>
        {nutritions.map((nutrition, index) => (
          <li key={index} className='flex justify-between'>
            <span>{nutrition[0]}</span>
            <span>{nutritionData[index]} {nutrition[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nutritions;
