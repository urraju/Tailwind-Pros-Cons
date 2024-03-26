import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Home = ({ title, cons, pros, isFirst, isLast, last }) => {
  return (
    <div className={`max-w-screen-xl mx-auto  px-2 lg:px-0`}>
      <div className="bg-gray-800 hover:bg-gray-900 duration-200 text-white rounded-lg mb-5">
        {pros && cons ? (
          <div className="">
            <p
              className={
                isFirst ? "text-xl capitalize font-semibold py-2 px-6" : null
              }
            >
              {title}
            </p>
            <ul
              className={`border-green-500 border-t-2 border-opacity-60 ${
                isFirst
                  ? "border-t-transparent rounded-t-none"
                  : "rounded-t-lg"
              } border-l-2 border-r-2 p-4 rounded-none`}
            >
              {pros.map((item, index) => (
                <li key={index}>
                  <div className="flex gap-2 items-center  rounded-t-lg">
                    <IoMdCheckmarkCircleOutline className="text-green-500 min-h-4 min-w-4" />
                    <p>{item}</p>
                  </div>
                </li>
              ))}
            </ul>
            <ul
              className={`border-red-600 border-b-2  rounded-b-lg border-opacity-60 ${
                isLast ? "border-transparent rounded-b-lg" : ""
              } border-r-2 border-l-2 p-4`}
            >
              {cons.map((item, index) => (
                <li key={index} className="flex gap-2 items-center">
                  <RxCross2 className="text-red-500 min-h-4 min-w-4" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <>
            {pros ? (
              <div>
                {last ? (
                  <p className=" px-6 text-3xl py-2 font-semibold">{last}</p>
                ) : null}
                <ul
                  className={`border-green-500 border-2 rounded-lg border-opacity-60 ${
                    isLast
                      ? " rounded-b-lg border-t-transparent rounded-t-none"
                      : ""
                  } p-3`}
                >
                  {pros.map((item, index) => (
                    <li key={index} className="flex gap-2 items-center">
                      <IoMdCheckmarkCircleOutline className="text-green-500 min-h-4 min-w-4 " />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {cons ? (
              <ul
                className={`border-red-600 border-2 border-opacity-60 ${
                  isLast ? "rounded-b-lg border-transparent" : "rounded-lg"
                } p-3`}
              >
                {cons.map((item, index) => (
                  <li key={index} className="flex gap-2 items-center">
                    <RxCross2 className="text-red-500 min-h-4 min-w-4" />
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
