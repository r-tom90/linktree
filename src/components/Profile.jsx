import React from "react";
import pic from "../assets/Titan.jpeg";
import { profileInfo } from "../constants";

const Profile = () => {
  return (
    <div className="flex min-w-[450px] flex-col items-center p-4">
      <div className="relative">
        <div className="h-[120px] w-[120px] animate-spin-slow rounded-full bg-gradient-to-t from-teal-500 via-yellow-400 to-cyan-500" />
        <img
          src={pic}
          alt="profile picture"
          className="z-1 absolute left-1 top-1 h-28 w-28 rounded-full object-cover"
        />
      </div>
      <section className="mt-6 text-center">
        <h1 className="flex items-end justify-center border-none text-xl font-bold md:text-3xl">
          {profileInfo.name}
          <p className="ml-1 text-base font-light italic md:text-xl">
            {profileInfo.nickname}
          </p>
        </h1>
        <p className="text-base font-light text-stone-600 md:text-xl">
          {profileInfo.description}
        </p>
      </section>
    </div>
  );
};

export default Profile;
