import React from "react";

const FilterCard = () => {
  const data = [
    {
      filterType: "Location",
      array: ["Delhi NCR", "Banglore", "Hyderabad", "Pune", "Mumbai"],
    },
    {
      filterType: "Industry",
      array: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
    },
    {
      filterType: "Salary",
      array: ["0-40k", "42-1Lakh", "1Lakh to 5Lakh"],
    },
  ];
  return (
    <div>
      <div className="pt-4">
        <h1 className="text-emerald-400 font-bold text-lg">FILTER JOBS</h1>
        <hr className="mt-3  w-44"></hr>
        <div>
          {data.map((data, index) => (
            <div className="my-3 ">
              <h1 className="font-bold">{data.filterType}</h1>
              {data.array.map((item, index) => {
                return (
                  <div className="flex space-x-2 ">
                    <input type="radio" value={item} />
                    <label className="ml-2">{item}</label>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
