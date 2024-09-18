import React from "react";
 
export default function About() {
  return (
    <div className=" px-2 relative shadow-black/10">
      <div className=" flex items-center gap-24 py-28 ps-36">
        <div className="relative">
          <img
            src="../src/assets/laptop.jpg"
            className="rounded-3xl object-cover w-96 h-64"
          />
        </div>
        <div>
          <h1 className="text-purple-600 uppercase text-xl font-bold">
            About Me
          </h1>
          <h2 className="font-bold text-2xl mt-3">
            Front-end Developer <br />
            based in Pune, Maharashtra, India 📍
          </h2>
          <p className="text-lg text-gray-600 mt-5">
            Hey, my name is Swaraj, and I'm a Frontend Developer. <br /> My
            passion is to create and develop a clean UI/UX for <br /> my users.
          </p>
          <p className="text-lg text-gray-600 mt-5">
            My main stack currently is React in combination with <br />
            Tailwind CSS and Bootstrap CSS.
          </p>
        </div>
      </div>
    </div>
  );
}
