import React from "react";

const ProfileCard: React.FC = () => {
  return (
    <div>
      <div className="flex items-center flex-col">
        <img
          className="w-28 h-28 rounded-full mb-4"
          src="/images/profile.jpg"
        />
        <h1 className="text-2xl font-bold">Swaraj Phalke</h1>
        <p className="text-white/70 text-center">
          A passionate Full Stack Web Developer <br /> based in Satara, India. 📍
        </p>
        <a href="/resume/Swaraj_Phalke_Full_Stack_Resume.pdf" target="_blank">
          <button id="bottone1" className="text-black mt-4">
            <strong>Resume</strong>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
