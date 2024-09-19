import React from "react";

export default function About() {
  return (
    <div className=" px-2 relative shadow-md shadow-black/10">
      <div className=" md:flex items-center px-3 pt-12 pb-12 md:gap-24 md:pt-16 md:pb-24 md:ps-36">
        <div className="relative">
          <img
            src="/images/laptop.jpg"
            className="rounded-3xl object-cover w-full h-64 md:w-96 md:h-64"
          />
        </div>
        <div>
          <h1 className="text-purple-600 uppercase text-xl font-bold mt-8">
            About Me
          </h1>
          <h2 className="font-bold text-[26px] md:2xl mt-3">
            Front-end Developer <br />
            based in Pune, Maharashtra, India 📍
          </h2>
          <p className="text-lg text-gray-600 mt-5 tracking-normal">
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
