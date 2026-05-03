import React from "react";

const Counter = () => {
  return (
    <div className="flex gap-35 justify-center items-center text-gray-600 max-w-300 mx-auto p-8 bg-[#FFf] shadow-xl rounded-2xl">
      <CounterDetails count={"47k+"} desc={"Active Users"} />
      <CounterDetails count={"3.2M"} desc={"Tasks Organized"} />
      <CounterDetails count={"2.4X"} desc={"More Shipped"} />
      <CounterDetails count={"4.9"} desc={"Avg. Rating"} />
    </div>
  );
};

export default Counter;

const CounterDetails = ({ count, desc }) => {
  return (
    <div>
      <h1 className="block text-[48px] bg-gradient-to-r from-orange-400 via-pink-600 to-red-600 bg-clip-text text-transparent font-[700] text-center">
        {count}
      </h1>
      <p className="text-[18px] text-center text-black">{desc}</p>
    </div>
  );
};
