import React from "react";
import { navlinks } from "../constants";
// import { FaInstagramSquare } from "react-icons/fa";

const ButtonLink = () => {
  return (
    <div className="flex w-[450px] flex-col sm:w-[525px] md:w-[600px]">
      {navlinks.map((link) => {
        return (
          <div
            key={link.title}
            className="m-2 rounded-full  bg-slate-100 p-3 shadow-lg shadow-slate-500/40 duration-300 hover:scale-105 hover:ring-2 hover:ring-emerald-600 sm:p-4"
          >
            <a
              href={link.url}
              target="blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-between bg-slate-100 "
            >
              <img
                src={link.imgLeft}
                alt={link.imgLeft}
                className="h-6 flex-none md:h-8"
              />
              <h3
                className={`flex flex-1 justify-center bg-slate-100 font-semibold sm:text-lg md:text-xl  ${
                  !link.myWallet && "mr-6"
                }`}
              >
                {...link.title}
              </h3>
              {link.myWallet && (
                <div>
                  <p className="text-[6px]">{link.myWallet}</p>
                </div>
              )}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ButtonLink;
