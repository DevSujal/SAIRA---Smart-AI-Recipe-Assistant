import React from 'react';
import ListItem from './ListItem';
import IngridentItem from './IngridentItem';

const Steps = (props) => {
  return (
    <div className="p-8 md:p-10 bg-white border-y-2 border-green-400">
      {/* Ingredients Section */}
      <div className="ingredients pb-8">
        <h2 className="border-b-2 border-[#4CAF50] font-bold text-2xl mb-4 ">Ingredients</h2>
        <ul className="px-4 flex flex-col gap-3 list-decimal font-medium text-lg text-gray-700">
          {props.ingredients.map((ingredient, index) => (
            <IngridentItem key={index}>{ingredient}</IngridentItem>
          ))}
        </ul>
      </div>

      {/* Steps Section */}
      <div className="steps">
        <h2 className="border-b-2 border-[#4CAF50] font-bold text-2xl mb-4 ">Steps</h2>
        <ol className="px-4 space-y-2 list-decimal font-medium text-lg text-gray-700">
          {props.steps.map((step, index) => (
            <ListItem key={index}>{step}</ListItem>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Steps;
