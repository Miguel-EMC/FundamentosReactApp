import React from "react";
import { AbueloProvider } from "../context/AbueloProvider";
import Abuelo from "./Abuelo";

const Casa = () => {
  return (
    <AbueloProvider>
      <div className="bg-yellow-50 h-full border-1 border-slate-400 shadow-2xl">
        <p className="text-center mt-3 text-2xl">¡Yo soy la casa!</p>

        <div className="flex justify-evenly items-end h-5/6 ">
          <div className="bg-lime-100 w-full h-96 m-2 border-2 border-slate-800 font-bold">
            <Abuelo />
          </div>
        </div>
      </div>
    </AbueloProvider>
  );
};

export default Casa;
